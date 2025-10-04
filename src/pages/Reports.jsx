import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { getReportStats, getUserReports } from "../services/mockApiService";

import ReportStatCard from "../components/reports/ReportStatCard";
import QuickActions from "../components/reports/QuickActions";
import ReportsTable from "../components/reports/ReportsTable";
import ReportBreakdown from "../components/reports/ReportBreakdown";

const Reports = () => {
  const [stats, setStats] = useState(null);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [statsData, reportsData] = await Promise.all([
          getReportStats(),
          getUserReports(),
        ]);
        setStats(statsData);
        setReports(reportsData);
      } catch (err) {
        console.error("Failed to fetch reports data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="tw-space-y-6">
      {/* Stat Cards */}
      {loading || !stats ? (
        <Typography>Loading...</Typography>
      ) : (
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-6">
          <ReportStatCard
            title="New Reports"
            value={stats.newReports.value}
            trend={stats.newReports.trend}
          />
          <ReportStatCard
            title="In Progress"
            value={stats.inProgress.value}
            trend={stats.inProgress.trend}
          />
          <ReportStatCard
            title="Resolved Today"
            value={stats.resolvedToday.value}
            trend={stats.resolvedToday.trend}
          />
          <ReportStatCard
            title="False Reports"
            value={stats.falseReports.value}
            trend={stats.falseReports.trend}
          />
        </div>
      )}

      {/* Quick Actions */}
      <QuickActions />

      {/* Reports Table */}
      <ReportsTable reports={reports} loading={loading} />

      {/* Final Row */}
      <ReportBreakdown />
    </div>
  );
};

export default Reports;
