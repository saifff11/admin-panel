// src/components/users/UserCard.jsx
import React from "react";
import { Typography } from "@mui/material";

// Icons from Material-UI
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

// A simple pill for the "Active" status
const StatusPill = () => (
  <span className="tw-bg-green-100 tw-text-green-800 tw-px-2 tw-py-0.5 tw-rounded-full tw-text-xs tw-font-medium">
    Active
  </span>
);

// Helper to get initials from a name
const getInitials = (name = "") => {
  const parts = name.split(" ");
  if (parts.length > 1) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

const UserCard = ({ user }) => {
  // Formatting the date
  const joinDate = new Date(user.createdAt).toLocaleString("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="tw-bg-white tw-p-4 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm tw-flex tw-gap-4">
      {/* Avatar/Initials */}
      <div className="tw-w-16 tw-h-16 tw-flex-shrink-0 tw-bg-gray-200 tw-rounded-lg tw-flex tw-items-center tw-justify-center">
        <span className="tw-text-2xl tw-font-bold tw-text-gray-500">
          {getInitials(user.name)}
        </span>
      </div>

      {/* User Details */}
      <div className="tw-flex-grow">
        <div className="tw-flex tw-items-center tw-gap-2">
          <Typography variant="h6" className="tw-font-bold">
            {user.name || "N/A"}
          </Typography>
          <StatusPill />
        </div>
        <div className="tw-text-sm tw-text-gray-500 tw-flex tw-items-center tw-gap-1 tw-mt-1">
          <CalendarTodayIcon sx={{ fontSize: 16 }} />
          <span>Joined: {joinDate}</span>
        </div>
        {user.email && (
          <div className="tw-text-sm tw-text-gray-500 tw-flex tw-items-center tw-gap-1 tw-mt-1">
            <MailOutlineIcon sx={{ fontSize: 16 }} />
            <span>{user.email}</span>
          </div>
        )}
        {user.mobileNumber && (
          <div className="tw-text-sm tw-text-gray-500 tw-flex tw-items-center tw-gap-1 tw-mt-1">
            <PhoneIcon sx={{ fontSize: 16 }} />
            <span>{user.mobileNumber}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
