import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const MeetupRewardsCard = () => {
  const [values, setValues] = useState({
    host: 10,
    attendee: 2,
    firstTime: 20,
  });

  const handleChange = (key, val) => {
    setValues({ ...values, [key]: val });
  };

  return (
    <div className="tw-bg-white tw-p-4 tw-px-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      {/* Header */}
      <div className="tw-flex tw-justify-between tw-items-center">
        <h3 className="tw-text-lg tw-font-semibold flex items-center gap-2">
          🤝 Meet-Up Completion Rewards
        </h3>
        <span className="tw-text-gray-600 tw-font-medium">ACTIVE</span>
      </div>
      <hr className="tw-border-gray/10 tw-mx-2" />

      {/* Rewards Inputs */}
      <div className="tw-space-y-4">
        <div className="tw-flex tw-justify-between tw-items-center">
          <span>Host Reward (per meetup)</span>
          <TextField
            size="small"
            type="number"
            value={values.host}
            onChange={(e) => handleChange("host", e.target.value)}
            InputProps={{
              startAdornment: <span className="tw-mr-1">₹</span>,
            }}
          />
        </div>
        <hr className="tw-border-gray/1 tw-mx-2" />

        <div className="tw-flex tw-justify-between tw-items-center">
          <span>Attendee Reward (per meetup)</span>
          <TextField
            size="small"
            type="number"
            value={values.attendee}
            onChange={(e) => handleChange("attendee", e.target.value)}
            InputProps={{
              startAdornment: <span className="tw-mr-1">₹</span>,
            }}
          />
        </div>
        <hr className="tw-border-gray/1 tw-mx-2" />

        <div className="tw-flex tw-justify-between tw-items-center">
          <span>First-Time User Bonus</span>
          <TextField
            size="small"
            type="number"
            value={values.firstTime}
            onChange={(e) => handleChange("firstTime", e.target.value)}
            InputProps={{
              startAdornment: <span className="tw-mr-1">₹</span>,
            }}
          />
        </div>
        <hr className="tw-border-gray/1 tw-mx-2" />
      </div>

      {/* Action Button */}
      <div className="tw-mt-4">
        <Button variant="contained" sx={{ backgroundColor: "#16a34a" }}>Save Changes</Button>
      </div>
    </div>
  );
};

export default MeetupRewardsCard;
