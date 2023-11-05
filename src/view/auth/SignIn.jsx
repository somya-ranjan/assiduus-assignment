import React, { memo, useContext } from "react";
import { Box, Button, Tooltip, Typography } from "@mui/material";

// // static import
import { AppContext } from "../../context";

function SignIn() {
  // // context state
  const { setIsAuth } = useContext(AppContext);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Tooltip
        title={
          <Typography variant="caption" textAlign="justify">
            Please click here to access the dashboard. I've added this feature
            to demonstrate my authentication and guest route skills to you.
          </Typography>
        }
        followCursor
        arrow
      >
        <Button
          variant="contained"
          onClick={() => {
            setIsAuth(true);
            localStorage.setItem("authToken", Math.random());
          }}
          sx={{
            height: 300,
            width: 300,
            borderRadius: "50%",
            textTransform: "capitalize",
            fontSize: 20,
          }}
        >
          Click To Sign In/Login
        </Button>
      </Tooltip>
    </Box>
  );
}

export default memo(SignIn);
