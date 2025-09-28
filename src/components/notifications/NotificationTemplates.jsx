// src/components/notifications/NotificationTemplates.jsx
import React from "react";
import { Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const NotificationTemplates = ({ templates }) => {
  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
        <Typography variant="h6" className="tw-font-bold">
          Notification Templates
        </Typography>
        <Button variant="contained" size="small" startIcon={<AddIcon />}>
          New Template
        </Button>
      </div>
      <div className="tw-space-y-3">
        {templates.map((template) => (
          <div
            key={template.id}
            className="tw-flex tw-justify-between tw-items-center"
          >
            <Typography>{template.name}</Typography>
            <Button variant="outlined" size="small">
              Use
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NotificationTemplates;
