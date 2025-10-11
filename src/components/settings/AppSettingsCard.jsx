import React, { useState, useEffect } from "react";
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
import { updateSettings } from "../../services/apiService";

const AppSettingsCard = ({ settings, setSettings }) => {
  const [local, setLocal] = useState({});

  useEffect(() => {
    setLocal({
      searchRadiusKm: settings.searchRadiusKm,
      dailyMeetupLimit: settings.dailyMeetupLimit,
      maxParticipants: settings.maxParticipants,
      autoCancelHours: settings.autoCancelHours,
      lateCancelPenalty: settings.lateCancelPenalty,
      noShowPenalty: settings.noShowPenalty,
    });
  }, [settings]);

  const handleSave = async () => {
    try {
      const payload = {
        ...settings,
        searchRadiusKm: Number(local.searchRadiusKm),
        dailyMeetupLimit: Number(local.dailyMeetupLimit),
        maxParticipants: Number(local.maxParticipants),
        autoCancelHours: Number(local.autoCancelHours),
        lateCancelPenalty: Number(local.lateCancelPenalty),
        noShowPenalty: Number(local.noShowPenalty),
      };
      const res = await updateSettings(payload);
      setSettings(res.data);
      alert("✅ App settings updated!");
    } catch (err) {
      console.error("Failed to update app settings", err);
      alert("❌ Update failed");
    }
  };

  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      <Typography variant="h6" className="!tw-font-bold !tw-mb-4">
        App-Wide Settings
      </Typography>
      <div className="tw-space-y-4">
        <div>
          <Typography gutterBottom>Meet-Up Search Radius (km)</Typography>
          <div className="tw-flex tw-items-center tw-gap-4">
            <Slider
              value={local.searchRadiusKm || 0}
              onChange={(e, val) => setLocal({ ...local, searchRadiusKm: val })}
              step={1}
              min={1}
              max={50}
              sx={{ color: "#16a34a" }}
            />
            <span className="tw-font-bold tw-text-green-600">
              {local.searchRadiusKm} km
            </span>
          </div>
        </div>
        <div className="tw-grid tw-grid-cols-2 tw-gap-4">
          <TextField
            label="Daily Meet-Up Limit per User"
            type="number"
            value={local.dailyMeetupLimit || ""}
            onChange={(e) =>
              setLocal({ ...local, dailyMeetupLimit: e.target.value })
            }
          />
          <TextField
            label="Maximum Participants per Meet-Up"
            type="number"
            value={local.maxParticipants || ""}
            onChange={(e) =>
              setLocal({ ...local, maxParticipants: e.target.value })
            }
          />
        </div>
        <Select
          fullWidth
          value={local.autoCancelHours || ""}
          onChange={(e) =>
            setLocal({ ...local, autoCancelHours: e.target.value })
          }
        >
          <MenuItem value={12}>Auto-cancel after 12 hours</MenuItem>
          <MenuItem value={6}>Auto-cancel after 6 hours</MenuItem>
        </Select>

        <div>
          <Typography>Penalties</Typography>
          <TextField
            label="Late Cancel Penalty (₹)"
            type="number"
            value={local.lateCancelPenalty || ""}
            onChange={(e) =>
              setLocal({ ...local, lateCancelPenalty: e.target.value })
            }
          />
          <TextField
            label="No Show Penalty (₹)"
            type="number"
            value={local.noShowPenalty || ""}
            onChange={(e) =>
              setLocal({ ...local, noShowPenalty: e.target.value })
            }
            className="tw-ml-4"
          />
        </div>
        <div className="tw-flex tw-gap-4">
          <Button
            variant="contained"
            sx={{ backgroundColor: "#16a34a" }}
            onClick={handleSave}
          >
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppSettingsCard;
