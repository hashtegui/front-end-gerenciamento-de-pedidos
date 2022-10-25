import React from "react";
import {
  Route,
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Home } from "../templates/Home";

export const Routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Home />} path="/" />
    </>
  )
);
