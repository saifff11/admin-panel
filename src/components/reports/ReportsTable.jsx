// src/components/reports/ReportsTable.jsx
import React from "react";
import { Typography, TextField, Button, Select, MenuItem } from "@mui/material";
import { format } from "date-fns";

const Pill = ({ text, colorClass }) => (
  <span
    className={`tw-px-2 tw-py-1 tw-rounded-full tw-text-xs tw-font-medium ${colorClass}`}
  >
    {text}
  </span>
);

const ReportsTable = ({ reports = [], loading }) => {
  const getTypeColor = (type) => {
    switch (type) {
      case "USER BEHAVIOR":
        return "tw-bg-blue-100 tw-text-blue-800";
      case "INAPPROPRIATE CONTENT":
        return "tw-bg-red-100 tw-text-red-800";
      case "PAYMENT ISSUE":
        return "tw-bg-yellow-100 tw-text-yellow-800";
      case "FAKE PROFILE":
        return "tw-bg-purple-100 tw-text-purple-800";
      case "HARASSMENT":
        return "tw-bg-pink-100 tw-text-pink-800";
      default:
        return "tw-bg-gray-100 tw-text-gray-800";
    }
  };

  const getPriorityColor = (priority) =>
    ({
      HIGH: "tw-bg-red-100 tw-text-red-800",
      MEDIUM: "tw-bg-yellow-100 tw-text-yellow-800",
      LOW: "tw-bg-green-100 tw-text-green-800",
    }[priority?.toUpperCase()] || "tw-bg-gray-100 tw-text-gray-800");

  const getStatusColor = (status) =>
    ({
      NEW: "tw-bg-yellow-100 tw-text-yellow-800",
      "IN PROGRESS": "tw-bg-blue-100 tw-text-blue-800",
      RESOLVED: "tw-bg-green-100 tw-text-green-800",
      DISMISSED: "tw-bg-gray-100 tw-text-gray-800",
    }[status?.toUpperCase()] || "tw-bg-gray-100 tw-text-gray-800");

  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      {/* Header */}
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
        <Typography variant="h6" className="!tw-font-bold">
          User Reports Management
        </Typography>
        <div className="tw-flex tw-gap-2">
          <TextField placeholder="Search reports..." size="small" />
          <Select size="small" defaultValue="all">
            <MenuItem value="all">All Types</MenuItem>
            <MenuItem value="USER BEHAVIOR">User Behavior</MenuItem>
            <MenuItem value="INAPPROPRIATE CONTENT">
              Inappropriate Content
            </MenuItem>
            <MenuItem value="PAYMENT ISSUE">Payment Issues</MenuItem>
            <MenuItem value="FAKE PROFILE">Fake Profile</MenuItem>
            <MenuItem value="HARASSMENT">Harassment</MenuItem>
            <MenuItem value="OTHER">Other</MenuItem>
          </Select>
          <Select size="small" defaultValue="all">
            <MenuItem value="all">All Status</MenuItem>
            <MenuItem value="NEW">New</MenuItem>
            <MenuItem value="IN PROGRESS">In Progress</MenuItem>
            <MenuItem value="RESOLVED">Resolved</MenuItem>
            <MenuItem value="DISMISSED">Dismissed</MenuItem>
          </Select>
          <Button
            variant="outlined"
            size="small"
            sx={{ borderColor: "#16a34a", color: "#16a34a" }}
          >
            Export
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="tw-overflow-x-auto">
        <table className="tw-w-full tw-border-collapse tw-text-left">
          <thead>
            <tr className="tw-border-b tw-bg-gray-50">
              {[
                "REPORT ID",
                "REPORTED BY",
                "REPORTED USER",
                "TYPE",
                "PRIORITY",
                "DATE",
                "STATUS",
                "ACTIONS",
              ].map((head) => (
                <th key={head} className="tw-p-3 tw-font-medium">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="8" className="tw-text-center tw-p-4">
                  Loading...
                </td>
              </tr>
            ) : reports.length === 0 ? (
              <tr>
                <td colSpan="8" className="tw-text-center tw-p-4">
                  No reports found
                </td>
              </tr>
            ) : (
              reports.map((report) => (
                <tr key={report.id} className="tw-border-b hover:tw-bg-gray-50">
                  <td className="tw-p-3">{report.id}</td>
                  <td className="tw-p-3">{report.reportedBy}</td>
                  <td className="tw-p-3">{report.reportedUser}</td>
                  <td className="tw-p-3">
                    <Pill
                      text={report.type}
                      colorClass={getTypeColor(report.type)}
                    />
                  </td>
                  <td className="tw-p-3">
                    <Pill
                      text={report.priority}
                      colorClass={getPriorityColor(report.priority)}
                    />
                  </td>
                  <td className="tw-p-3">
                    {report.date
                      ? format(new Date(report.date), "yyyy-MM-dd")
                      : "—"}
                  </td>
                  <td className="tw-p-3">
                    <Pill
                      text={report.status}
                      colorClass={getStatusColor(report.status)}
                    />
                  </td>
                  <td className="tw-p-3">
                    <Button
                      size="small"
                      variant="contained"
                      sx={{ backgroundColor: "#16a34a" }}
                    >
                      Review
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportsTable;
