// src/components/categories/CategoryList.jsx
import React from "react";
import { Typography, TextField, Button, Select, MenuItem } from "@mui/material";
import { deleteCategory } from "../../services/apiService";

const CategoryItem = ({ category, refresh }) => {
  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete ${category.name}?`)) {
      try {
        await deleteCategory(category._id || category.id);
        alert("✅ Category deleted");
        refresh && refresh();
      } catch (err) {
        console.error("Failed to delete category", err);
        alert("❌ Failed to delete category");
      }
    }
  };

  return (
    <div className="tw-bg-gray-100 tw-p-4 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      <div className="tw-flex tw-justify-between tw-items-start">
        <div>
          <div className="tw-flex tw-items-center tw-gap-3">
            <span className="tw-text-2xl">{category.icon || "📁"}</span>
            <Typography variant="h6" className="!tw-font-bold">
              {category.name}
            </Typography>
            <span className="tw-bg-green-100 tw-text-green-800 tw-px-2 tw-py-0.5 tw-rounded-full tw-text-xs tw-font-medium">
              {category.status || "ACTIVE"}
            </span>
          </div>
          <Typography variant="body2" className="!tw-text-gray-600 !tw-mt-2">
            {category.description}
          </Typography>
        </div>
        <div className="tw-flex tw-gap-2">
          <Button
            variant="outlined"
            size="small"
            sx={{ backgroundColor: "#16a34a", color: "white" }}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

const CategoryList = ({ categories, loading, refresh }) => {
  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
        <Typography variant="h6" className="!tw-font-bold">
          Categories & Subcategories
        </Typography>
        <div className="tw-flex tw-gap-2">
          <TextField placeholder="Search categories..." size="small" />
          <Select size="small" defaultValue="all">
            <MenuItem value="all">All Categories</MenuItem>
            <MenuItem value="active">Active Only</MenuItem>
            <MenuItem value="inactive">Inactive Only</MenuItem>
          </Select>
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
        ) : (
          categories.map((cat) => (
            <CategoryItem
              key={cat._id || cat.id}
              category={cat}
              refresh={refresh}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryList;
