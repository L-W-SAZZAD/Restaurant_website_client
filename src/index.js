import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserContext from "./UserContext/UserContext";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <UserContext>
        <App />
      </UserContext>
    </HelmetProvider>
  </React.StrictMode>
);
