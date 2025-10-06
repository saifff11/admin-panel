// src/services/apiService.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://social-meetup-backend.onrender.com/api/v1",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const getDashboardStats = () => api.get("/admin/stats/dashboard");
export const getAllUsers = () => api.get("/admin/users");
export const getAllCategories = () => api.get("/admin/categories");
export const getAllReports = () => api.get("/admin/reports");
export const getSettings = () => api.get("/admin/settings");

export default api;
