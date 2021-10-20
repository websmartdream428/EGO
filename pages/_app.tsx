import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/layouts/Header/Header";
import Footer from "../components/layouts/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
}
export default MyApp;
