import React from "react";
import { Typography } from "@mui/material";

const CategoryStatCard = ({ title, value, subtitle }) => {
  return (
    <div
      className="tw-bg-white tw-p-5 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm tw-transform tw-transition tw-duration-200 tw-ease-in-out
                hover:tw-scale-103 hover:tw-shadow-lg hover:tw-backdrop-blur-sm hover:tw-translate-y-[-2px]"
    >
      <Typography variant="subtitle1" className="!tw-text-gray-600">
        {title}
      </Typography>
      <Typography variant="h4" className="!tw-font-bold !tw-mt-2">
        {value}
      </Typography>
      <Typography
        variant="body2"
        className="!tw-text-gray-500 !tw-mt-1 !tw-text-green-600"
      >
        {subtitle}
      </Typography>
    </div>
  );
};
export default CategoryStatCard;
