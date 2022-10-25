import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Home } from "../templates/Home";
import { OrdemServico } from "../templates/OdemServico";

export const Routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Home />} path="/" />
      <Route element={<OrdemServico />} path="os" />
    </>
  )
);
