import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

import { useTheme, useMediaQuery } from "@mui/material";

const sidebarWidth = 270;

const AdminLayout = () => {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width:1024px)"); // same as Tailwind lg

  const handleDrawerToggle = () => {
    setMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="tw-flex tw-h-screen tw-bg-gray-100">
      <Sidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      <div
        className={`tw-flex-1 tw-flex tw-flex-col`}
        style={{
          marginLeft: isDesktop ? sidebarWidth : 0,
          transition: "margin-left 0.5s ease",
        }} // dynamic margin
      >
        <Header handleDrawerToggle={handleDrawerToggle} />
        <main className="tw-flex-1 tw-p-6 tw-overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
