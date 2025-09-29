// src/services/authService.js

// In a real app, this would make an API call. For now, it's a simulation.
export const login = (adminId, password) => {
  // We're not actually checking the password for this mock version
  if (adminId && password) {
    // If login is "successful", we store a fake token.
    localStorage.setItem("authToken", "fake-jwt-token");
    return true;
  }
  return false;
};

export const logout = () => {
  // To log out, we just remove the token
  localStorage.removeItem("authToken");
};

export const isAuthenticated = () => {
  // The user is authenticated if the token exists
  return localStorage.getItem("authToken") !== null;
};
