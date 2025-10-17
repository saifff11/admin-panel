import React from "react";
import { Typography, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const BannerCard = ({ banner }) => {
  const isActive = banner.status === "Active";

  return (
    <div className="tw-bg-white tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm">
      <div className="tw-h-40 tw-bg-gray-200 tw-rounded-t-xl tw-flex tw-items-center tw-justify-center">
        {banner.imageUrl ? (
          <img
            src={banner.imageUrl}
            alt={banner.title}
            className="tw-w-full tw-h-full tw-object-cover tw-rounded-t-xl"
          />
        ) : (
          <span className="tw-text-gray-500">Inactive</span>
        )}
      </div>
      <div className="tw-p-4">
        <Typography variant="h6" className="!tw-font-bold">
          {banner.title}
        </Typography>
        <Typography
          variant="body2"
          className="!tw-text-gray-600 !tw-mt-1 tw-h-12"
        >
          {banner.description}
        </Typography>
        <div className="tw-flex tw-justify-between tw-items-center tw-mt-3">
          <div>
            <IconButton size="small">
              <EditIcon />
            </IconButton>
            <IconButton size="small">
              <DeleteIcon color="error" />
            </IconButton>
          </div>
          <IconButton size="small">
            {isActive ? (
              <VisibilityIcon color="success" />
            ) : (
              <VisibilityOffIcon />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
};
export default BannerCard;
