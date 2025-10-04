import React from "react";
import {
  Typography,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

const NotificationSettingsCard = () => {
  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      <Typography variant="h6" className="!tw-font-bold !tw-mb-4">
        Notification Settings
      </Typography>
      <div>
        <Typography>WhatsApp Notifications</Typography>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={{
                "&.Mui-checked": {
                  color: "#16a34a", // green when checked
                },
              }}
            />
          }
          label="New Meet-Up Alerts"
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={{
                "&.Mui-checked": {
                  color: "#16a34a", // green when checked
                },
              }}
            />
          }
          label="Meet-Up Reminders (2 hours before)"
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "&.Mui-checked": {
                  color: "#16a34a", // green when checked
                },
              }}
            />
          }
          label="Promotional Offers"
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "&.Mui-checked": {
                  color: "#16a34a", // green when checked
                },
              }}
            />
          }
          label="Payment Confirmations"
        />
      </div>
      <div className="tw-mt-4">
        <Typography>Custom App Alerts</Typography>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={{
                "&.Mui-checked": {
                  color: "#16a34a", // green when checked
                },
              }}
            />
          }
          label="You're Late Alert (15 min after start)"
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={{
                "&.Mui-checked": {
                  color: "#16a34a", // green when checked
                },
              }}
            />
          }
          label='"No Match Nearby" Alert'
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "&.Mui-checked": {
                  color: "#16a34a", // green when checked
                },
              }}
            />
          }
          label="Weekly Activity Summary"
        />
      </div>
      <div className="tw-mt-4">
        <Typography>Notification Timing</Typography>
        <Select fullWidth defaultValue={30}>
          <MenuItem value={30}>Batch Every 30 Minutes</MenuItem>
        </Select>
      </div>
      <Button
        variant="contained"
        className="!tw-mt-4"
        sx={{ backgroundColor: "#16a34a" }}
      >
        Update Notification Settings
      </Button>
    </div>
  );
};
export default NotificationSettingsCard;
