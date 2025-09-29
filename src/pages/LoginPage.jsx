// src/pages/LoginPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    // Simulate login (fake token)
    localStorage.setItem("authToken", "fake-jwt-token");
    navigate("/");
  };

  return (
    <div className="tw-h-screen tw-w-full tw-flex tw-items-center tw-justify-center tw-bg-gradient-to-br tw-from-indigo-500 tw-to-purple-600">
      {/* Login Card */}
      <div className="tw-bg-gray-100 tw-rounded-2xl tw-shadow-2xl tw-w-full tw-max-w-md tw-px-8 tw-py-10 tw-relative tw-overflow-hidden">
        {/* Header */}
        <h1 className="tw-text-3xl tw-font-extrabold tw-text-center tw-text-purple-700">
          Vybein Admin
        </h1>
        <p className="tw-text-center tw-text-gray-500 tw-mt-2 tw-mb-8">
          Sign in to your admin account
        </p>

        {/* Form */}
        <form onSubmit={handleSignIn} className="tw-space-y-6">
          {/* Admin ID */}
          <div>
            <label
              htmlFor="adminId"
              className="tw-block tw-text-md tw-font-medium tw-text-gray-700 tw-font-bold"
            >
              Admin ID
            </label>
            <input
              id="adminId"
              name="adminId"
              type="text"
              required
              placeholder="Enter your admin ID"
              className="tw-mt-1 tw-block tw-w-[400px] tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md tw-text-gray-800 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-purple-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="tw-block tw-text-md tw-font-medium tw-text-gray-700 tw-font-bold"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Enter your password"
              className="tw-mt-1 tw-block tw-w-[400px] tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md tw-text-gray-800 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-purple-500"
            />
          </div>

          {/* Remember Me */}
          <div className="tw-flex tw-items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="tw-h-4 tw-w-4 tw-text-purple-600 tw-border-gray-300 tw-rounded focus:tw-ring-purple-500"
            />
            <label
              htmlFor="remember-me"
              className="tw-ml-2 tw-text-sm tw-text-gray-700 tw-font-medium"
            >
              Remember me
            </label>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="tw-w-[425px] tw-py-3 tw-font-bold tw-text-white tw-rounded-md tw-bg-gradient-to-r tw-from-purple-600 tw-to-indigo-500 hover:tw-from-purple-700 hover:tw-to-indigo-600 focus:tw-ring-2 focus:tw-ring-purple-500 focus:tw-ring-offset-2"
          >
            Sign In
          </button>
        </form>

        <hr className="tw-border-gray/10 tw-mx-2 tw-mr-6 tw-mt-10" />

        {/* Footer */}
        <div className="tw-border-t tw-border-gray-10 tw-mt-10 tw-pt-0">
          <p className="tw-text-center tw-text-xs tw-text-gray-400">
            © 2025 Vybein. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
