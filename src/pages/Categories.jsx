// src/pages/Categories.jsx
import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { getAllCategories } from "../services/apiService";

import CategoryStatCard from "../components/categories/CategoryStatCard";
import QuickAddCategory from "../components/categories/QuickAddCategory";
import CategoryList from "../components/categories/CategoryList";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showQuickAdd, setShowQuickAdd] = useState(true);

  // Optional: If you have stats API, integrate it. For now, we'll skip stats API.
  const [stats, setStats] = useState({
    totalCategories: { value: 0, subtitle: "Categories total" },
    activeMeetups: { value: 0, subtitle: "Active meetups" },
    popularCategory: { value: "N/A", subtitle: "Top category" },
    totalLocations: { value: 0, subtitle: "Locations total" },
  });

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const { data } = await getAllCategories();
      setCategories(data.categories || []);
      setStats((prev) => ({
        ...prev,
        totalCategories: {
          value: data.categories?.length || 0,
          subtitle: "Categories total",
        },
      }));
    } catch (err) {
      console.error("Failed to fetch categories", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="tw-space-y-6">
      {/* Header */}
      <div className="tw-flex tw-justify-between tw-items-center">
        <Typography variant="h4" className="!tw-font-bold">
          Category Management Dashboard
        </Typography>
        <div className="tw-flex tw-gap-2">
          <Button
            variant="outlined"
            sx={{ borderColor: "#16a34a", color: "#16a34a" }}
          >
            Import from JSON
          </Button>
          <Button
            variant="outlined"
            sx={{ borderColor: "#16a34a", color: "#16a34a" }}
          >
            Export Categories
          </Button>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setShowQuickAdd(true)}
            sx={{ backgroundColor: "#16a34a", color: "white" }}
          >
            Add New Category
          </Button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-6">
        <CategoryStatCard
          title="Total Categories"
          value={stats.totalCategories.value}
          subtitle={stats.totalCategories.subtitle}
        />
        <CategoryStatCard
          title="Active Meetups"
          value={stats.activeMeetups.value}
          subtitle={stats.activeMeetups.subtitle}
        />
        <CategoryStatCard
          title="Popular Category"
          value={stats.popularCategory.value}
          subtitle={stats.popularCategory.subtitle}
        />
        <CategoryStatCard
          title="Total Locations"
          value={stats.totalLocations.value}
          subtitle={stats.totalLocations.subtitle}
        />
      </div>

      {/* Quick Add Form */}
      <QuickAddCategory
        show={showQuickAdd}
        onToggle={() => setShowQuickAdd(!showQuickAdd)}
        onCategoryAdded={fetchCategories}
      />

      {/* Category List */}
      <CategoryList
        categories={categories}
        loading={loading}
        refresh={fetchCategories}
      />
    </div>
  );
};

export default Categories;
