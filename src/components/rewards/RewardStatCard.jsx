import React from "react";
import { Card, CardContent, Typography, Select, MenuItem } from "@mui/material";
import RewardHistory from "./RewardHistory";

const RewardStatCard = () => {
  return (
    <div className="tw-bg-white tw-p-4 tw-x-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      {/* Header */}
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-3">
        <h3 className="tw-text-lg tw-font-semibold">📊 Reward Statistics & History</h3>
        <Select size="small" defaultValue="30">
          <MenuItem value="7">Last 7 Days</MenuItem>
          <MenuItem value="30">Last 30 Days</MenuItem>
          <MenuItem value="90">Last 90 Days</MenuItem>
        </Select>
      </div>
      <hr className="tw-border-gray/10 tw-mx-2" />

      {/* Stats Grid */}
      <div className="tw-bg-gray tw-grid md:tw-grid-cols-3 tw-gap-6 tw-mb-4 tw-mt-6 tw-mx-4">
        {/* Total Rewards Paid */}
        <Card className="!tw-shadow-none !tw-border !tw-border-gray-200">
          <CardContent className="!tw-bg-gray-200">
            <p className="tw-text-sm tw-text-white-500">Total Rewards Paid 💰</p>
            <Typography variant="h5" className="!tw-font-bold">
              ₹45,230
            </Typography>

            <p className="tw-text-green-600 tw-text-sm">+8% from last month</p>
          </CardContent>
        </Card>

        {/* Referral Rewards */}
        <Card className="!tw-shadow-none !tw-border !tw-border-gray-200">
          <CardContent className="!tw-bg-gray-200">
            <p className="tw-text-sm tw-text-white-500">Referral Rewards 🔗</p>
            <Typography variant="h5" className="!tw-font-bold">
              ₹12,450
            </Typography>

            <p className="tw-text-green-600 tw-text-sm">
              234 successful referrals
            </p>
          </CardContent>
        </Card>

        {/* Meetup Rewards */}
        <Card className="!tw-shadow-none !tw-border tw-border-gray-200">
          <CardContent className="!tw-bg-gray-200">
            <p className="tw-text-sm tw-text-white-500">Meetup Rewards 🤝</p>
            <Typography variant="h5" className="!tw-font-bold">
              ₹32,780
            </Typography>

            <p className="tw-text-green-600 tw-text-sm">
              1,205 meetups completed
            </p>
          </CardContent>
        </Card>
      </div>
      <RewardHistory />
    </div>
  );
};

export default RewardStatCard;
