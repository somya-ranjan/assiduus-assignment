import React, { memo, useContext, useState } from "react";
import {
  Avatar,
  Box,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  OutlinedInput,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

// // static import
import { AppContext } from "../../context";
import LogoutModal from "../profile/LogoutModal";
import { SM_BRAND_LOGO } from "../../assets/logo";
import "./style.scss";
import { useNavigate } from "react-router-dom";

function TopBar() {
  // //  initial state
  const navigate = useNavigate();

  // // context state
  const { setOpenSideBar } = useContext(AppContext);

  // // local state
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  // // function
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenLogoutModal = () => {
    setOpenLogoutModal(true);
    setAnchorElUser(null);
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fff",
          width: "100%",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          py: 2.5,
          px: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 5,
          },
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
        className="top_bar_container"
      >
        <OutlinedInput
          size="small"
          className="search_input"
          id="outlined-adornment-weight"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", columnGap: 2 }}>
            <MenuIcon
              className="hamburger_menu"
              onClick={() => setOpenSideBar(true)}
            />

            <img
              src={SM_BRAND_LOGO}
              alt="brand logo"
              className="sm_brand_logo"
              onClick={() => navigate("/")}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <div className="notification_icon">
              <NotificationsIcon />
            </div>

            <Avatar
              alt="profile pic"
              src="https://xsgames.co/randomusers/avatar.php?g=male"
            />
            <Box ml={1}>
              <IconButton onClick={handleOpenUserMenu}>
                <ArrowDropDownIcon />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleOpenLogoutModal}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Box>
      </Box>
      <LogoutModal
        modalOpen={openLogoutModal}
        setModalOpen={setOpenLogoutModal}
      />
    </>
  );
}

export default memo(TopBar);
