import '../styles/globals.css'
import "../styles/button.css"
import Layout from "../components/Layout"
import CssBaseline from "@material-ui/core/styles";
import App from "next/app";
import React from "react";
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
    return (
<>
      <Head>
      <title>GetWork</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={theme}>
       <Layout>
       <Component {...pageProps}/>
       </Layout>
    </ThemeProvider>
  </>
    );
}
