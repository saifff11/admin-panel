// src/components/auth/ProtectedRoute.jsx

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../../services/authService";

const ProtectedRoute = () => {
  // Original line that checks for a real login token
  // const isAuth = isAuthenticated();

  // --- DEVELOPMENT TRICK ---
  // Force 'isAuth' to be true to bypass the login screen during development
  const isAuth = true;

  if (!isAuth) {
    // This logic is now temporarily disabled
    return <Navigate to="/login" replace />;
  }

  // This will now always render your admin panel pages
  return <Outlet />;
};

export default ProtectedRoute;
