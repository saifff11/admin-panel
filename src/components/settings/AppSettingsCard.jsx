// src/components/settings/AppSettingsCard.jsx
import React from "react";
import {
  Typography,
  Slider,
  TextField,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";

const AppSettingsCard = () => {
  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      <Typography variant="h6" className="tw-font-bold tw-mb-4">
        App-Wide Settings
      </Typography>
      <div className="tw-space-y-4">
        <div>
          <Typography gutterBottom>Meet-Up Search Radius (km)</Typography>
          <div className="tw-flex tw-items-center tw-gap-4">
            <Slider defaultValue={10} step={1} marks min={1} max={50} />
            <span className="tw-font-bold tw-text-blue-600">10 km</span>
          </div>
        </div>
        <div className="tw-grid tw-grid-cols-2 tw-gap-4">
          <TextField
            label="Daily Meet-Up Limit per User"
            type="number"
            defaultValue={3}
          />
          <TextField
            label="Maximum Participants per Meet-Up"
            type="number"
            defaultValue={8}
          />
        </div>
        <Select fullWidth defaultValue={12}>
          <MenuItem value={12}>
            Auto-Cancel Meet-Up if Not Filled (hours before)
          </MenuItem>
        </Select>
        <div>
          <Typography>Cancellation Policy</Typography>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Free cancellation up to 2 hours before"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Penalty for late cancellation (₹20)"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="No-show penalty (₹50)"
          />
        </div>
        <div className="tw-flex tw-gap-4">
          <Button variant="contained">Save Settings</Button>
          <Button variant="outlined">Reset to Default</Button>
        </div>
      </div>
    </div>
  );
};
export default AppSettingsCard;
