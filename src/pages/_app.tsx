import "../../styles/globals.css";
import "materialize-css/dist/css/materialize.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { OsProvider } from "../providers/OsContext";
import { useEffect } from "react";
import SidenavComp from "../components/Sidenav";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const M = require("materialize-css");
    M.AutoInit();
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <OsProvider>
        <SidenavComp></SidenavComp>
        <Component {...pageProps}></Component>
      </OsProvider>
    </>
  );
}
