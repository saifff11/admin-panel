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
export const getReportsStats = () => api.get("/admin/reports/stats");
export const getAllReports = () => api.get("/admin/reports");

// NOTIFICATIONS API
export const sendNotificationToUser = (userId, payload) =>
  api.post(`/admin/users/${userId}/notify`, payload);

export const sendBulkNotification = (payload) =>
  api.post(`/admin/notify/bulk`, payload);

export const sendNotificationToAll = (payload) =>
  api.post(`/admin/notify/all`, payload);

export const getNotificationTemplates = () => api.get(`/admin/templates`); // only if available later
export const getRecentNotifications = () => api.get(`/admin/notifications`);

// ======================= CATEGORY APIS =======================
export const getAllCategories = () => api.get("/admin/categories");

export const createCategory = (payload) =>
  api.post("/admin/categories", payload);

export const updateCategory = (id, payload) =>
  api.put(`/admin/categories/${id}`, payload);

export const deleteCategory = (id) => api.delete(`/admin/categories/${id}`);

// ---- WALLET endpoints (per docs) ----
// Credit funds to user's wallet
export const creditWallet = (userId, payload) =>
  api.post(`/admin/users/${userId}/wallet/credit`, payload);

// Reward funds to user's wallet
export const rewardWallet = (userId, payload) =>
  api.post(`/admin/users/${userId}/wallet/reward`, payload);

// Debit funds from user's wallet (confirm before calling)
export const debitWallet = (userId, payload) =>
  api.post(`/admin/users/${userId}/wallet/debit`, payload);

// Settings API
export const getSettings = () => api.get("/admin/settings");
export const updateSettings = (payload) =>
  api.patch("/admin/settings", payload);

export default api;
