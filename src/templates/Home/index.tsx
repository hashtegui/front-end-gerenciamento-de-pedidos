import React, { useContext, useEffect, useState } from "react";
import Templogo from "../assets/logo.svg";
import { Header } from "../../components/Header";
import "./style.css";
import { OsContext } from "../../providers/OsContext";
import { Footer } from "../../components/Footer";

const ulr_base = "http://localhost:8080";

export const Home = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};
