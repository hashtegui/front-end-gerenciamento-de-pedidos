import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes";
import { OsProvider } from "./providers/OsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <OsProvider>
      <RouterProvider router={Routes}></RouterProvider>
    </OsProvider>
  </React.StrictMode>
);
