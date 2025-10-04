import React from "react";
import {
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";

const PaymentSettingsCard = () => {
  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      <Typography variant="h6" className="!tw-font-bold !tw-mb-4">
        Payment & Pricing Settings
      </Typography>
      <div className="tw-grid tw-grid-cols-2 tw-gap-4">
        <TextField
          label="Base Meet-Up Fee (₹)"
          type="number"
          defaultValue={10}
        />
        <TextField
          label="Platform Commission (%)"
          type="number"
          defaultValue={15}
        />
        <TextField
          label="Premium User Discount (%)"
          type="number"
          defaultValue={20}
        />
        <TextField label="Referral Bonus (₹)" type="number" defaultValue={5} />
      </div>
      <div className="tw-mt-4">
        <Typography>Payment Methods</Typography>
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
          label="UPI Payments"
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
          label="Credit/Debit Cards"
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
          label="Wallet Balance"
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
          label="Net Banking"
        />
      </div>
      <Button
        variant="contained"
        className="!tw-mt-4"
        sx={{ backgroundColor: "#16a34a" }}
      >
        Update Pricing
      </Button>
    </div>
  );
};
export default PaymentSettingsCard;
