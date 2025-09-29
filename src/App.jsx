// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Layouts and Pages
import AdminLayout from "./layouts/AdminLayout";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import MeetUps from "./pages/MeetUps";
import Rewards from "./pages/Rewards";
import Categories from "./pages/Categories";
import Notifications from "./pages/Notifications";
import Wallet from "./pages/Wallet";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

// Import the guard
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route: The Login Page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes: The entire Admin Panel */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="meetups" element={<MeetUps />} />
            <Route path="rewards" element={<Rewards />} />
            <Route path="categories" element={<Categories />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
