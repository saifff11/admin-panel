import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
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
    <div className="tw-space-y-6">
      <SendNotificationForm />

      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <NotificationTemplates templates={templates} />
        )}
        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <RecentNotifications notifications={recent} />
        )}
      </div>
    </div>
  );
};

export default Notifications;
