import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Typography, Button } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuIcon from "@mui/icons-material/Menu";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

import { logout } from "../../services/authService";

const Header = ({ handleDrawerToggle }) => {
  const navigate = useNavigate();

  // Simplified logout handler
  const handleLogout = () => {
    logout(); // Call the logout function to clear the token
    navigate("/login"); // Redirect to the login page
  };
  return (
    <header className="tw-fixed tw-top-0 tw-left-0 lg:tw-left-[270px] tw-right-0 tw-z-50 tw-bg-gray-50 tw-p-3 tw-border-b tw-border-gray-200 tw-shadow-md">
      <div className="tw-flex tw-items-center">
        {/* Hamburger Icon for mobile */}
        <IconButton
          color="inherit"
          onClick={handleDrawerToggle}
          className="lg:!tw-hidden !tw-p-3"
        >
          <MenuIcon className="!tw-w-8 !tw-h-8" />
        </IconButton>

        {/* Search Bar */}
        <div className="tw-relative tw-w sm:tw-w-[280px] md:tw-w-[320px] lg:tw-w-[400px]">
          <input
            type="text"
            placeholder="Search..."
            className="tw-w-full tw-pl-10 tw-pr-3 tw-py-3 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-border-[#16a34a] focus:tw-ring-2 focus:tw-ring-[#16a34a] focus:tw-outline-none"
          />
          <SearchIcon className="tw-absolute tw-left-3 tw-top-1/2 -tw-translate-y-1/2 tw-text-gray-400" />
        </div>

        {/* Spacer */}
        <div className="tw-flex-grow" />

        {/* Wallet Balance */}
        <div className="tw-flex tw-items-center tw-mx-4">
          <AccountBalanceWalletOutlinedIcon className="!tw-text-gray-600 !tw-mx-2" />
          <Typography variant="subtitle1" className="!tw-font-bold">
            ₹87,650
          </Typography>
        </div>

        {/* Header Icons */}
        <IconButton color="inherit">
          <NotificationsNoneIcon />
        </IconButton>
        <IconButton color="inherit">
          <HelpOutlineIcon />
        </IconButton>
        <Button
          variant="outlined"
          onClick={handleLogout}
          sx={{ marginLeft: 2, backgroundColor: "#16a34a", color: "white" }}
        >
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;
