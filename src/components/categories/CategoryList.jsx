// src/components/categories/CategoryList.jsx
import React from "react";
import { Typography, TextField, Button } from "@mui/material";

const CategoryItem = ({ category }) => (
  <div className="tw-bg-gray-100 tw-p-4 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
    <div className="tw-flex tw-justify-between tw-items-start">
      <div>
        <div className="tw-flex tw-items-center tw-gap-3">
          <Typography variant="h6" className="!tw-font-bold">
            {category.name}
          </Typography>
          <span className="tw-bg-green-100 tw-text-green-800 tw-px-2 tw-py-0.5 tw-rounded-full tw-text-xs tw-font-medium">
            {category.subcategories.length} Subcategories
          </span>
        </div>
      </div>
      <div className="tw-flex tw-gap-2">
        <Button
          variant="outlined"
          size="small"
          sx={{ backgroundColor: "#16a34a", color: "white" }}
        >
          Edit
        </Button>
        <Button variant="outlined" color="error" size="small">
          Delete
        </Button>
      </div>
    </div>

    {/* Subcategory Pills */}
    {category.subcategories.length > 0 ? (
      <div className="tw-mt-3 tw-flex tw-flex-wrap tw-gap-2">
        {category.subcategories.map((sub) => (
          <span
            key={sub.id}
            className="tw-bg-white tw-text-gray-700 tw-px-2 tw-py-1 tw-rounded-md tw-text-xs"
          >
            {sub.name}
          </span>
        ))}
      </div>
    ) : (
      <Typography variant="body2" className="!tw-text-gray-500 tw-mt-2">
        No subcategories
      </Typography>
    )}
  </div>
);

const CategoryList = ({ categories, loading }) => {
  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
        <Typography variant="h6" className="!tw-font-bold">
          Categories & Subcategories
        </Typography>
        <div className="tw-flex tw-gap-2">
          <TextField placeholder="Search categories..." size="small" />
          <Button
            variant="outlined"
            sx={{ borderColor: "#16a34a", color: "#16a34a" }}
          >
            Bulk Actions
          </Button>
        </div>
      </div>

      <div className="tw-space-y-4">
        {loading ? (
          <Typography>Loading categories...</Typography>
        ) : categories.length === 0 ? (
          <Typography>No categories found.</Typography>
        ) : (
          categories.map((cat) => <CategoryItem key={cat.id} category={cat} />)
        )}
      </div>
    </div>
  );
};

export default CategoryList;
