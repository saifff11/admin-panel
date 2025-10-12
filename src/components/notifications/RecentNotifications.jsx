import React from "react";

const StatusPill = ({ status }) => {
  const map = {
    Delivered: "tw-bg-green-100 tw-text-green-700",
    Scheduled: "tw-bg-yellow-100 tw-text-yellow-700",
    Failed: "tw-bg-red-100 tw-text-red-700",
  };
  const classes = map[status] || "tw-bg-gray-100 tw-text-gray-700";
  return (
    <span
      className={`tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-font-semibold ${classes}`}
    >
      {status}
    </span>
  );
};

const RecentNotifications = ({ notifications }) => {
  return (
    <div className="tw-bg-white tw-rounded-2xl tw-border tw-border-gray-200 tw-shadow-sm tw-p-6 tw-h-full">
      <h3 className="tw-text-lg tw-font-semibold tw-text-gray-800 tw-mb-4">
        Recent Notifications
      </h3>

      <div className="tw-space-y-4">
        {notifications.length === 0 ? (
          <p className="tw-text-gray-500">No recent notifications.</p>
        ) : (
          notifications.map((n) => (
            <div
              key={n.id}
              className="tw-pt-1 tw-pb-2 tw-border-b tw-border-gray-100"
            >
              <div className="tw-flex tw-items-start tw-justify-between tw-gap-4">
                <div className="tw-min-w-0">
                  <p className="tw-text-gray-800 tw-font-semibold">{n.title}</p>
                  <p className="tw-text-sm tw-text-gray-500 tw-mt-1">
                    {n.target ? `Sent to ${n.target}` : "—"} • {n.time || ""}
                  </p>
                </div>
                <div className="tw-flex-shrink-0">
                  <StatusPill status={n.status} />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecentNotifications;
