import React from "react";
import { IconButton, Typography } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuIcon from "@mui/icons-material/Menu";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Header = ({ handleDrawerToggle }) => {
  return (
    <header className="tw-fixed tw-top-0 tw-left-0 lg:tw-left-[280px] tw-right-0 tw-z-50 tw-bg-gray-50 tw-p-3 tw-border-b tw-border-gray-200 tw-shadow-lg">
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
            className="tw-w-full tw-pl-10 tw-pr-3 tw-py-3 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-outline-none"
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
      </div>
    </header>
  );
};

export default Header;
