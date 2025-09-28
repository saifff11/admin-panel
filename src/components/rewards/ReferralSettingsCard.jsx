import React, { useState } from "react";
import { Button, Checkbox, FormControlLabel } from "@mui/material";

const ReferralSettingsCard = () => {
  const [selectedReward, setSelectedReward] = useState(5); // default ₹5
  const [customValue, setCustomValue] = useState("");
  const [conditions, setConditions] = useState({
    instantCredit: true,
    creditAfterMeetup: false,
    bothVerified: true,
    limitPerUser: false,
  });

  const handleConditionChange = (key) => {
    setConditions({ ...conditions, [key]: !conditions[key] });
  };

  return (
    <div className="tw-bg-white tw-p-4 tw-px-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      {/* Header */}
      <div className="tw-flex tw-justify-between tw-items-center">
        <h3 className="tw-text-lg tw-font-semibold flex items-center gap-2">
          🔗 Referral Reward Settings
        </h3>

        <span className="tw-text-gray-600 tw-font-medium">ACTIVE</span>
      </div>
      <hr className="tw-border-gray/10 tw-mx-2" />

      {/* Reward Amount Options */}
      <p className="tw-text-sm tw-font-medium tw-mb-">
        Current Referral Reward Amount
      </p>
      <div className="tw-grid tw-grid-cols-4 tw-gap-3 tw-mb-4">
        {[0, 5, 10].map((amount) => (
          <button
            key={amount}
            onClick={() => {
              setSelectedReward(amount);
              setCustomValue("");
            }}
            className={`tw-border tw-rounded-xl tw-p-4 tw-font-medium ${
              selectedReward === amount
                ? "tw-border-blue-500 tw-shadow-md"
                : "tw-border-gray-300"
            }`}
          >
            <div className="tw-text-lg">₹{amount}</div>
            <div className="tw-text-xs tw-text-gray-500">
              {amount === 0
                ? "NO REWARD"
                : amount === 5
                ? "STANDARD"
                : "PREMIUM"}
            </div>
          </button>
        ))}

        {/* Custom input */}
        <div
          className={`tw-border tw-rounded-xl tw-p-4 tw-font-medium ${
            customValue
              ? "tw-border-blue-500 tw-shadow-md"
              : "tw-border-gray-300"
          }`}
        >
          <div className="tw-text-base">Custom</div>
          <input
            type="number"
            placeholder="₹"
            value={customValue}
            onChange={(e) => {
              setCustomValue(e.target.value);
              setSelectedReward(null);
            }}
            className="tw-border tw-rounded-md tw-mt-1 tw-w-full tw-px-2 tw-py-1 tw-text-sm"
          />
        </div>
      </div>

      {/* Reward Conditions */}
      <p className="tw-text-sm tw-font-medium tw-mb-2">Reward Conditions</p>
      <div className="tw-grid tw-grid-cols-2 tw-gap-2 tw-mb-4">
        <FormControlLabel
          control={
            <Checkbox
              checked={conditions.instantCredit}
              onChange={() => handleConditionChange("instantCredit")}
              sx={{
                "&.Mui-checked": {
                  color: "#16a34a", // green when checked
                },
              }}
            />
          }
          label="Instant credit on signup"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={conditions.creditAfterMeetup}
              onChange={() => handleConditionChange("creditAfterMeetup")}
              sx={{
                "&.Mui-checked": {
                  color: "#16a34a", // green when checked
                },
              }}
            />
          }
          label="Credit after first meetup"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={conditions.bothVerified}
              onChange={() => handleConditionChange("bothVerified")}
              sx={{
                "&.Mui-checked": {
                  color: "#16a34a", // green when checked
                },
              }}
            />
          }
          label="Both users must be verified"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={conditions.limitPerUser}
              onChange={() => handleConditionChange("limitPerUser")}
              sx={{
                "&.Mui-checked": {
                  color: "#16a34a", // green when checked
                },
              }}
            />
          }
          label="Limit per user per month"
        />
      </div>

      {/* Action buttons */}
      <div className="tw-flex tw-gap-3">
        <Button variant="contained" sx={{ backgroundColor: "#16a34a" }}>
          Save Changes
        </Button>
        <Button variant="outlined" sx={{ color: "#16a34a" }}>
          Reset to Default
        </Button>
      </div>
    </div>
  );
};

export default ReferralSettingsCard;
