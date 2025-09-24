import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import StatCard from "../components/StatCard";
import { getDashboardStats } from "../services/mockApiService";

import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch dashboard stats", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Typography>Loading dashboard...</Typography>;
  }

  const formatValue = (value) => {
    if (value >= 1000) {
      return new Intl.NumberFormat("en-IN").format(value);
    }
    return value;
  };

  return (
    <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-6">
      <StatCard
        title="Active Users Today"
        value={formatValue(stats.activeUsers.value)}
        trend={stats.activeUsers.trend}
        trendDirection={stats.activeUsers.trend >= 0 ? "up" : "down"}
        icon={<PeopleAltOutlinedIcon />}
      />
      <StatCard
        title="Total Meet-Ups Scheduled"
        value={formatValue(stats.meetupsScheduled.value)}
        trend={stats.meetupsScheduled.trend}
        trendDirection={stats.meetupsScheduled.trend >= 0 ? "up" : "down"}
        icon={<EventAvailableOutlinedIcon />}
      />
      <StatCard
        title="Revenue This Week"
        value={`₹${formatValue(stats.revenue.value)}`}
        trend={stats.revenue.trend}
        trendDirection={stats.revenue.trend >= 0 ? "up" : "down"}
        icon={<MonetizationOnOutlinedIcon />}
      />
      <StatCard
        title="Referrals This Week"
        value={formatValue(stats.referrals.value)}
        trend={stats.referrals.trend}
        trendDirection={stats.referrals.trend >= 0 ? "up" : "down"}
        icon={<HowToRegOutlinedIcon />}
      />
    </div>
  );
};

export default Dashboard;
