// src/components/categories/QuickAddCategory.jsx
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { createCategory } from "../../services/apiService";

const QuickAddCategory = ({ show, onToggle, onCategoryAdded }) => {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = async () => {
    if (!name) {
      alert("Please enter a category name");
      return;
    }
    try {
      await createCategory({ name, icon, description });
      alert("✅ Category added successfully");
      setName("");
      setIcon("");
      setDescription("");
      onCategoryAdded && onCategoryAdded();
    } catch (err) {
      console.error("Failed to create category", err);
      alert("❌ Failed to create category");
    }
  };

  if (!show) return null;

  return (
    <div className="tw-p-6 tw-rounded-xl tw-bg-gradient-to-br tw-from-purple-500 tw-to-indigo-600 tw-text-white">
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
        <h3 className="tw-text-xl tw-font-semibold">
          🚀 Quick Add New Category
        </h3>
        <Button
          variant="outlined"
          color="inherit"
          onClick={onToggle}
          sx={{ backgroundColor: "#16a34a", color: "white", border: "none" }}
        >
          Toggle Quick Add
        </Button>
      </div>

      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-[3fr_1fr] tw-gap-4">
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-4">
          <TextField
            label="Category Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="filled"
            sx={{ bgcolor: "rgba(255,255,255,0.1)", borderRadius: 1 }}
            InputLabelProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            label="Icon/Emoji"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
            variant="filled"
            sx={{ bgcolor: "rgba(255,255,255,0.1)", borderRadius: 1 }}
            InputLabelProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="filled"
            sx={{ bgcolor: "rgba(255,255,255,0.1)", borderRadius: 1 }}
            InputLabelProps={{
              style: { color: "white" },
            }}
          />
        </div>
        <div className="tw-grid tw-grid-rows-3 tw-gap-2">
          <Button
            variant="contained"
            color="inherit"
            sx={{ color: "black" }}
            onClick={handleAdd}
          >
            Add Category
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => {
              setName("");
              setIcon("");
              setDescription("");
            }}
          >
            Clear
          </Button>
          <Button variant="outlined" color="inherit">
            Advanced Options
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickAddCategory;
