import React, { memo } from "react";
import { Box } from "@mui/material";

// // static import
import { MAIN_LOADER } from "../../assets/loader";

function MainLoader({ isAuthenticated }) {
  return (
    <Box
      sx={{
        position: "fixed",
        height: "100%",
        width: "100%",
        top: 0,
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: {
            xs: "50%",
            sm: isAuthenticated ? "35%" : "50%",
            lg: isAuthenticated ? "40%" : "50%",
          },
          transform: "translate(-50%,-50%)",
        }}
      >
        <img src={MAIN_LOADER} alt="main loader" />
      </Box>
    </Box>
  );
}

export default memo(MainLoader);
