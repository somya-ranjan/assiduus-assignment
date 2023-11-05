import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// // static import
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import { AppContextProvider } from "./context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<h1>Main Loading...</h1>}>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </Suspense>
);
