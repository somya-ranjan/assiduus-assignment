import React, { memo, useContext, useEffect } from "react";
import { Box, List, ListItem } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

// // static import
import { AppContext } from "../../context";
import { BRAND_LOGO } from "../../assets/logo";
import "./style.scss";

function Sidebar() {
  // //  initial state
  const navigate = useNavigate();

  // // context state
  const { openSideBar, setOpenSideBar } = useContext(AppContext);

  // // sidebar data
  const listData = [
    {
      name: "Dashboard",
      link: "/",
      logo: "uil uil-create-dashboard",
    },
    {
      name: "Account",
      link: "/account",
      logo: "uil uil-wallet",
    },
    {
      name: "Paypal",
      link: "/paypal",
      logo: "uil uil-dollar-alt",
    },
    {
      name: "Reports",
      link: "/reports",
      logo: "uil uil-file-alt",
    },
    {
      name: "Advisor",
      link: "/advisor",
      logo: "uil uil-user",
    },
    {
      name: "Contact",
      link: "/contact",
      logo: "uil uil-user-square",
    },
  ];

  // // lifecycle
  useEffect(() => {
    if (openSideBar) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [openSideBar]);

  return (
    <>
      <Box className="sidebar_hero">
        <Box
          sx={{ px: 4, pb: 5, pt: 2.7, cursor: "pointer" }}
          onClick={() => {
            setOpenSideBar(false), navigate("/");
          }}
        >
          <img src={BRAND_LOGO} alt="brand logo" />
        </Box>
        <List className="sidebar_menu">
          {listData.map((nav) => (
            <NavLink to={nav.link} key={Math.random()}>
              <ListItem onClick={() => setOpenSideBar(false)}>
                <i className={nav.logo} />
                {nav.name}
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Box>
      {openSideBar && (
        <div className="back_drop" onClick={() => setOpenSideBar(false)} />
      )}
    </>
  );
}

export default memo(Sidebar);
