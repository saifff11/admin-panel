// src/pages/Reports.jsx
import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { getAllReports } from "../services/apiService";
import ReportStatCard from "../components/reports/ReportStatCard";
import QuickActions from "../components/reports/QuickActions";
import ReportsTable from "../components/reports/ReportsTable";
import ReportBreakdown from "../components/reports/ReportBreakdown";

const Reports = () => {
  const [stats, setStats] = useState(null);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      setLoading(true);
      try {
        const res = await getAllReports();
        const apiData = res.data.data || res.data;

        // Normalize response to match your table structure
        const formattedReports = apiData.map((r) => ({
          id: r._id,
          reportedBy: r.reporter?.name || "N/A",
          reportedUser: r.reported?.name || "N/A",
          type: r.reportType || "OTHER",
          priority: r.priority || "LOW",
          date: r.createdAt,
          status: r.status || "NEW",
        }));

        setReports(formattedReports);

        // Compute stats on frontend
        const totalNew = formattedReports.filter(
          (r) => r.status === "NEW"
        ).length;
        const totalProgress = formattedReports.filter(
          (r) => r.status === "IN PROGRESS"
        ).length;
        const totalResolved = formattedReports.filter(
          (r) => r.status === "RESOLVED"
        ).length;
        const totalFalse = formattedReports.filter(
          (r) => r.status === "DISMISSED"
        ).length;

        setStats({
          newReports: { value: totalNew, trend: 0 },
          inProgress: { value: totalProgress, trend: 0 },
          resolvedToday: { value: totalResolved, trend: 0 },
          falseReports: { value: totalFalse, trend: 0 },
        });
      } catch (err) {
        console.error("Failed to fetch reports", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
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

      {/* Breakdown */}
      <ReportBreakdown />
    </div>
  );
};

export default Reports;
