import React, { useState, useEffect } from "react";
import {
  getNotificationTemplates,
  getRecentNotifications,
} from "../services/mockApiService";

import SendNotificationForm from "../components/notifications/SendNotificationForm";
import NotificationTemplates from "../components/notifications/NotificationTemplates";
import RecentNotifications from "../components/notifications/RecentNotifications";

const Notifications = () => {
  const [templates, setTemplates] = useState([]);
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [templatesData, recentData] = await Promise.all([
          getNotificationTemplates(),
          getRecentNotifications(),
        ]);
        setTemplates(templatesData);
        setRecent(recentData);
      } catch (err) {
        console.error("Failed to fetch notification data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className=" tw-px-2 tw-py-2 tw-space-y-6">
      <SendNotificationForm />

      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
        {loading ? (
          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-border tw-border-gray-100 tw-shadow-sm">
            <p className="tw-text-gray-500">Loading templates...</p>
          </div>
        ) : (
          <NotificationTemplates templates={templates} />
        )}

        {loading ? (
          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-border tw-border-gray-100 tw-shadow-sm">
            <p className="tw-text-gray-500">Loading notifications...</p>
          </div>
        ) : (
          <RecentNotifications notifications={recent} />
        )}
      </div>
    </div>
  );
};

export default Notifications;
