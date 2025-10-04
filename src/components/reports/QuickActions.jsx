import React from "react";
import { Typography } from "@mui/material";

const ActionButton = ({ title, icon, isPrimary }) => (
  <button
    className={`tw-p-4 tw-rounded-lg tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full ${
      isPrimary
        ? "tw-bg-green-500 tw-text-white"
        : "tw-bg-gray-100 hover:tw-bg-gray-200"
    }`}
  >
    <span className="tw-text-2xl">{icon}</span>
    <span className="tw-mt-2 tw-font-semibold">{title}</span>
  </button>
);

const QuickActions = () => {
  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      <Typography variant="h6" className="!tw-font-bold !tw-mb-4">
        Quick Actions
      </Typography>
      <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-4">
        <ActionButton title="Review New Reports" icon="📋" isPrimary />
        <ActionButton title="Suspend User" icon="🚫" />
        <ActionButton title="Send Warning" icon="💬" />
        <ActionButton title="Generate Report" icon="📊" />
      </div>
    </div>
  );
};
export default QuickActions;
