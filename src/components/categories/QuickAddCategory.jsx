// src/components/categories/QuickAddCategory.jsx
import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { createCategory } from "../../services/apiService";

const templates = [
  { name: "Gaming", desc: "Video games & esports", icon: "🎮" },
  { name: "Fitness", desc: "Workouts & health", icon: "💪" },
  { name: "Music", desc: "Concerts & jam sessions", icon: "🎵" },
  { name: "Art & Craft", desc: "Creative workshops", icon: "🎨" },
  { name: "Tech", desc: "Coding & startups", icon: "💻" },
  { name: "Cooking", desc: "Cooking & recipes", icon: "🍳" },
];

const QuickAddCategory = ({ onAdd, onClose }) => {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");
  const [subcategories, setSubcategories] = useState(""); // comma-separated
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    if (!name.trim()) return alert("⚠️ Category name is required");

    try {
      setLoading(true);

      const payload = {
        name,
        subcategories: subcategories
          ? subcategories.split(",").map((s) => s.trim())
          : [],
      };

      const res = await createCategory(payload);

      if (res.data?.success) {
        alert("✅ Category added successfully");
        if (onAdd) onAdd(res.data.data);
        setName("");
        setIcon("");
        setDescription("");
        setSubcategories("");
        if (onClose) onClose();
      } else {
        console.error("Create failed:", res.data);
        alert("❌ Failed to create category");
      }
    } catch (err) {
      // Only show error if it's not a successful response
      console.error("Error creating category:", err);
      // Check if error is AxiosError with response
      if (err.response) {
        alert(
          `❌ Server Error: ${err.response.status} ${err.response.statusText}`
        );
      } else {
        alert("❌ Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleTemplateClick = (t) => {
    setName(t.name);
    setIcon(t.icon);
    setDescription(t.desc);
  };

  return (
    <div className="tw-p-6 tw-rounded-xl tw-bg-gradient-to-br tw-from-purple-500 tw-to-indigo-600 tw-text-white">
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
        <h3 className="tw-text-xl tw-font-semibold">
          🚀 Quick Add New Category
        </h3>
        {onClose && (
          <Button
            variant="outlined"
            sx={{ borderColor: "white", color: "white" }}
            onClick={onClose}
          >
            Close
          </Button>
        )}
      </div>

      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-[3fr_1fr] tw-gap-4">
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-4 tw-gap-4">
          <TextField
            label="Category Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="filled"
            sx={{
              bgcolor: "rgba(255,255,255,0.1)",
              input: { color: "white" },
              label: { color: "white" },
            }}
          />
          <TextField
            label="Icon/Emoji"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
            variant="filled"
            sx={{
              bgcolor: "rgba(255,255,255,0.1)",
              input: { color: "white" },
              label: { color: "white" },
            }}
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="filled"
            sx={{
              bgcolor: "rgba(255,255,255,0.1)",
              input: { color: "white" },
              label: { color: "white" },
            }}
          />
          <TextField
            label="Subcategories (comma separated)"
            value={subcategories}
            onChange={(e) => setSubcategories(e.target.value)}
            variant="filled"
            sx={{
              bgcolor: "rgba(255,255,255,0.1)",
              input: { color: "white" },
              label: { color: "white" },
            }}
          />
        </div>

        <div className="tw-flex tw-flex-col tw-gap-2">
          <Button
            variant="contained"
            sx={{ backgroundColor: "white", color: "#16a34a" }}
            onClick={handleAdd}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Category"}
          </Button>
          <Button
            variant="outlined"
            sx={{ borderColor: "white", color: "white" }}
            onClick={() => {
              setName("");
              setIcon("");
              setDescription("");
              setSubcategories("");
            }}
          >
            Clear
          </Button>
          <Button
            variant="outlined"
            sx={{ borderColor: "white", color: "white" }}
          >
            Advanced Options
          </Button>
        </div>
      </div>

      {/* Templates */}
      <Typography variant="h6" className="!tw-font-bold tw-mt-6 tw-mb-3">
        📄 Popular Category Templates
      </Typography>
      <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-6 tw-gap-4">
        {templates.map((t) => (
          <div
            key={t.name}
            className="tw-bg-white/20 hover:tw-bg-white/30 tw-p-4 tw-rounded-lg tw-text-center tw-cursor-pointer"
            onClick={() => handleTemplateClick(t)}
          >
            <div className="tw-text-3xl">{t.icon}</div>
            <div className="tw-font-bold tw-mt-2">{t.name}</div>
            <div className="tw-text-xs tw-text-gray-200">{t.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickAddCategory;
