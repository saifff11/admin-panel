import React, { useState } from "react";
import {
  sendNotificationToAll,
  sendNotificationToUser,
  sendBulkNotification,
} from "../../services/apiService";

const SendNotificationForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [target, setTarget] = useState("all");
  const [channel, setChannel] = useState("app");
  const [priority, setPriority] = useState("normal");
  const [userIds, setUserIds] = useState("");
  const [schedule, setSchedule] = useState("");

  const handleSend = async () => {
    try {
      const payload = { title, body, channel, priority, schedule };

      if (target === "all") {
        await sendNotificationToAll(payload);
        alert("✅ Notification sent to all users");
      } else if (target === "user") {
        if (!userIds) return alert("❌ Please enter user ID");
        await sendNotificationToUser(userIds, payload);
        alert(`✅ Notification sent to ${userIds}`);
      } else if (target === "segment") {
        const idsArray = userIds.split(",").map((id) => id.trim()).filter(Boolean);
        if (!idsArray.length) return alert("❌ Please enter at least one user ID");
        await sendBulkNotification({ userIds: idsArray, ...payload });
        alert(`✅ Bulk notification sent to ${idsArray.length} users`);
      }
    } catch (err) {
      console.error("Notification send failed", err);
      alert("❌ Failed to send notification");
    }
  };

  return (
    <div className="tw-bg-white tw-rounded-2xl tw-border tw-border-gray-200 tw-shadow-sm tw-p-6">
      <h2 className="tw-text-2xl tw-font-semibold tw-mb-4">
        Send Push Notification
      </h2>

      <div className="tw-space-y-4">
        {/* Title */}
        <div>
          <label className="tw-block tw-text-sm tw-text-gray-600 tw-mb-2">
            Notification Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter notification title"
            className="tw-w-full tw-rounded-xl tw-border tw-border-gray-200 tw-px-4 tw-py-3 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-green-400 tw-transition"
          />
        </div>

        {/* Message */}
        <div>
          <label className="tw-block tw-text-sm tw-text-gray-600 tw-mb-2">
            Message Content
          </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter your message here..."
            rows={4}
            className="tw-w-full tw-rounded-xl tw-border tw-border-gray-200 tw-px-4 tw-py-3 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-green-400 tw-transition tw-resize-none"
          />
        </div>

        {/* Two-column selects */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4">
          <div>
            <label className="tw-block tw-text-sm tw-text-gray-600 tw-mb-2">
              Send To
            </label>
            <select
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="tw-w-full tw-rounded-xl tw-border tw-border-gray-200 tw-px-4 tw-py-3 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-green-400"
            >
              <option value="all">All Users</option>
              <option value="segment">Specific Segment</option>
              <option value="user">Single User</option>
            </select>
          </div>

          <div>
            <label className="tw-block tw-text-sm tw-text-gray-600 tw-mb-2">
              Channel
            </label>
            <select
              value={channel}
              onChange={(e) => setChannel(e.target.value)}
              className="tw-w-full tw-rounded-xl tw-border tw-border-gray-200 tw-px-4 tw-py-3 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-green-400"
            >
              <option value="app">App Notification</option>
              <option value="email">Email</option>
              <option value="sms">SMS</option>
            </select>
          </div>
        </div>

        {/* user ids */}
        {(target === "user" || target === "segment") && (
          <div>
            <label className="tw-block tw-text-sm tw-text-gray-600 tw-mb-2">
              {target === "user"
                ? "User ID"
                : "User IDs (comma separated)"}
            </label>
            <input
              type="text"
              value={userIds}
              onChange={(e) => setUserIds(e.target.value)}
              placeholder={
                target === "user" ? "e.g. u123" : "e.g. u123, u124"
              }
              className="tw-w-full tw-rounded-xl tw-border tw-border-gray-200 tw-px-4 tw-py-3 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-green-400"
            />
          </div>
        )}

        {/* Scheduler + priority */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4 tw-items-end">
          <div>
            <label className="tw-block tw-text-sm tw-text-gray-600 tw-mb-2">
              Schedule Notification (Optional)
            </label>
            <input
              type="datetime-local"
              value={schedule}
              onChange={(e) => setSchedule(e.target.value)}
              className="tw-w-full tw-rounded-xl tw-border tw-border-gray-200 tw-px-4 tw-py-3 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-green-400"
            />
          </div>

          <div>
            <label className="tw-block tw-text-sm tw-text-gray-600 tw-mb-2">
              Priority Level
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="tw-w-full tw-rounded-xl tw-border tw-border-gray-200 tw-px-4 tw-py-3 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-green-400"
            >
              <option value="normal">Normal</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        {/* action buttons */}
        <div className="tw-flex tw-flex-wrap tw-items-center tw-gap-3 tw-pt-2">
          <button
            onClick={handleSend}
            className="tw-inline-flex tw-items-center tw-justify-center tw-bg-green-600 hover:tw-bg-green-700 tw-text-white tw-font-semibold tw-px-5 tw-py-2 tw-rounded-lg tw-shadow-sm tw-transition"
          >
            Send Now
          </button>

          <button className="tw-inline-flex tw-items-center tw-justify-center tw-border tw-border-gray-200 tw-text-gray-700 tw-bg-white tw-px-4 tw-py-2 tw-rounded-lg hover:tw-bg-gray-50 tw-transition">
            Schedule
          </button>

          <button className="tw-inline-flex tw-items-center tw-justify-center tw-border tw-border-gray-200 tw-text-gray-700 tw-bg-white tw-px-4 tw-py-2 tw-rounded-lg hover:tw-bg-gray-50 tw-transition">
            Save as Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendNotificationForm;
