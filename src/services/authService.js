// src/services/authService.js
import api from "./apiService";

// Step 1: Send OTP
export const sendOtp = async (mobileNumber) => {
  try {
    const response = await api.post("/auth/otp", { mobileNumber });
    return response.data; // Expecting { success: true, message: "OTP sent successfully" }
  } catch (error) {
    console.error("Error sending OTP:", error.response || error);
    throw error;
  }
};

// Step 2: Verify OTP and Login
export const verifyOtpAndLogin = async (mobileNumber, otp) => {
  try {
    const response = await api.post("/auth/otp/verify", { mobileNumber, otp });
    const token = response.data.token;

    if (token) {
      localStorage.setItem("authToken", token);
      return true;
    } else {
      console.error("Login successful, but no token found", response.data);
      return false;
    }
  } catch (error) {
    console.error("Error verifying OTP:", error.response || error);
    return false;
  }
};

// Step 3: Logout
export const logout = () => {
  localStorage.removeItem("authToken");
};

// Step 4: Check Auth
export const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null;
};
