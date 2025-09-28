// src/pages/MeetUps.jsx
import React, { useEffect, useState } from "react";
import { getMeetups } from "../services/mockApiService";
import { format } from "date-fns";
import { Button } from "@mui/material";

// Reusable status pill
const StatusPill = ({ status }) => {
  const colorMap = {
    CONFIRMED: "tw-bg-green-100 tw-text-green-700",
    PENDING: "tw-bg-yellow-100 tw-text-yellow-700",
    CANCELLED: "tw-bg-red-100 tw-text-red-700",
  };

  return (
    <span
      className={`tw-px-3 tw-py-1 tw-rounded-full tw-text-sm tw-font-medium ${
        colorMap[status] || ""
      }`}
    >
      {status}
    </span>
  );
};

const MeetUps = () => {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      {/* Header */}
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
        <h2 className="tw-font-semibold tw-text-lg">Meet-Up Management</h2>
        <div className="tw-flex tw-gap-2">
          <Button variant="outlined" size="small">
            Filter
          </Button>
          <Button variant="contained" sx={{backgroundColor: "#16a34a"}} size="small">
            Schedule New
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="tw-overflow-x-auto">
        <table className="tw-w-full tw-border-collapse tw-text-left">
          <thead>
            <tr className="tw-border-b tw-bg-gray-50">
              <th className="tw-p-3 tw-font-medium">ID</th>
              <th className="tw-p-3 tw-font-medium">TITLE</th>
              <th className="tw-p-3 tw-font-medium">CATEGORY</th>
              <th className="tw-p-3 tw-font-medium">PARTICIPANTS</th>
              <th className="tw-p-3 tw-font-medium">DATE/TIME</th>
              <th className="tw-p-3 tw-font-medium">STATUS</th>
              <th className="tw-p-3 tw-font-medium">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7} className="tw-text-center tw-p-4">
                  Loading...
                </td>
              </tr>
            ) : meetups.length === 0 ? (
              <tr>
                <td colSpan={7} className="tw-text-center tw-p-4">
                  No meetups found
                </td>
              </tr>
            ) : (
              meetups.map((meetup) => (
                <tr key={meetup.id} className="tw-border-b hover:tw-bg-gray-50">
                  <td className="tw-p-3">{meetup.id}</td>
                  <td className="tw-p-3">{meetup.title}</td>
                  <td className="tw-p-3">{meetup.category}</td>
                  <td className="tw-p-3">
                    {meetup.participants}/{meetup.capacity}
                  </td>
                  <td className="tw-p-3">
                    {meetup.date
                      ? format(new Date(meetup.date), "yyyy-MM-dd HH:mm")
                      : ""}
                  </td>
                  <td className="tw-p-3">
                    <StatusPill status={meetup.status} />
                  </td>
                  <td className="tw-p-3">
                    <Button variant="outlined" size="small">
                      Edit
                    </Button>
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

export default MeetUps;
