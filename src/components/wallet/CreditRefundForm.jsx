// src/components/wallet/CreditRefundForm.jsx
import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

import {
  creditWallet,
  rewardWallet,
  debitWallet,
} from "../../services/apiService";

const CreditRefundForm = ({ onTransactionSuccess }) => {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("credit"); // credit | reward | debit
  const [reason, setReason] = useState("");
  const [sendNotification, setSendNotification] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleProcess = async () => {
    if (!userId || !amount) {
      alert("Please fill required fields: User ID and Amount.");
      return;
    }

    // Confirm for debit (API note: confirm before calling DEBIT).
    if (type === "debit") {
      const ok = window.confirm(
        "You are about to DEBIT funds from the user's wallet. This cannot be undone. Continue?"
      );
      if (!ok) return;
    }

    setLoading(true);
    try {
      const payload = {
        amount: Number(amount),
        description:
          reason || (type === "credit" ? "Admin credit" : "Wallet adjustment"),
      };

      let res;
      if (type === "credit") {
        res = await creditWallet(userId, payload);
      } else if (type === "reward") {
        res = await rewardWallet(userId, payload);
      } else if (type === "debit") {
        res = await debitWallet(userId, payload);
      }

      // Backend sample response: { transactionId: "t1", userId: "u1", type: "CREDIT", amount: 50 }
      const tx = res?.data || null;

      alert("✅ Transaction processed successfully");

      // Call parent to update UI. If server returns a transaction object, pass that.
      // If not, derive a minimal transaction object so UI can show it immediately.
      const txnForUI =
        tx && (tx.transactionId || tx.id)
          ? {
              id: tx.transactionId || tx.id,
              date: new Date().toISOString(),
              user: tx.userId || userId,
              type: tx.type || type.toUpperCase(),
              amount: tx.amount ?? Number(amount),
              balanceAfter: tx.balanceAfter ?? null,
              admin: "You",
              reason: payload.description,
              status: "COMPLETED",
            }
          : {
              id: `local-${Date.now()}`,
              date: new Date().toISOString(),
              user: userId,
              type: type.toUpperCase(),
              amount: Number(amount),
              balanceAfter: null,
              admin: "You",
              reason: payload.description,
              status: "COMPLETED",
            };

      onTransactionSuccess && onTransactionSuccess(txnForUI);

      // clear form
      setUserId("");
      setAmount("");
      setType("credit");
      setReason("");
      setSendNotification(true);
    } catch (err) {
      console.error(
        "Failed to process wallet transaction",
        err.response?.data || err
      );
      const message =
        err.response?.data?.message || "Failed to process transaction";
      alert(`❌ ${message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      <Typography variant="h6" className="!tw-font-bold !tw-mb-4">
        Wallet Credit / Reward / Debit
      </Typography>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4">
        <TextField
          label="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter user ID (e.g. u1)"
        />
        <TextField
          label="Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
        />
        <FormControl fullWidth>
          <InputLabel>Transaction Type</InputLabel>
          <Select
            value={type}
            label="Transaction Type"
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value="credit">Credit (POST /wallet/credit)</MenuItem>
            <MenuItem value="reward">Reward (POST /wallet/reward)</MenuItem>
            <MenuItem value="debit">Debit (POST /wallet/debit)</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Enter reason for this transaction"
          multiline
          rows={3}
          className="md:tw-col-span-2"
        />
      </div>

      <FormGroup row className="tw-mt-4">
        <Typography className="!tw-mr-4">Send Notification</Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={sendNotification}
              onChange={(e) => setSendNotification(e.target.checked)}
              sx={{ "&.Mui-checked": { color: "#16a34a" } }}
            />
          }
          label="App Notification"
        />
      </FormGroup>

      <div className="tw-flex tw-gap-4 tw-mt-4">
        <Button
          variant="contained"
          sx={{ backgroundColor: "#16a34a" }}
          onClick={handleProcess}
          disabled={loading}
        >
          {loading ? "Processing..." : "Process Transaction"}
        </Button>
        <Button
          variant="outlined"
          sx={{ borderColor: "#16a34a", color: "#16a34a" }}
          onClick={() => {
            setUserId("");
            setAmount("");
            setType("credit");
            setReason("");
            setSendNotification(true);
          }}
        >
          Clear Form
        </Button>
      </div>
    </div>
  );
};

export default CreditRefundForm;
