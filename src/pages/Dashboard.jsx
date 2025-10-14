import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import StatCard from "../components/StatCard";
import { getDashboardStats } from "../services/apiService";
import {
  getDailyMeetups,
  getTrendingCategories,
  getUserDistribution,
} from "../services/mockApiService";
import CategoriesCard from "../components/CategoriesCard";

import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import DailyMeetupsChart from "../components/charts/DailyMeetupsChart";
import TrendingCategories from "../components/TrendingCategories";
import UserDistributionChart from "../components/charts/UserDistributionChart";
import MeetupManagementCard from "../components/MeetUpManagementCard";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [distributionData, setDistributionData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsResponse, meetups, categories, distribution] =
          await Promise.all([
            getDashboardStats(),
            getDailyMeetups(),
            getTrendingCategories(),
            getUserDistribution(),
          ]);

        setStats(statsResponse.data.data); // ✅ use .data.data to reach actual stats
        setChartData(meetups);
        setCategories(categories);
        setDistributionData(distribution);
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading || !stats) {
    return <Typography>Loading dashboard...</Typography>;
  }

  const formatValue = (value) => {
    if (value >= 1000) {
      return new Intl.NumberFormat("en-IN").format(value);
    }
    return value;
  };

  return (
    <div className="tw-space-y-6">
      <div
        className="
      tw-grid
      tw-grid-cols-1
      sm:tw-grid-cols-3
      lg:tw-grid-cols-3
      [@media(min-width:1286px)]:tw-grid-cols-4
      tw-gap-x-6
      tw-gap-y-6
        "
      >
        <StatCard
          title="Active Users Today"
          value={formatValue(stats.totalUsers)}
          // trend={stats.activeUsers.trend}
          // trendDirection={stats.activeUsers.trend >= 0 ? "up" : "down"}
          icon={<PeopleAltOutlinedIcon />}
        />
        <StatCard
          title="Total Meet-Ups Scheduled"
          value={formatValue(stats.totalMeetups)}
          // trend={stats.meetupsScheduled.trend}
          // trendDirection={stats.meetupsScheduled.trend >= 0 ? "up" : "down"}
          icon={<EventAvailableOutlinedIcon />}
        />
        <StatCard
          title="Revenue This Week"
          value={`₹${formatValue(stats.totalSuccessfulTransactions)}`}
          // trend={stats.revenue.trend}
          // trendDirection={stats.revenue.trend >= 0 ? "up" : "down"}
          icon={<MonetizationOnOutlinedIcon />}
        />
        <StatCard
          title="Referrals This Week"
          value={formatValue(stats.meetupsInLast7Days)}
          // trend={stats.referrals.trend}
          // trendDirection={stats.referrals.trend >= 0 ? "up" : "down"}
          icon={<HowToRegOutlinedIcon />}
        />
      </div>

      <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-6">
        {/* The chart will span 2 columns on large screens */}
        <div className="lg:tw-col-span-1">
          <div className="tw-mb-3">
            <DailyMeetupsChart data={chartData} />
          </div>
          <div>
            <CategoriesCard />
          </div>
        </div>

        {/* The categories will span 1 column */}
        <div className="lg:tw-col-span-1">
          <TrendingCategories data={categories} />
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-4 lg:tw-grid-cols-4 tw-gap-6">
        <div className="tw-col-span-1">
          <UserDistributionChart data={distributionData} />
        </div>
        <div className="tw-col-span-3">
          <MeetupManagementCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
