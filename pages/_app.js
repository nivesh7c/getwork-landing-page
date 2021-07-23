import "../styles/globals.css";
import "../styles/button.css";
import Layout from "../components/Layout";
import CssBaseline from "@material-ui/core/styles";
import App from "next/app";
import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/theme";
import Router from "next/router";
import Loader from "../components/Loader/Loader";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  // const [loading, setLoading] = React.useState(false);
  // React.useEffect(() => {
  //   const start = () => {
  //     setLoading(true);
  //   };
  //   const end = () => {
  //     setLoading(false);
  //   };
  //   Router.events.on("routeChangeStart", start);
  //   Router.events.on("routeChangeComplete", end);
  //   Router.events.on("routeChangeError", end);
  //   return () => {
  //     Router.events.off("routeChangeStart", start);
  //     Router.events.off("routeChangeComplete", end);
  //     Router.events.off("routeChangeError", end);
  //   };
  // }, []);
  return (
    <>
      <Head>
        <title>GetWork</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          {/* {loading ? <Loader /> :  */}
          <Component {...pageProps} />
          {/* } */}
        </Layout>
      </ThemeProvider>
    </>
  );
}
