import React, { Suspense, memo, useContext, useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

// // static import
import Sidebar from "../components/sideBar/Sidebar";
import TopBar from "../components/topBar/TopBar";
import { AppContext } from "../context";
import MainLoader from "../components/loader/MainLoader";

function MainLayouts({ isAuthenticated }) {
  // // initial state
  const outsideSideBarRef = useRef(null);

  // // context state
  const { openSideBar, setOpenSideBar } = useContext(AppContext);

  // function for close sidebar when click outside
  const handelToggle = (e) => {
    if (!outsideSideBarRef?.current?.contains(e?.target)) {
      setOpenSideBar(false);
    }
  };

  // // lifecycle
  useEffect(() => {
    document.addEventListener("click", handelToggle, true);
  }, []);

  return (
    <Grid container>
      {isAuthenticated ? (
        <>
          <Grid
            item
            xs={8}
            sm={3.5}
            md={3}
            lg={2}
            sx={{
              backgroundColor: "#fff",
              left: openSideBar ? "0 !important" : "-100%",
            }}
            className="sidebar_container"
            ref={outsideSideBarRef}
          >
            <Sidebar />
          </Grid>
          <Grid item xs={12} sm={8.5} md={9} lg={10} className="main_content">
            <TopBar />
            <Suspense
              fallback={<MainLoader isAuthenticated={isAuthenticated} />}
            >
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sx={{
                    p: {
                      xs: 1,
                      sm: 2,
                      md: 3,
                      lg: 4,
                      xl: 5,
                    },
                  }}
                >
                  <Outlet />
                </Grid>
              </Grid>
            </Suspense>
          </Grid>
        </>
      ) : (
        <Suspense fallback={<MainLoader />}>
          <Outlet />
        </Suspense>
      )}
    </Grid>
  );
}

export default memo(MainLayouts);
