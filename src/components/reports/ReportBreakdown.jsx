// src/components/reports/ReportBreakdown.jsx
import React from "react";
import { Typography } from "@mui/material";

const breakdownData = [
  { name: "User Behavior", value: 35, color: "#ef4444" },
  { name: "Inappropriate Content", value: 28, color: "#f97316" },
  { name: "Payment Issues", value: 20, color: "#3b82f6" },
  { name: "Fake Profile", value: 12, color: "#a855f7" },
  { name: "Other", value: 5, color: "#22c55e" },
];

const resolutionData = [
  { label: "Average Resolution Time:", value: "2.5 hours" },
  {
    label: "Fastest Resolution:",
    value: "15 minutes",
    color: "tw-text-green-600",
  },
  { label: "Longest Resolution:", value: "8 hours", color: "tw-text-red-600" },
];

const ReportBreakdown = () => {
  return (
    <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
      <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
        <Typography variant="h6" className="tw-font-bold tw-mb-4">
          Report Categories Breakdown
        </Typography>
        <div className="tw-space-y-3">
          {breakdownData.map((item) => (
            <div key={item.name} className="tw-flex tw-items-center">
              <span
                className="tw-w-3 tw-h-3 tw-rounded-full tw-mr-3"
                style={{ backgroundColor: item.color }}
              ></span>
              <span>{item.name}</span>
              <span className="tw-font-bold tw-ml-1">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
      <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
        <Typography variant="h6" className="tw-font-bold tw-mb-4">
          Resolution Times
        </Typography>
        <div className="tw-space-y-2">
          {resolutionData.map((item) => (
            <div key={item.label} className="tw-flex tw-justify-between">
              <span className="tw-text-gray-600">{item.label}</span>
              <span className={`tw-font-bold ${item.color || ""}`}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
        <div className="tw-bg-gray-50 tw-p-4 tw-rounded-lg tw-mt-4">
          <Typography variant="subtitle1" className="tw-font-semibold tw-mb-2">
            Performance Targets:
          </Typography>
          <ul className="tw-list-disc tw-list-inside tw-text-gray-600">
            <li>High Priority: &lt; 1 hour ✅</li>
            <li>Medium Priority: &lt; 4 hours ✅</li>
            <li>Low Priority: &lt; 24 hours ✅</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ReportBreakdown;
