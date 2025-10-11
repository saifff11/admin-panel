// src/pages/Settings.jsx
import React, { useState, useEffect } from "react";
import { getSettings } from "../services/apiService";

import AppSettingsCard from "../components/settings/AppSettingsCard";
import NotificationSettingsCard from "../components/settings/NotificationSettingsCard";
import PaymentSettingsCard from "../components/settings/PaymentSettingsCard";
import SecurityPrivacyCard from "../components/settings/SecurityPrivacyCard";
import TeamAccess from "../components/settings/TeamAccess";

const Settings = () => {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getSettings();
        setSettings(res.data);
      } catch (err) {
        console.error("Failed to fetch settings", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading || !settings) return <p>Loading settings...</p>;

  return (
    <div className="tw-space-y-6">
      <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-6">
        <AppSettingsCard settings={settings} setSettings={setSettings} />
        <NotificationSettingsCard
          settings={settings}
          setSettings={setSettings}
        />
      </div>

      <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-6">
        <PaymentSettingsCard settings={settings} setSettings={setSettings} />
        <SecurityPrivacyCard settings={settings} setSettings={setSettings} />
      </div>

      <TeamAccess members={teamMembers} loading={false} />
    </div>
  );
};

export default Settings;
