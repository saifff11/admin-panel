// src/components/settings/SecurityPrivacyCard.jsx
import React from "react";
import {
  Typography,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

const SecurityPrivacyCard = () => {
  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      <Typography variant="h6" className="tw-font-bold tw-mb-4">
        Security & Privacy
      </Typography>
      <div>
        <Typography>User Verification</Typography>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Phone Number Verification Required"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Email Verification Required"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Profile Photo Required"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="ID Verification for Premium"
        />
      </div>
      <div className="tw-mt-4">
        <Typography>Data Retention (days)</Typography>
        <Select fullWidth defaultValue={180}>
          <MenuItem value={180}>180 days</MenuItem>
        </Select>
      </div>
      <div className="tw-mt-4">
        <Typography>Auto-delete Inactive Accounts (months)</Typography>
        <Select fullWidth defaultValue={12}>
          <MenuItem value={12}>12 months</MenuItem>
        </Select>
      </div>
      <Button variant="contained" className="!tw-mt-4">
        Update Security Settings
      </Button>
    </div>
  );
};
export default SecurityPrivacyCard;
