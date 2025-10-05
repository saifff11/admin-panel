// src/pages/Users.jsx
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
// import { getUsers } from "../services/mockApiService";
import ActionButtons from "../components/users/ActionButtons";
import { getAllUsers } from "../services/apiService";

// Status pill for Active / Suspended / Pending
const VerificationPill = ({ isVerified }) => {
  const status = isVerified ? "Verified" : "Not Verified";
  const colorClass = isVerified
    ? "tw-bg-green-100 tw-text-green-700"
    : "tw-bg-yellow-100 tw-text-yellow-700";

  return (
    <span
      className={`tw-px-3 tw-py-1 tw-rounded-full tw-text-sm tw-font-medium ${colorClass}`}
    >
      {status}
    </span>
  );
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        setUsers(response.data);
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      {/* Header */}
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
        <h2 className="tw-font-semibold tw-text-lg">User Management</h2>
        <div className="tw-flex tw-gap-2">
          <Button variant="outlined" size="small">
            Filter
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#16a34a" }}
            size="small"
          >
            Add User
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="tw-overflow-x-auto">
        <table className="tw-w-full tw-border-collapse tw-text-left">
          <thead>
            {/* 3. UPDATE table headers for the new data */}
            <tr className="tw-border-b tw-bg-gray-50">
              <th className="tw-p-3 tw-font-medium">USER ID</th>
              <th className="tw-p-3 tw-font-medium">NAME</th>
              <th className="tw-p-3 tw-font-medium">STATUS</th>
              <th className="tw-p-3 tw-font-medium">ROLE</th>
              <th className="tw-p-3 tw-font-medium">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="tw-text-center tw-p-4">
                  Loading...
                </td>
              </tr>
            ) : users.length === 0 ? (
              <tr>
                <td colSpan={5} className="tw-text-center tw-p-4">
                  No users found
                </td>
              </tr>
            ) : (
              users.map((user) => (
                // 4. UPDATE table rows to display the new data
                <tr key={user.id} className="tw-border-b hover:tw-bg-gray-50">
                  <td className="tw-p-3">{user.id}</td>
                  <td className="tw-p-3">{user.name}</td>
                  <td className="tw-p-3">
                    <VerificationPill isVerified={user.isVerified} />
                  </td>
                  <td className="tw-p-3">{user.role}</td>
                  <td className="tw-p-3">
                    <div className="tw-flex tw-gap-2">
                      <Button variant="outlined" size="small">
                        Notify
                      </Button>
                      <Button variant="outlined" color="error" size="small">
                        Suspend
                      </Button>
                    </div>
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

export default Users;
