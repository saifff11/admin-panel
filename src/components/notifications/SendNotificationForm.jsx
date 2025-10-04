// src/components/notifications/SendNotificationForm.jsx
import React from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const SendNotificationForm = () => {
  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      <h2 className="tw-text-xl tw-font-bold tw-mb-4">
        Send Push Notification
      </h2>
      <div className="tw-space-y-4">
        <TextField
          label="Notification Title"
          placeholder="Enter notification title"
          fullWidth
        />
        <TextField
          label="Message Content"
          placeholder="Enter your message here..."
          fullWidth
          multiline
          rows={4}
        />
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4">
          <FormControl fullWidth>
            <InputLabel>Send To</InputLabel>
            <Select defaultValue="all" label="Send To">
              <MenuItem value="all">All Users</MenuItem>
              <MenuItem value="segment">Specific Segment</MenuItem>
              <MenuItem value="user">Single User</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Channel</InputLabel>
            <Select defaultValue="app" label="Channel">
              <MenuItem value="app">App Notification</MenuItem>
              <MenuItem value="email">Email</MenuItem>
              <MenuItem value="sms">SMS</MenuItem>
            </Select>
          </FormControl>
        </div>
        <TextField
          label="Schedule Notification (Optional)"
          placeholder="dd-mm-yyyy --:--"
          fullWidth
          InputProps={{
            endAdornment: <CalendarTodayIcon className="tw-cursor-pointer" />,
          }}
        />
        <FormControl fullWidth>
          <InputLabel>Priority Level</InputLabel>
          <Select defaultValue="normal" label="Priority Level">
            <MenuItem value="normal">Normal</MenuItem>
            <MenuItem value="high">High</MenuItem>
          </Select>
        </FormControl>
        <div className="tw-flex tw-gap-4">
          <Button variant="contained" sx={{backgroundColor: "#16a34a"}}>Send Now</Button>
          <Button variant="outlined" sx={{ borderColor: "#16a34a", color: "#16a34a" }}>Schedule</Button>
          <Button variant="outlined" sx={{ borderColor: "#16a34a", color: "#16a34a" }}>Save as Template</Button>
        </div>
      </div>
    </div>
  );
};
export default SendNotificationForm;
