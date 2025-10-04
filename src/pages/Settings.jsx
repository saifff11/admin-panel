import React, { useState, useEffect } from "react";
import { getTeamMembers } from "../services/mockApiService";

import AppSettingsCard from "../components/settings/AppSettingsCard";
import NotificationSettingsCard from "../components/settings/NotificationSettingsCard";
import PaymentSettingsCard from "../components/settings/PaymentSettingsCard";
import SecurityPrivacyCard from "../components/settings/SecurityPrivacyCard";
import TeamAccess from "../components/settings/TeamAccess";

const Settings = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const teamData = await getTeamMembers();
        setTeamMembers(teamData);
      } catch (err) {
        console.error("Failed to fetch settings data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="tw-space-y-6">
      {/* First Row */}
      <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-6">
        <AppSettingsCard />
        <NotificationSettingsCard />
      </div>

      {/* Second Row */}
      <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-6">
        <PaymentSettingsCard />
        <SecurityPrivacyCard />
      </div>

      {/* Third Row */}
      <TeamAccess members={teamMembers} loading={loading} />
    </div>
  );
};

export default Settings;
