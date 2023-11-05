import React from "react";

export const guestRoutes = [
  {
    path: "/sign-in",
    name: "SignIn",
    exact: true,
    component: React.lazy(() => import("../../view/auth/SignIn")),
  },

  {
    redirectRoute: true,
    name: "SignIn",
    path: "/sign-in",
  },
];
export const userRoutes = [
  {
    path: "/",
    name: "Dashboard",
    exact: true,
    component: React.lazy(() => import("../../view/dashboard/Dashboard")),
  },
  {
    path: "/account",
    name: "Accounts",
    exact: true,
    component: React.lazy(() => import("../../view/dashboard/Dashboard")),
  },
  {
    path: "/paypal",
    name: "Paypal",
    exact: true,
    component: React.lazy(() => import("../../view/dashboard/Dashboard")),
  },
  {
    path: "/reports",
    name: "Reports",
    exact: true,
    component: React.lazy(() => import("../../view/dashboard/Dashboard")),
  },
  {
    path: "/advisor",
    name: "Advisor",
    exact: true,
    component: React.lazy(() => import("../../view/dashboard/Dashboard")),
  },
  {
    path: "/contact",
    name: "Contact",
    exact: true,
    component: React.lazy(() => import("../../view/dashboard/Dashboard")),
  },
  {
    redirectRoute: true,
    name: "Dashboard",
    path: "/",
  },
];
