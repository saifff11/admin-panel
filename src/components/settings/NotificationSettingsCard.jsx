import React, { useState, useEffect } from "react";
import { Typography, Checkbox, FormControlLabel, Button } from "@mui/material";
import { updateSettings } from "../../services/apiService";

const NotificationSettingsCard = ({ settings, setSettings }) => {
  const [local, setLocal] = useState({
    whatsapp: false,
    reminder: false,
    offers: false,
  });

  useEffect(() => {
    if (settings?.notifications) {
      setLocal(settings.notifications);
    }
  }, [settings]);

  const toggle = (field) => {
    setLocal((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleUpdate = async () => {
    try {
      const payload = { ...settings, notifications: local };
      const res = await updateSettings(payload);
      setSettings(res.data);
      alert("✅ Notifications updated!");
    } catch (err) {
      console.error(err);
      alert("❌ Update failed");
    }
  };

  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      <Typography variant="h6" className="!tw-font-bold !tw-mb-4">
        Notification Settings
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={local.whatsapp}
            onChange={() => toggle("whatsapp")}
            sx={{ "&.Mui-checked": { color: "#16a34a" } }}
          />
        }
        label="WhatsApp Notifications"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={local.reminder}
            onChange={() => toggle("reminder")}
            sx={{ "&.Mui-checked": { color: "#16a34a" } }}
          />
        }
        label="Meet-Up Reminders"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={local.offers}
            onChange={() => toggle("offers")}
            sx={{ "&.Mui-checked": { color: "#16a34a" } }}
          />
        }
        label="Promotional Offers"
      />
      <Button
        variant="contained"
        sx={{ backgroundColor: "#16a34a" }}
        onClick={handleUpdate}
      >
        Update Notifications
      </Button>
    </div>
  );
};

export default NotificationSettingsCard;
