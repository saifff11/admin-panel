import React from "react";
import { Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const StatCard = ({ title, value, icon, trend, trendDirection }) => {
  const isPositive = trendDirection === "up";

  const trendColor = isPositive ? "tw-text-green-600" : "tw-text-red-600";
  const iconBgColor = isPositive ? "tw-bg-green-100" : "tw-bg-red-100";

  return (
    <div className="tw-bg-white tw-p-5 tw-shadow-sm tw-border tw-border-gray-200 tw-rounded-xl tw-flex tw-items-center tw-justify-between">
      <div>
        <Typography variant="subtitle2" className="tw-text-gray-500">
          {title}
        </Typography>
        <Typography variant="h4" className="tw-font-bold tw-mt-1">
          {value}
        </Typography>

        {/* Trend Info */}
        <div className={`tw-flex tw-items-center tw-mt-1 ${trendColor}`}>
          {isPositive ? (
            <ArrowUpwardIcon className="tw-w-4 tw-h-4" />
          ) : (
            <ArrowDownwardIcon className="tw-w-4 tw-h-4" />
          )}
          <Typography variant="body2" className="tw-font-semibold tw-ml-1">
            {trend}%
          </Typography>
        </div>
      </div>

      <div className={`tw-p-3 tw-rounded-lg ${iconBgColor} ${trendColor}`}>
        {icon}
      </div>
    </div>
  );
};

export default StatCard;
