import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { getBanners } from "../services/mockApiService";

import BannerCard from "../components/banners/BannerCard";
import AddBannerModel from "../components/banners/AddBannerModel";

const Banners = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getBanners();
        setBanners(data);
      } catch (err) {
        console.error("Failed to fetch banners", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="tw-space-y-6">
      <div className="tw-flex tw-justify-between tw-items-center">
        <Typography variant="h4" className="!tw-font-bold">
          Slider Images
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpenModal}
          sx={{backgroundColor: "#16a34a"}}
        >
          Add Slider Image
        </Button>
      </div>

      {/* Banner Grid */}
      {loading ? (
        <Typography>Loading banners...</Typography>
      ) : (
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
          {banners.map((banner) => (
            <BannerCard key={banner.id} banner={banner} />
          ))}
        </div>
      )}

      {/* Add Banner Modal */}
      <AddBannerModel open={modalOpen} handleClose={handleCloseModal} />
    </div>
  );
};

export default Banners;
