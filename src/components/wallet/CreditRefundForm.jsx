// src/components/wallet/CreditRefundForm.jsx
import React from "react";
import {
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

const CreditRefundForm = () => {
  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      <Typography variant="h6" className="tw-font-bold tw-mb-4">
        Wallet Credit/Refund
      </Typography>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4">
        <TextField
          label="Select User"
          placeholder="Search user by name or email..."
        />
        <TextField
          label="Current Balance"
          defaultValue="₹250"
          InputProps={{ readOnly: true }}
        />
        <FormControl fullWidth>
          <InputLabel>Transaction Type</InputLabel>
          <Select defaultValue="credit" label="Transaction Type">
            <MenuItem value="credit">Credit (Non-Withdrawable)</MenuItem>
            <MenuItem value="refund">Refund (Withdrawable)</MenuItem>
            <MenuItem value="penalty">Penalty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Amount (₹)"
          placeholder="Enter amount"
          type="number"
        />
        <TextField
          label="Reason for Transaction"
          placeholder="Enter reason for this transaction (required for audit trail)"
          multiline
          rows={3}
          className="md:tw-col-span-2"
        />
      </div>
      <FormGroup row className="tw-mt-4">
        <Typography className="tw-mr-4">Send Notification</Typography>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="App Notification"
        />
        <FormControlLabel control={<Checkbox />} label="WhatsApp Message" />
        <FormControlLabel control={<Checkbox />} label="SMS" />
      </FormGroup>
      <div className="tw-flex tw-gap-4 tw-mt-4">
        <Button variant="contained">Process Transaction</Button>
        <Button variant="outlined">Clear Form</Button>
      </div>
    </div>
  );
};
export default CreditRefundForm;
