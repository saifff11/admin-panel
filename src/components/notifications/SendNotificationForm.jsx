// src/components/notifications/SendNotificationForm.jsx
import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import {
  sendNotificationToAll,
  sendNotificationToUser,
  sendBulkNotification,
} from "../../services/apiService";

const SendNotificationForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [target, setTarget] = useState("all");
  const [channel, setChannel] = useState("app");
  const [priority, setPriority] = useState("normal");
  const [userIds, setUserIds] = useState(""); // for specific / bulk users

  const handleSend = async () => {
    try {
      const payload = { title, body };

      if (target === "all") {
        await sendNotificationToAll(payload);
        alert("✅ Notification sent to all users");
      } else if (target === "user") {
        if (!userIds) {
          alert("Please enter user ID");
          return;
        }
        await sendNotificationToUser(userIds, payload);
        alert(`✅ Notification sent to ${userIds}`);
      } else if (target === "segment") {
        const idsArray = userIds.split(",").map((id) => id.trim());
        await sendBulkNotification({ userIds: idsArray, ...payload });
        alert(`✅ Bulk notification sent to ${idsArray.length} users`);
      }
    } catch (err) {
      console.error("Notification send failed", err);
      alert("❌ Failed to send notification");
    }
  };

  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      <h2 className="tw-text-xl tw-font-bold tw-mb-4">
        Send Push Notification
      </h2>
      <div className="tw-space-y-4">
        <TextField
          label="Notification Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter notification title"
          fullWidth
        />
        <TextField
          label="Message Content"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Enter your message here..."
          fullWidth
          multiline
          rows={4}
        />
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4">
          <FormControl fullWidth>
            <InputLabel>Send To</InputLabel>
            <Select
              value={target}
              label="Send To"
              onChange={(e) => setTarget(e.target.value)}
            >
              <MenuItem value="all">All Users</MenuItem>
              <MenuItem value="segment">Specific Segment</MenuItem>
              <MenuItem value="user">Single User</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Channel</InputLabel>
            <Select
              value={channel}
              onChange={(e) => setChannel(e.target.value)}
            >
              <MenuItem value="app">App Notification</MenuItem>
              <MenuItem value="email">Email</MenuItem>
              <MenuItem value="sms">SMS</MenuItem>
            </Select>
          </FormControl>
        </div>

        {(target === "user" || target === "segment") && (
          <TextField
            label={
              target === "user"
                ? "User ID"
                : "User IDs (comma separated for multiple)"
            }
            placeholder={
              target === "user" ? "e.g. u123" : "e.g. u123, u124, u125"
            }
            value={userIds}
            onChange={(e) => setUserIds(e.target.value)}
            fullWidth
          />
        )}

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
          <Select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            label="Priority Level"
          >
            <MenuItem value="normal">Normal</MenuItem>
            <MenuItem value="high">High</MenuItem>
          </Select>
        </FormControl>

        <div className="tw-flex tw-gap-4">
          <Button
            variant="contained"
            sx={{ backgroundColor: "#16a34a" }}
            onClick={handleSend}
          >
            Send Now
          </Button>
          <Button
            variant="outlined"
            sx={{ borderColor: "#16a34a", color: "#16a34a" }}
          >
            Schedule
          </Button>
          <Button
            variant="outlined"
            sx={{ borderColor: "#16a34a", color: "#16a34a" }}
          >
            Save as Template
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SendNotificationForm;
