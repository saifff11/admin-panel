// src/pages/MeetUps.jsx

import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { getMeetups } from "../services/mockApiService";
import { format } from "date-fns"; // A library to format dates nicely

// Let's create a more generic StatusPill that can be reused everywhere
const StatusPill = ({ status }) => {
  const colorMap = {
    // User Statuses
    Active: "tw-bg-green-100 tw-text-green-800",
    Suspended: "tw-bg-red-100 tw-text-red-800",
    Pending: "tw-bg-yellow-100 tw-text-yellow-800",
    // Meet-Up Statuses
    Upcoming: "tw-bg-blue-100 tw-text-blue-800",
    Completed: "tw-bg-gray-100 tw-text-gray-800",
    Cancelled: "tw-bg-red-100 tw-text-red-800",
  };
  return (
    <span
      className={`tw-px-3 tw-py-1 tw-rounded-full tw-text-sm tw-font-medium ${colorMap[status]}`}
    >
      {status}
    </span>
  );
};

const MeetUps = () => {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    { field: "id", headerName: "MEET-UP ID", width: 150 },
    { field: "title", headerName: "TITLE", width: 250 },
    { field: "organizer", headerName: "ORGANIZER", width: 200 },
    {
      field: "date",
      headerName: "DATE",
      width: 220,
      // Format the date to be more readable
      valueFormatter: (params) =>
        params.value
          ? format(new Date(params.value), "MMM d, yyyy h:mm a")
          : "",
    },
    {
      field: "status",
      headerName: "STATUS",
      width: 150,
      renderCell: (params) => <StatusPill status={params.value} />,
    },
    {
      field: "actions",
      headerName: "ACTIONS",
      width: 250,
      sortable: false,
      renderCell: (params) => (
        <div className="tw-flex tw-gap-2">
          <Button variant="contained" size="small">
            View Details
          </Button>
          <Button variant="contained" color="error" size="small">
            Cancel Meet-Up
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const fetchMeetups = async () => {
      try {
        const data = await getMeetups();
        setMeetups(data);
      } catch (error) {
        console.error("Failed to fetch meetups", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMeetups();
  }, []);

  // You might need to install date-fns: npm install date-fns
  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      <Typography variant="h5" className="tw-font-semibold tw-mb-4">
        Meet-Up Management
      </Typography>
      <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={meetups}
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

export default MeetUps;
