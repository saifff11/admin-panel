// src/pages/Users.jsx

import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { getUsers } from "../services/mockApiService";

// A small component to render the colored status pills
const StatusPill = ({ status }) => {
  const colorMap = {
    Active: "tw-bg-green-100 tw-text-green-800",
    Suspended: "tw-bg-red-100 tw-text-red-800",
    Pending: "tw-bg-yellow-100 tw-text-yellow-800",
  };
  return (
    <span
      className={`tw-px-3 tw-py-1 tw-rounded-full tw-text-sm tw-font-medium ${colorMap[status]}`}
    >
      {status}
    </span>
  );
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // This defines the columns for our table
  const columns = [
    { field: "name", headerName: "NAME", width: 200 },
    { field: "email", headerName: "EMAIL", width: 250 },
    {
      field: "status",
      headerName: "STATUS",
      width: 150,
      renderCell: (params) => <StatusPill status={params.value} />,
    },
    {
      field: "meetupsAttended",
      headerName: "MEET-UPS ATTENDED",
      type: "number",
      width: 180,
    },
    {
      field: "walletBalance",
      headerName: "WALLET BALANCE",
      type: "number",
      width: 160,
    },
    {
      field: "actions",
      headerName: "ACTIONS",
      width: 200,
      sortable: false,
      renderCell: (params) => (
        <div className="tw-flex tw-gap-2">
          <Button variant="contained" size="small">
            View
          </Button>
          <Button variant="contained" color="error" size="small">
            Suspend
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        // DataGrid requires each row to have a unique 'id' property
        setUsers(data.map((user) => ({ ...user, id: user.id })));
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
      <Typography variant="h5" className="tw-font-semibold tw-mb-4">
        User Management
      </Typography>
      <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          loading={loading}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default Users;
