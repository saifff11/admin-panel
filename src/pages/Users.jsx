import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  IconButton,
  colors,
  InputAdornment,
} from "@mui/material";
import { getAllUsers } from "../services/apiService";
import UserCard from "../components/users/UserCard"; // <-- Import the new UserCard

// Import Icons for the header
import AddIcon from "@mui/icons-material/Add";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import RefreshIcon from "@mui/icons-material/Refresh";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import SearchIcon from "@mui/icons-material/Search";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        // The API might nest the array in a 'data' property
        setUsers(response.data.data || response.data || []);
      } catch (error) {
        console.error("Failed to fetch users", error);
        setUsers([]); // Set to empty array on error
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="tw-space-y-6">
      {/* --- NEW HEADER --- */}
      <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm tw-flex tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
        <div>
          <h1 className="tw-text-2xl tw-font-bold tw-m-0">Users</h1>
          <p className="tw-text-gray-500 tw-m-0">Manage all users</p>
        </div>
        <div className="tw-flex tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
          <div className="tw-flex tw-gap-2">
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              style={{ backgroundColor: "#16a34a" }}
            >
              Create User
            </Button>
            <Button
              variant="outlined"
              startIcon={<UploadFileIcon />}
              style={{ color: "#16a34a", borderColor: "#16a34a" }}
            >
              Import Users
            </Button>
          </div>
          <div className="tw-flex tw-items-center tw-gap-2">
            <TextField
              placeholder="Search users..."
              size="small"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#999" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#16a34a",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#16a34a",
                  },
                },
              }}
            />
            <Select
              size="small"
              defaultValue="both"
              sx={{
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "green",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "green",
                },
              }}
            >
              <MenuItem value="both">Both</MenuItem>
            </Select>
            <IconButton>
              <RefreshIcon />
            </IconButton>
            <Button
              variant="outlined"
              startIcon={<FileDownloadIcon />}
              style={{ color: "#16a34a", borderColor: "#16a34a" }}
            >
              Export CSV
            </Button>
          </div>
        </div>
      </div>

      {/* --- NEW CARD GRID --- */}
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
