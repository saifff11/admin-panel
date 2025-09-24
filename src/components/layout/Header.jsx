import React from "react";
import { IconButton, Typography } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuIcon from "@mui/icons-material/Menu";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Header = ({ handleDrawerToggle }) => {
  return (
    <header className="tw-bg-gray-50 tw-p-3 tw-border-b tw-border-gray-200">
      <div className="tw-flex tw-items-center">
        {/* Hamburger Icon for mobile */}
        <IconButton
          color="inherit"
          onClick={handleDrawerToggle}
          className="md:!tw-hidden"
        >
          <MenuIcon />
        </IconButton>

        {/* Search Bar */}
        <div className="tw-flex tw-items-center tw-py-2 tw-px-3 tw-rounded-lg tw-bg-white tw-shadow-sm">
          <SearchIcon className="tw-text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="tw-w-[350px] tw-ml-2 focus:tw-outline-none tw-bg-transparent"
          />
        </div>

        {/* Spacer */}
        <div className="tw-flex-grow" />

        {/* Wallet Balance */}
        <div className="tw-flex tw-items-center tw-mr-4">
          <AccountBalanceWalletOutlinedIcon className="tw-text-gray-600 tw-mr-2" />
          <Typography variant="subtitle1" className="tw-font-bold">
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
