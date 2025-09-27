// src/components/CategoriesCard.jsx

import React from "react";
import { Typography, Button } from "@mui/material";

const categories = ["Food", "Photography", "Travel", "Sports", "Walk", "Study"];

// Define colors for each tag to match the Figma design
const colorMap = {
  Food: "hover:tw-bg-red-200 tw-bg-red-100 tw-text-red-800",
  Photography: "hover:tw-bg-blue-200 tw-bg-blue-100 tw-text-blue-800",
  Travel: "hover:tw-bg-purple-200 tw-bg-purple-100 tw-text-purple-800",
  Sports: "hover:tw-bg-cyan-200 tw-bg-cyan-100 tw-text-cyan-800",
  Walk: "hover:tw-bg-green-200 tw-bg-green-100 tw-text-green-800",
  Study: "hover:tw-bg-yellow-200 tw-bg-yellow-100 tw-text-yellow-800",
};

const CategoriesCard = () => {
  return (
    <div className="tw-bg-white tw-p-3 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm ">
      {/* Card Header */}
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
        <Typography variant="h6" className="tw-font-semibold">
          Categories
        </Typography>
        <Button variant="text" size="small">
          Edit
        </Button>
      </div>

      {/* Tags Container */}
      <div className="tw-flex tw-flex-wrap tw-gap-2">
        {categories.map((category) => (
          <span
            key={category}
            className={`tw-px-3 tw-py-1 tw-rounded-md tw-text-sm tw-font-medium tw-cursor-pointer ${
              colorMap[category] || "tw-bg-gray-100"
            }`}
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CategoriesCard;
