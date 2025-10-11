// src/pages/Wallet.jsx
import React, { useState, useEffect } from "react";
// keep using the mock fetch for initial history if backend doesn't provide GET transactions
import { getWalletTransactions as mockGetWalletTransactions } from "../services/mockApiService";

import WalletStatCard from "../components/wallet/WalletStatCard";
import CreditRefundForm from "../components/wallet/CreditRefundForm";
import TransactionHistory from "../components/wallet/TransactionHistory";

const Wallet = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // initial load: use mock service because the API reference doesn't include a GET transactions endpoint.
  // If your backend exposes a GET endpoint (ask backend/senior), replace this with a real API call.
  const fetchData = async () => {
    setLoading(true);
    try {
      const tx = await mockGetWalletTransactions(); // returns array in mock service
      setTransactions(tx);
    } catch (err) {
      console.error("Failed to fetch wallet data", err);
      setTransactions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Called when CreditRefundForm successfully creates a transaction
  const handleTransactionSuccess = (txn) => {
    // Prepend new transaction so UI shows most-recent first
    setTransactions((prev) => [txn, ...prev]);
  };

  return (
    <div className="tw-space-y-6">
      {/* Stat Cards (static for now; you can fetch real stats if available) */}
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-6">
        <WalletStatCard
          title="Total Wallet Balance"
          value="₹2,45,670"
          trend="+15%"
          icon="🔥"
        />
        <WalletStatCard
          title="Transactions Today"
          value="5"
          trend="+23%"
          icon="📊"
        />
        <WalletStatCard
          title="Refunds Processed"
          value="0"
          trend="-5%"
          icon="↩️"
        />
        <WalletStatCard
          title="Pending Withdrawals"
          value="₹8,450"
          trend="+2%"
          icon="⏳"
        />
      </div>

      {/* Credit/Refund Form - pass handler to update UI on success */}
      <CreditRefundForm onTransactionSuccess={handleTransactionSuccess} />

      {/* Transaction History Table */}
      <TransactionHistory transactions={transactions} loading={loading} />
    </div>
  );
};

export default Wallet;
