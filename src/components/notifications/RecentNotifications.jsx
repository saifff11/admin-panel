// src/components/notifications/RecentNotifications.jsx
import React from "react";
import { Typography } from "@mui/material";

const StatusPill = ({ status }) => {
  const colorMap = {
    Delivered: "tw-bg-green-100 tw-text-green-800",
    Scheduled: "tw-bg-yellow-100 tw-text-yellow-800",
    Failed: "tw-bg-red-100 tw-text-red-800",
  };
  return (
    <span
      className={`tw-px-2 tw-py-0.5 tw-rounded-full tw-text-xs tw-font-medium ${colorMap[status]}`}
    >
      {status}
    </span>
  );
};

const RecentNotifications = ({ notifications }) => {
  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      <Typography variant="h6" className="!tw-font-bold !tw-mb-4">
        Recent Notifications
      </Typography>
      <div className="tw-space-y-4">
        {notifications.map((notif) => (
          <div key={notif.id}>
            <div className="tw-flex tw-justify-between tw-items-center">
              <Typography className="!tw-font-semibold">
                {notif.title}
              </Typography>
              <StatusPill status={notif.status} />
            </div>
            <Typography variant="body2" className="!tw-text-gray-500">
              Sent to {notif.target} • {notif.time}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecentNotifications;
