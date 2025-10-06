// src/pages/Categories.jsx

import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
// import {
//   getCategoryStats,
//   getFullCategories,
// } from "../services/mockApiService";
import { getAllCategories } from "../services/apiService";

import CategoryStatCard from "../components/categories/CategoryStatCard";
import QuickAddCategory from "../components/categories/QuickAddCategory";
import CategoryList from "../components/categories/CategoryList";

const Categories = () => {
  const [stats, setStats] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showQuickAdd, setShowQuickAdd] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [statsData, categoriesData] = await Promise.all([
          getCategoryStats(),
          getFullCategories(),
        ]);
        setStats(statsData);
        setCategories(categoriesData);
      } catch (err) {
        console.error("Failed to fetch category data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="tw-space-y-6">
      {/* Page Header */}
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
            sx={{ backgroundColor: "#16a34a", color: "white", border: "none" }}
          >
            Add New Category
          </Button>
        </div>
      </div>

      {/* Stat Cards */}
      {loading || !stats ? (
        <Typography>Loading stats...</Typography>
      ) : (
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
      )}

      {/* Quick Add Form */}
      <QuickAddCategory
        show={showQuickAdd}
        onToggle={() => setShowQuickAdd(!showQuickAdd)}
      />

      {/* Category List */}
      <CategoryList categories={categories} loading={loading} />
    </div>
  );
};

export default Categories;
