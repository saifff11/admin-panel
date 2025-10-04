import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Pill = ({ text, colorClass }) => (
  <span
    className={`tw-px-2 tw-py-1 tw-rounded-full tw-text-xs tw-font-medium ${colorClass}`}
  >
    {text}
  </span>
);

const TeamAccess = ({ members, loading }) => {
  const getRoleColor = (role) =>
    ({
      "SUPER ADMIN": "tw-bg-green-100 tw-text-green-800",
      MODERATOR: "tw-bg-yellow-100 tw-text-yellow-800",
      EDITOR: "tw-bg-blue-100 tw-text-blue-800",
      "FINANCE MANAGER": "tw-bg-orange-100 tw-text-orange-800",
    }[role]);
  const getStatusColor = (status) =>
    ({
      ACTIVE: "tw-bg-green-100 tw-text-green-800",
      SUSPENDED: "tw-bg-red-100 tw-text-red-800",
    }[status]);

  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
        <Typography variant="h6" className="!tw-font-bold">
          Team Access & Permissions
        </Typography>
        <div className="tw-flex tw-gap-2">
          <TextField placeholder="Search team members..." size="small" />
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ backgroundColor: "#16a34a" }}
          >
            Add Sub-Admin
          </Button>
        </div>
      </div>
      <div className="tw-overflow-x-auto">
        <table className="tw-w-full tw-border-collapse tw-text-left">
          <thead>
            <tr className="tw-border-b tw-bg-gray-50">
              {[
                "NAME",
                "EMAIL",
                "ROLE",
                "PERMISSIONS",
                "LAST ACTIVE",
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
                <td colSpan="7" className="tw-text-center tw-p-4">
                  Loading...
                </td>
              </tr>
            ) : (
              members.map((member) => (
                <tr key={member.id} className="tw-border-b hover:tw-bg-gray-50">
                  <td className="tw-p-3">{member.name}</td>
                  <td className="tw-p-3">{member.email}</td>
                  <td className="tw-p-3">
                    <Pill
                      text={member.role}
                      colorClass={getRoleColor(member.role)}
                    />
                  </td>
                  <td className="tw-p-3">{member.permissions}</td>
                  <td className="tw-p-3">{member.lastActive}</td>
                  <td className="tw-p-3">
                    <Pill
                      text={member.status}
                      colorClass={getStatusColor(member.status)}
                    />
                  </td>
                  <td className="tw-p-3">
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{ borderColor: "#16a34a", color: "#16a34a" }}
                    >
                      Edit
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
export default TeamAccess;
