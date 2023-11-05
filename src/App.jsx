import { memo, useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

// // static import
import { AppContext } from "./context";
import MainLayouts from "./layouts/MainLayouts";
import { guestRoutes, userRoutes } from "./routes/mainRoutes";

function App() {
  // // initial state
  const location = useLocation();
  const tokenPresent = localStorage.getItem("authToken");

  // // context state
  const { isAuth } = useContext(AppContext);

  // // local state
  const [appRoutes, setAppRoutes] = useState([]);

  useEffect(() => {
    if (tokenPresent || isAuth) {
      setAppRoutes(userRoutes);
    } else {
      setAppRoutes(guestRoutes);
    }
  }, [tokenPresent, isAuth]);

  const mainContent = appRoutes.map((route) => {
    return route.component ? (
      <Route
        key={route.name}
        path={route.path}
        exact={route.exact}
        name={route.name}
        element={<route.component />}
      />
    ) : (
      route.redirectRoute && (
        <Route
          path="*"
          key={route.name}
          element={<Navigate to={route.path} />}
        />
      )
    );
  });

  return (
    <Routes>
      <Route element={<MainLayouts isAuthenticated={tokenPresent} />}>
        {mainContent}
      </Route>
    </Routes>
  );
}

export default memo(App);
