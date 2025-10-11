import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOtp, verifyOtpAndLogin } from "../services/authService";

const LoginPage = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await sendOtp(mobileNumber);
      if (res.success) {
        setStep(2);
      } else {
        setError("Failed to send OTP. Try again.");
      }
    } catch (err) {
      setError("Error sending OTP. Please check your number.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const success = await verifyOtpAndLogin(mobileNumber, otp);
      if (success) {
        navigate("/"); // go to dashboard
      } else {
        setError("Invalid OTP. Try again.");
      }
    } catch (err) {
      setError("Error verifying OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tw-h-screen tw-w-full tw-flex tw-items-center tw-justify-center tw-bg-gradient-to-br tw-from-indigo-500 tw-to-purple-600">
      <div className="tw-bg-gray-100 tw-rounded-2xl tw-shadow-2xl tw-w-full tw-max-w-md tw-px-8 tw-py-10">
        <h1 className="tw-text-3xl tw-font-extrabold tw-text-center tw-text-purple-700">
          Vybein Admin
        </h1>
        <p className="tw-text-center tw-text-gray-500 tw-mt-2 tw-mb-8">
          Sign in with your registered mobile number
        </p>

        {error && (
          <p className="tw-text-center tw-text-red-500 tw-font-medium tw-mb-4">
            {error}
          </p>
        )}

        {step === 1 ? (
          <form onSubmit={handleSendOtp} className="tw-space-y-6">
            <div>
              <label
                htmlFor="mobileNumber"
                className="tw-block tw-text-md tw-font-medium tw-text-gray-700 tw-font-bold"
              >
                Mobile Number
              </label>
              <input
                id="mobileNumber"
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Enter your mobile number"
                required
                className="tw-mt-1 tw-block tw-w-[400px] tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="tw-w-[425px] tw-py-3 tw-font-bold tw-text-white tw-rounded-md tw-bg-gradient-to-r tw-from-purple-600 tw-to-indigo-500"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="tw-space-y-6">
            <div>
              <label
                htmlFor="otp"
                className="tw-block tw-text-md tw-font-medium tw-text-gray-700 tw-font-bold"
              >
                Enter OTP
              </label>
              <input
                id="otp"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter received OTP"
                required
                className="tw-mt-1 tw-block tw-w-[400px] tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="tw-w-[425px] tw-py-3 tw-font-bold tw-text-white tw-rounded-md tw-bg-gradient-to-r tw-from-purple-600 tw-to-indigo-500"
            >
              {loading ? "Verifying..." : "Verify & Login"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
