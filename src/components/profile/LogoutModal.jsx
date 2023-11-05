import React, { memo, useContext } from "react";
import { Box, Button, Typography } from "@mui/material";

// // static import
import CustomModal from "../customModal/CustomModal";
import { AppContext } from "../../context";

function LogoutModal({ modalOpen, setModalOpen }) {
  // // context state
  const { setIsAuth } = useContext(AppContext);

  const handelLogout = () => {
    localStorage.clear();
    setIsAuth(false);
    window.location.reload();
    setModalOpen(false);
  };

  return (
    <CustomModal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      label="Logout"
    >
      <Typography component="p" py={1} textAlign="center">
        The action you are going to perform is irreversible. Please confirm! Are
        you sure that you want to logout?
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          columnGap: 3,
          mt: 2,
          // rowGap: 1.5,
          // flexDirection: {
          //   xs: "column",
          //   sm: "row",
          // },
        }}
      >
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            backgroundColor: "var(--primary-bg)",
            color: "var(--highlight-bg)",

            display: "block",
            "&:hover": {
              backgroundColor: "var(--highlight-bg)",
              color: "var(--primary-bg)",
            },
            px: 10,
          }}
          onClick={() => setModalOpen(false)}
        >
          No
        </Button>
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            backgroundColor: "red",
            color: "#fff",
            display: "block",
            "&:hover": {
              backgroundColor: "#fff",
              color: "red",
            },
            px: 10,
          }}
          onClick={handelLogout}
        >
          Yes
        </Button>
      </Box>
    </CustomModal>
  );
}

export default memo(LogoutModal);
