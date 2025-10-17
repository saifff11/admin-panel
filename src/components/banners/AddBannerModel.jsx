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

const AddBannerModel = ({ open, handleClose }) => {
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
          <TextField label="Title *" fullWidth />
          <div className="tw-p-6 tw-border-2 tw-border-dashed tw-border-gray-300 tw-rounded-lg tw-text-center tw-cursor-pointer">
            <UploadFileIcon
              className="!tw-mx-auto !tw-text-gray-400"
              sx={{ fontSize: 40 }}
            />
            <Typography>Click to upload image</Typography>
            <Typography variant="caption" className="!tw-text-gray-500">
              PNG, JPG, GIF up to 5MB
            </Typography>
          </div>
          <TextField label="Description" fullWidth multiline rows={2} />
          <TextField
            label="Link (optional)"
            placeholder="https://example.com"
            fullWidth
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
          <Button variant="contained" sx={{ backgroundColor: "#16a34a" }}>
            Save Slider
          </Button>
        </div>
      </Box>
    </Modal>
  );
};
export default AddBannerModel;
