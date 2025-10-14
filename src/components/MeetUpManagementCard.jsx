import React from "react";
import { Typography, TextField, Button, Divider } from "@mui/material";

// Import MUI Icons
import EventNoteIcon from "@mui/icons-material/EventNote";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const MeetupManagementCard = () => {
  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      <Typography variant="h6" className="!tw-font-semibold">
        Meet-Up Management
      </Typography>
      {/* Card Header */}
      <div className="tw-bg-white tw-p-6 tw-rounded-2xl tw-border tw-border-gray-500 tw-shadow-sm">
        <div className="tw-flex tw-items-center tw-mb-4">
          <EventNoteIcon className="tw-text-gray-600 tw-mr-2" />
          <Typography variant="p" className="!tw-font-semibold">
            Control Meet-Up Status
          </Typography>
        </div>
        {/* Form Content */}
        <div className="tw-space-y-4">
          <TextField
            label="Meet-Up ID"
            // defaultValue="MU-001"
            placeholder="MU-001"
            variant="outlined"
            fullWidth
          />
          <div>
            <Typography variant="caption" className="!tw-text-gray-500">
              Current Status
            </Typography>
            <div className="tw-mt-1">
              <span className="tw-bg-yellow-100 tw-text-yellow-800 tw-px-3 tw-py-1 tw-rounded-md tw-text-sm tw-font-medium">
                Pending Approval
              </span>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="tw-flex tw-gap-4">
            <Button
              variant="contained"
              startIcon={<WarningAmberIcon />}
              sx={{
                flexGrow: 1,
                backgroundColor: "#ef4444",
                "&:hover": { backgroundColor: "#dc2626" },
              }}
            >
              Force Cancel
            </Button>
            <Button
              variant="contained"
              startIcon={<CheckCircleIcon />}
              sx={{
                flexGrow: 1,
                backgroundColor: "#22c55e",
                "&:hover": { backgroundColor: "#16a34a" },
              }}
            >
              Approve Meet-Up
            </Button>
          </div>
        </div>
        <Divider sx={{ my: 3 }} />
        {/* Reschedule Section */}
        <div className="tw-space-y-2">
          <Typography variant="subtitle1" className="!tw-font-semibold">
            Reschedule
          </Typography>
          <Typography variant="body2" className="!tw-text-gray-600">
            New Meet-Up Scheduled: Check if new meet-up has been scheduled by
            Saif. Check Email
          </Typography>
          <div className="tw-flex tw-items-center tw-justify-between tw-p-3 tw-bg-gray-100 tw-rounded-lg">
            <span className="tw-text-gray-500">Reschedule</span>
            <CalendarTodayIcon className="tw-text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetupManagementCard;
