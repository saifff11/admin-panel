// src/components/wallet/TransactionHistory.jsx

import React from "react";
import { Typography, TextField, Button, Select, MenuItem } from "@mui/material";
import { format } from "date-fns";

// Custom cell components for styling remain the same
const TypePill = ({ type }) => {
  let colorClass = "tw-bg-gray-100 tw-text-gray-800";
  if (type === "Credit") colorClass = "tw-bg-green-100 tw-text-green-800";
  if (type === "Refund") colorClass = "tw-bg-yellow-100 tw-text-yellow-800";
  if (type === "Penalty") colorClass = "tw-bg-red-100 tw-text-red-800";
  return (
    <span
      className={`tw-px-2 tw-py-0.5 tw-rounded-full tw-text-xs tw-font-medium ${colorClass}`}
    >
      {type}
    </span>
  );
};

const AmountCell = ({ amount }) => {
  const isPositive = parseFloat(amount) >= 0;
  return (
    <span
      className={
        isPositive
          ? "tw-text-green-600 tw-font-semibold"
          : "tw-text-red-600 tw-font-semibold"
      }
    >
      {isPositive ? "+" : ""}₹{amount}
    </span>
  );
};

const StatusPill = ({ status }) => (
  <span className="tw-bg-green-100 tw-text-green-800 tw-px-2 tw-py-0.5 tw-rounded-full tw-text-xs tw-font-medium">
    {status}
  </span>
);

const TransactionHistory = ({ transactions, loading }) => {
  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      {/* Header section */}
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
        <Typography variant="h6" className="tw-font-bold">
          Recent Transaction History
        </Typography>
        <div className="tw-flex tw-gap-2">
          <TextField placeholder="Search transactions..." size="small" />
          <Select size="small" defaultValue="all">
            <MenuItem value="all">All Users</MenuItem>
          </Select>
          <Select size="small" defaultValue="all">
            <MenuItem value="all">All Types</MenuItem>
          </Select>
          <Button variant="outlined" size="small">
            Export
          </Button>
        </div>
      </div>

      {/* --- REFACTORED TABLE --- */}
      <div className="tw-overflow-x-auto">
        <table className="tw-w-full tw-border-collapse tw-text-left">
          <thead>
            <tr className="tw-border-b tw-bg-gray-50">
              <th className="tw-p-3 tw-font-medium">DATE</th>
              <th className="tw-p-3 tw-font-medium">USER</th>
              <th className="tw-p-3 tw-font-medium">TYPE</th>
              <th className="tw-p-3 tw-font-medium">AMOUNT</th>
              <th className="tw-p-3 tw-font-medium">BALANCE AFTER</th>
              <th className="tw-p-3 tw-font-medium">ADMIN</th>
              <th className="tw-p-3 tw-font-medium">REASON</th>
              <th className="tw-p-3 tw-font-medium">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="8" className="tw-text-center tw-p-4">
                  Loading...
                </td>
              </tr>
            ) : transactions.length === 0 ? (
              <tr>
                <td colSpan="8" className="tw-text-center tw-p-4">
                  No transactions found
                </td>
              </tr>
            ) : (
              transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="tw-border-b hover:tw-bg-gray-50"
                >
                  <td className="tw-p-3">
                    {format(new Date(transaction.date), "yyyy-MM-dd HH:mm")}
                  </td>
                  <td className="tw-p-3">{transaction.user}</td>
                  <td className="tw-p-3">
                    <TypePill type={transaction.type} />
                  </td>
                  <td className="tw-p-3">
                    <AmountCell amount={transaction.amount} />
                  </td>
                  <td className="tw-p-3">₹{transaction.balanceAfter}</td>
                  <td className="tw-p-3">{transaction.admin}</td>
                  <td className="tw-p-3">{transaction.reason}</td>
                  <td className="tw-p-3">
                    <StatusPill status={transaction.status} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
