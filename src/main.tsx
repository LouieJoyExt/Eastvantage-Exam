import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

import { themeConfig } from "./themeConfig.ts";
import "./index.css";

import { ThemeProvider } from "@mui/material/styles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={themeConfig}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
