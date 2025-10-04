import React, { useState, useEffect } from "react";
import { getWalletTransactions } from "../services/mockApiService";

import WalletStatCard from "../components/wallet/WalletStatCard";
import CreditRefundForm from "../components/wallet/CreditRefundForm";
import TransactionHistory from "../components/wallet/TransactionHistory";

const Wallet = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const transactionsData = await getWalletTransactions();
        setTransactions(transactionsData);
      } catch (err) {
        console.error("Failed to fetch wallet data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="tw-space-y-6">
      {/* Stat Cards */}
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

      {/* Credit/Refund Form */}
      <CreditRefundForm />

      {/* Transaction History Table */}
      <TransactionHistory transactions={transactions} loading={loading} />
    </div>
  );
};

export default Wallet;
