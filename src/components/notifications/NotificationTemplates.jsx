import React from "react";

const NotificationTemplates = ({ templates }) => {
  return (
    <div className="tw-bg-white tw-rounded-2xl tw-border tw-border-gray-200 tw-shadow-sm tw-p-6 tw-h-full tw-flex tw-flex-col">
      <div className="tw-flex tw-items-center tw-justify-between tw-mb-4">
        <h3 className="tw-text-lg tw-font-semibold tw-text-gray-800">
          Notification Templates
        </h3>

        <button className="tw-inline-flex tw-items-center tw-gap-2 tw-bg-green-600 hover:tw-bg-green-700 tw-text-white tw-text-sm tw-font-medium tw-px-3 tw-py-2 tw-rounded-lg tw-transition">
          +
          <span>New Template</span>
        </button>
      </div>

      <div className="tw-flex-1 tw-space-y-3 tw-overflow-hidden">
        {templates.length === 0 ? (
          <p className="tw-text-gray-500">No templates yet.</p>
        ) : (
          templates.map((template) => (
            <div
              key={template.id}
              className="tw-flex tw-items-center tw-justify-between tw-py-3 tw-border-b tw-border-gray-100"
            >
              <p className="tw-text-gray-800 tw-font-medium tw-truncate">
                {template.name}
              </p>
              <button className="tw-ml-4 tw-inline-flex tw-items-center tw-px-3 tw-py-1.5 tw-border tw-border-green-600 tw-text-green-600 tw-rounded-lg tw-text-sm hover:tw-bg-green-50 tw-transition">
                Use
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationTemplates;
