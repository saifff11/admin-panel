// src/pages/RewardHistory.jsx
import React, { useEffect, useState } from "react";
import { getRewardPriceHistory } from "../../services/mockApiService";
import { format } from "date-fns";
import { Button } from "@mui/material";

const RewardHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getRewardPriceHistory();
        setHistory(data);
      } catch (error) {
        console.error("Failed to fetch reward history", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      {/* Header */}
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
        <h2 className="tw-font-semibold tw-text-lg">
          Reward Price Change History
        </h2>
        <div className="tw-flex tw-gap-2">
          <Button
            variant="outlined"
            size="small"
            sx={{ borderColor: "#16a34a", color: "#16a34a" }}
          >
            Export
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="tw-overflow-x-auto">
        <table className="tw-w-full tw-border-collapse tw-text-left">
          <thead>
            <tr className="tw-border-b tw-bg-gray-50">
              <th className="tw-p-3 tw-font-medium">DATE</th>
              <th className="tw-p-3 tw-font-medium">REWARD TYPE</th>
              <th className="tw-p-3 tw-font-medium">PREVIOUS AMOUNT</th>
              <th className="tw-p-3 tw-font-medium">NEW AMOUNT</th>
              <th className="tw-p-3 tw-font-medium">CHANGED BY</th>
              <th className="tw-p-3 tw-font-medium">REASON</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="tw-text-center tw-p-4">
                  Loading...
                </td>
              </tr>
            ) : history.length === 0 ? (
              <tr>
                <td colSpan={6} className="tw-text-center tw-p-4">
                  No history records found
                </td>
              </tr>
            ) : (
              history.map((record) => (
                <tr key={record.id} className="tw-border-b hover:tw-bg-gray-50">
                  <td className="tw-p-3">
                    {record.date
                      ? format(new Date(record.date), "yyyy-MM-dd")
                      : ""}
                  </td>
                  <td className="tw-p-3">{record.rewardType}</td>
                  <td className="tw-p-3">₹{record.previousAmount}</td>
                  <td className="tw-p-3">₹{record.newAmount}</td>
                  <td className="tw-p-3">{record.changedBy}</td>
                  <td className="tw-p-3">{record.reason}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RewardHistory;
