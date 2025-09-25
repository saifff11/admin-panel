import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Drawer,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import EventIcon from "@mui/icons-material/Event";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CategoryIcon from "@mui/icons-material/Category";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ReportIcon from "@mui/icons-material/Report";
import SettingsIcon from "@mui/icons-material/Settings";

import { useTheme, useMediaQuery } from "@mui/material";

import { NavLink } from "react-router-dom";

const navItems = [
  { text: "Dashboard", icon: <DashboardIcon /> },
  { text: "Users", icon: <PeopleIcon /> },
  { text: "Meet-Ups", icon: <EventIcon /> },
  { text: "Rewards", icon: <CardGiftcardIcon /> },
  { text: "Categories", icon: <CategoryIcon /> },
  { text: "Notifications", icon: <NotificationsIcon /> },
  { text: "Wallet", icon: <AccountBalanceWalletIcon /> },
  { text: "Analytics", icon: <AssessmentIcon /> },
  { text: "Reports", icon: <ReportIcon /> },
  { text: "Settings", icon: <SettingsIcon /> },
];

const DrawerContent = () => (
  <div className="tw-bg-[#1a212f] tw-text-white tw-flex tw-flex-col tw-h-full">
    <Typography variant="h6" className="tw-p-5 tw-font-bold tw-text-center">
      Vybein Admin
    </Typography>

    <hr className="tw-border-white/20 tw-mx-0" />

    <List className="tw-p-2">
      {navItems.map((item) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton className="tw-rounded-lg hover:tw-bg-white/10 tw-p-3">
            <ListItemIcon
              sx={{ color: "white", minWidth: "0px", marginRight: "1rem" }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>

    <div className="tw-mt-auto tw-pb-4 tw-text-center">
      <hr className="tw-border-white/20  tw-mb-4" />
      <Typography variant="body2">© 2025 VybeinAdmin</Typography>
    </div>
  </div>
);

const Sidebar = ({ isMobileSidebarOpen, handleDrawerToggle }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const sidebarWidth = 260;

  return (
    <nav className={`md:tw-w-[${sidebarWidth}px] md:tw-flex-shrink-0`}>
      <Drawer
        variant="temporary"
        open={isMobileSidebarOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: isDesktop ? "none" : "block",
          "& .MuiDrawer-paper": { width: 270 },
        }}
      >
        <DrawerContent />
      </Drawer>

      <Drawer
        variant="permanent"
        open
        sx={{
          display: isDesktop ? "block" : "none",
          "& .MuiDrawer-paper": { width: 270, borderRight: 0 },
        }}
      >
        <DrawerContent />
      </Drawer>
    </nav>
  );
};

export default Sidebar;
