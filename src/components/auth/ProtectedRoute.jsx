// src/components/auth/ProtectedRoute.jsx

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../../services/authService";

const ProtectedRoute = () => {
  // This is the real authentication check. It calls the function that
  // checks for the 'authToken' in localStorage.
  const isAuth = isAuthenticated();

  if (!isAuth) {
    // If 'isAuth' is false, the user is not logged in.
    // Redirect them to the login page immediately.
    return <Navigate to="/login" replace />;
  }

  // If 'isAuth' is true, the user is logged in.
  // Render the requested admin panel page (e.g., Dashboard, Users, etc.).
  return <Outlet />;
};

export default ProtectedRoute;
