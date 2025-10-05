// src/services/apiService.js
import axios from "axios";

// Create an Axios instance with the base URL [cite: 3]
const api = axios.create({
  baseURL: "https://social-meetup-backend.onrender.com",
});

// Use an interceptor to automatically add the Authorization header to every request [cite: 5, 137]
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Define functions for your endpoints
export const getDashboardStats = () => api.get("/admin/stats/dashboard"); // [cite: 112]
export const getAllUsers = () => api.get("/admin/users"); // [cite: 15]
export const getAllCategories = () => api.get("/admin/categories"); // [cite: 46]
export const getAllReports = () => api.get("/admin/reports"); // [cite: 69]
export const getSettings = () => api.get("/admin/settings"); // [cite: 101]

export default api;
