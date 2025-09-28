// src/components/categories/QuickAddCategory.jsx
import React from "react";
import { TextField, Button } from "@mui/material";

const templates = [
  { name: "Gaming", desc: "Video games & esports", icon: "🎮" },
  { name: "Fitness", desc: "Workouts & health", icon: "💪" },
  { name: "Music", desc: "Concerts & jam sessions", icon: "🎵" },
  { name: "Art & Craft", desc: "Creative workshops", icon: "🎨" },
  { name: "Tech", desc: "Coding & startups", icon: "💻" },
  { name: "Cooking", desc: "Cooking & recipes", icon: "🍳" },
];

const QuickAddCategory = ({ show, onToggle }) => {
  if (!show) return null;

  return (
    <div className="tw-p-6 tw-rounded-xl tw-bg-gradient-to-br tw-from-purple-500 tw-to-indigo-600 tw-text-white">
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
        <h3 className="tw-text-xl tw-font-semibold">
          🚀 Quick Add New Category
        </h3>
        <Button variant="outlined" color="inherit" onClick={onToggle}>
          Toggle Quick Add
        </Button>
      </div>

      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-[3fr_1fr] tw-gap-4">
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-4">
          <TextField
            label="Category Name *"
            variant="filled"
            sx={{ bgcolor: "rgba(255,255,255,0.1)", borderRadius: 1 }}
          />
          <TextField
            label="Icon/Emoji"
            variant="filled"
            sx={{ bgcolor: "rgba(255,255,255,0.1)", borderRadius: 1 }}
          />
          <TextField
            label="Description"
            variant="filled"
            sx={{ bgcolor: "rgba(255,255,255,0.1)", borderRadius: 1 }}
          />
        </div>
        <div className="tw-grid tw-grid-rows-3 tw-gap-2">
          <Button variant="contained" color="inherit" sx={{ color: "black" }}>
            Add Category
          </Button>
          <Button variant="outlined" color="inherit">
            Clear
          </Button>
          <Button variant="outlined" color="inherit">
            Advanced Options
          </Button>
        </div>
      </div>

      <h4 className="tw-font-semibold tw-mt-6 tw-mb-3">
        🏛️ Popular Category Templates
      </h4>
      <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-6 tw-gap-4">
        {templates.map((t) => (
          <div
            key={t.name}
            className="tw-bg-white/20 hover:tw-bg-white/30 tw-p-4 tw-rounded-lg tw-text-center tw-cursor-pointer"
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
