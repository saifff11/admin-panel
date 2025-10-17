import React from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { createBanner } from "../../services/apiService";
import { useRef, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

const AddBannerModel = ({ open, handleClose, onBannerCreated }) => {
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");
  const fileInputRef = useRef(null); // To trigger the file input

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file)); // Create a temporary URL for image preview
    }
  };

  const handleSubmit = async () => {
    if (!title || !imageFile) {
      alert("Title and Image are required.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", imageFile);

    try {
      await createBanner(formData);
      onBannerCreated(); // Tell the parent page to refresh the banner list
      handleClose(); // Close the modal
    } catch (error) {
      console.error("Failed to create banner:", error);
      alert("Failed to create banner. Check the console for details.");
    }
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
          <Typography variant="h6" className="!tw-font-bold">
            Add Slider Image
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="tw-space-y-4">
          <TextField
            label="Title *"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{
              "& label.Mui-focused": {
                color: "#16a34a", // label color (focused state)
              },
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

          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
            accept="image/png, image/jpeg, image/gif"
          />

          {/* Image Upload Area */}
          <div
            onClick={() => fileInputRef.current.click()}
            className="tw-p-6 tw-border-2 tw-border-dashed tw-border-gray-300 tw-rounded-lg tw-text-center tw-cursor-pointer"
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="tw-max-h-32 tw-mx-auto"
              />
            ) : (
              <>
                <UploadFileIcon
                  className="tw-mx-auto tw-text-gray-400"
                  sx={{ fontSize: 40 }}
                />
                <Typography>Click to upload image</Typography>
                <Typography variant="caption" className="tw-text-gray-500">
                  PNG, JPG, GIF up to 5MB
                </Typography>
              </>
            )}
          </div>

          <TextField
            label="Description"
            fullWidth
            multiline
            rows={2}
            sx={{
              "& label.Mui-focused": {
                color: "#16a34a", // label color (focused state)
              },
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
          <TextField
            label="Link (optional)"
            placeholder="https://example.com"
            fullWidth
            sx={{
              "& label.Mui-focused": {
                color: "#16a34a", // label color (focused state)
              },
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
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                sx={{
                  "&.Mui-checked": {
                    color: "#16a34a", // green when checked
                  },
                }}
              />
            }
            label="Active (will be displayed on the website)"
          />
        </div>
        <div className="tw-flex tw-justify-end tw-gap-4 tw-mt-6">
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{ color: "#16a34a", borderColor: "#16a34a" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ backgroundColor: "#16a34a" }}
          >
            Save Slider
          </Button>
        </div>
      </Box>
    </Modal>
  );
};
export default AddBannerModel;
