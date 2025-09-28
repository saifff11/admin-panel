// src/components/categories/CategoryStatCard.jsx
import React from "react";
import { Typography } from "@mui/material";

const CategoryStatCard = ({ title, value, subtitle }) => {
  return (
    <div className="tw-bg-white tw-p-5 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      <Typography variant="subtitle1" className="tw-text-gray-600">
        {title}
      </Typography>
      <Typography variant="h4" className="tw-font-bold tw-mt-2">
        {value}
      </Typography>
      <Typography variant="body2" className="tw-text-gray-500 tw-mt-1">
        {subtitle}
      </Typography>
    </div>
  );
};
export default CategoryStatCard;
