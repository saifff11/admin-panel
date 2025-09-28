import { Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BlockIcon from "@mui/icons-material/Block";

const ActionButtons = () => {
  const showVerify = Math.random() < 0.5;

  return (
    <div className="tw-flex tw-gap-2">
      <Button
        variant="contained"
        size="small"
        startIcon={<VisibilityIcon />}
        sx={{
          backgroundColor: "#059669",
          textTransform: "none",
          borderRadius: "9999px",
          px: 2,
          "&:hover": { backgroundColor: "#047857" },
        }}
      >
        View
      </Button>

      {showVerify ? (
        <Button
          variant="contained"
          size="small"
          startIcon={<CheckCircleIcon />}
          sx={{
            backgroundColor: "#16a34a",
            textTransform: "none",
            borderRadius: "9999px",
            px: 2,
            "&:hover": { backgroundColor: "#15803d" },
          }}
        >
          Verify
        </Button>
      ) : (
        <Button
          variant="contained"
          size="small"
          startIcon={<BlockIcon />}
          sx={{
            backgroundColor: "#dc2626",
            textTransform: "none",
            borderRadius: "9999px",
            px: 2,
            "&:hover": { backgroundColor: "#b91c1c" },
          }}
        >
          Suspend
        </Button>
      )}
    </div>
  );
};

export default ActionButtons;