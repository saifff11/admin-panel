// src/components/reports/ReportStatCard.jsx
import React from "react";
import { Typography } from "@mui/material";

const ReportStatCard = ({ title, value, trend }) => {
  const isPositive = trend >= 0;
  return (
    <div className="tw-bg-white tw-p-5 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      <Typography variant="subtitle1" className="tw-text-gray-600">
        {title}
      </Typography>
      <Typography variant="h4" className="tw-font-bold tw-mt-2">
        {value}
      </Typography>
      <Typography
        variant="body2"
        className={`${
          isPositive ? "tw-text-green-600" : "tw-text-red-600"
        } tw-mt-1`}
      >
        {isPositive ? "+" : ""}
        {trend}
      </Typography>
    </div>
  );
};
export default ReportStatCard;
