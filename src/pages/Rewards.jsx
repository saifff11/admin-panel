import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import ReferralSettingsCard from "../components/rewards/ReferralSettingsCard";
import MeetupRewardsCard from "../components/rewards/MeetupRewardsCard";
import RewardStatCard from "../components/rewards/RewardStatCard";
import RewardHistory from "../components/rewards/RewardHistory";
import { getRewardPriceHistory } from "../services/mockApiService";

const Rewards = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getRewardPriceHistory();
        setHistory(data);
      } catch (err) {
        console.error("Failed to fetch reward history", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="tw-space-y-8">
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-2">
        <h1 className="tw-text-3xl tw-font-semibold tw-m-0">
          Reward Price Control
        </h1>
        <div className="tw-flex tw-gap-2">
          <Button
            variant="outlined"
            sx={{ borderColor: "#16a34a", color: "#16a34a" }}
          >
            Export Rewards Data
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#16a34a" }}>
            Add New Reward Type
          </Button>
        </div>
      </div>
      {/* ---------------- Reward Price Control ---------------- */}

      <div className="tw-grid md:tw-grid-cols-2 tw-gap-6">
        <ReferralSettingsCard />
        <MeetupRewardsCard />
      </div>

      {/* ---------------- Reward Statistics ---------------- */}
      <RewardStatCard />
    </div>
  );
};

export default Rewards;
