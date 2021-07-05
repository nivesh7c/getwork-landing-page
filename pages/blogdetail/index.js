import React from "react";
import { makeStyles } from "@material-ui/styles";
import Head from "next/head";
import Banner from "../../components/college/Banner";
import { Hidden } from "@material-ui/core";
import UserSection from "../../components/Common/UserSection";
import Footer from "../../components/Student/Footer";
import BlogSlider from "../../components/Student/BlogSection/BlogSlider";
import UserSlider from "../../components/Student/UserSection/UserSlider";
import BannerCards from "../../components/college/BannerCards";
import Pay from "../../components/college/Pay";
import Laptop from "../../components/college/Laptop";
import ProvideBg from "../../components/College/Provide/ProvideBg";
import CompanyImageBg from "../../components/Common/CompanyImage/CompanyImageBg";
import FormBg from "../../components/College/Form/FormBg";
import Video from "../../components/College/Video";
import CategoryBg from "../../components/College/CategoryBg.js/CategoryBg";
import CollegeImageBg from "../../components/Common/CollegeImage/CollegeImageBg";
import StudentBg from "../../components/college/Student/StudentBg";
import BlogGrid from "../../components/Blog/BlogGrid";

import Featured from "../../components/Blog/Featured";
import Trending from "../../components/Blog/Trending";
import Header from "../../components/Blog/Trending/Header";
import Comment from "../../components/Blog/Trending/Comment";
import BlogInfo from "../../components/Blog/BlogInfo";
import RecentBlog from "../../components/Blog/RecentBlog";

const useStyles = makeStyles(theme => ({
  section: {
    backgroundColor: "#ffff",
    paddingBottom: "20px",
  },
}));

function index() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>GetWork</title>
        <link rel="icon" href="/img/getwork-logo.png" />
        <meta name="Students" content="Development " />
      </Head>

      <Header />

      <Comment />
      <RecentBlog />

      <Footer />
    </>
  );
}

export default index;
