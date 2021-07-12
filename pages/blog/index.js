import React from "react";
import Head from "next/head";
import Footer from "../../components/Student/Footer";
import BlogGrid from "../../components/Blog/BlogGrid";
import Featured from "../../components/Blog/Featured";
import Trending from "../../components/Blog/Trending";
import MobileTab from "../../components/Blog/MobileTab";
import { Hidden } from "@material-ui/core";

function index() {
  return (
    <>
      <Head>
        <title>GetWork Blog</title>
        <link rel="icon" href="/img/getwork-logo.png" />
        <meta name="Students" content="Development " />
      </Head>
      <Hidden smUp>
        <MobileTab />
      </Hidden>
      <Hidden smDown>
        <BlogGrid />
      </Hidden>
      <Featured />
      <Trending />
      <Footer />
    </>
  );
}

export default index;
