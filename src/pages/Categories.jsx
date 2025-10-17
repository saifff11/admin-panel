// src/pages/Categories.jsx
import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../services/apiService";

import CategoryList from "../components/categories/CategoryList";
import QuickAddCategory from "../components/categories/QuickAddCategory";
import CategoryStatCard from "../components/categories/CategoryStatCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showQuickAdd, setShowQuickAdd] = useState(false);

  const [stats, setStats] = useState({
    totalCategories: { value: 0, subtitle: "Categories total" },
    activeMeetups: { value: 0, subtitle: "Active meetups" },
    popularCategory: { value: "N/A", subtitle: "Top category" },
    totalLocations: { value: 0, subtitle: "Locations total" },
  });

  // Fetch categories
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await getAllCategories();
      const data = res.data.data || res.data;
      setCategories(data);
      setStats((s) => ({
        ...s,
        totalCategories: {
          ...s.totalCategories,
          value: data.length,
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

  // Create Category
  const handleAddCategory = async (payload) => {
    try {
      const res = await createCategory(payload);
      if (res.data) {
        const newCategory = res.data;
        setCategories((prev) => [...prev, newCategory]); // append new category
        setShowQuickAdd(false); // close panel
        alert("✅ Category added successfully!");
      }
    } catch (err) {
      console.error("Failed to create category:", err);
      alert("❌ Something went wrong while creating category");
    }
  };

  // Update Category
  const handleUpdateCategory = async (id, payload) => {
    try {
      const res = await updateCategory(id, payload);
      if (res.data) {
        setCategories((prev) =>
          prev.map((c) => (c.id === id ? { ...c, ...res.data } : c))
        );
        alert("✅ Category updated!");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Failed to update category");
    }
  };

  // Delete Category
  const handleDeleteCategory = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?"))
      return;
    try {
      await deleteCategory(id);
      setCategories((prev) => prev.filter((c) => c.id !== id));
      alert("🗑️ Category deleted");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to delete category");
    }
  };

  return (
    <div className="tw-space-y-6">
      {/* Page Header */}
      <div className="tw-flex tw-justify-between tw-items-center">
        <Typography variant="h4" className="!tw-font-bold">
          Category Management
        </Typography>
        <div className="tw-flex tw-gap-2">
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setShowQuickAdd(true)}
            sx={{ backgroundColor: "#16a34a" }}
          >
            Add Category
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

      {/* Quick Add */}
      {showQuickAdd && (
        <QuickAddCategory
          onAdd={handleAddCategory} // ✅ correctly pass callback
          onClose={() => setShowQuickAdd(false)}
        />
      )}

      {/* Category List */}
      <CategoryList
        categories={categories}
        loading={loading}
        onUpdate={handleUpdateCategory}
        onDelete={handleDeleteCategory}
      />
    </div>
  );
};

export default Categories;
