// src/components/auth/ProtectedRoute.jsx

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../../services/authService";

const ProtectedRoute = () => {
  const isAuth = isAuthenticated();

  if (!isAuth) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the child routes (your admin panel)
  return <Outlet />;
};

export default ProtectedRoute;
