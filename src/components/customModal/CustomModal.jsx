import React, { memo } from "react";
import {
  Backdrop,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// // static import
import "./style.scss";

function CustomModal(props) {
  return (
    <Dialog
      open={props.open}
      // TransitionComponent={Transition}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      keepMounted
      fullWidth
      sx={{
        zIndex: "1300",
        margin: "auto",
        "& .MuiPaper-root": {
          width: {
            xs: "100%", // theme.breakpoints.up('xs')
          },
          margin: {
            xs: 1,
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          color: "#000",
          fontSize: "22px",
          margin: "auto",
          fontWeight: "bold",
        }}
      >
        <IconButton
          aria-label="close"
          onClick={props.onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogTitle
        sx={{
          color: "#000",
          fontSize: "22px",
          margin: "auto",
          fontWeight: "bold",
          padding: "0 0 10px 0",
        }}
      >
        {props.label}
      </DialogTitle>
      <DialogContent>{props.children}</DialogContent>
    </Dialog>
  );
}

export default memo(CustomModal);
