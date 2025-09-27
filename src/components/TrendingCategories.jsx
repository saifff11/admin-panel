import React from "react";
import { Typography } from "@mui/material";

const TrendingCategories = ({ data }) => {
  return (
    <div className="tw-bg-white tw-p-4 tw-px-5 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      <Typography variant="h6" className="tw-font-semibold tw-mb-4 tw-pb-3">
        <b>Trending Categories</b>
      </Typography>

      {/* List of categories */}
      <div className="tw-space-y-4">
        {data.map((category) => (
          <div key={category.name}>
            <div className="tw-flex tw-justify-between tw-mb-4">
              <Typography variant="body1" className="tw-font-medium">
                {category.name}
              </Typography>
              <Typography variant="body1" className="tw-text-gray-500">
                {category.value}%
              </Typography>
            </div>

            {/* Progress Bar */}
            <div className="tw-w-full tw-bg-gray-200 tw-rounded-full tw-h-2">
              <div
                className="tw-bg-green-500 tw-h-2 tw-rounded-full"
                style={{ width: `${category.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCategories;
