import React from "react";
import { makeStyles } from "@material-ui/styles";
import Head from "next/head";
import Banner from "../../components/College/Banner";
import { Hidden } from "@material-ui/core";
import UserSection from "../../components/Common/UserSection";
import Footer from "../../components/Student/Footer";
import BlogSlider from "../../components/Student/BlogSection/BlogSlider";
import UserSlider from "../../components/Student/UserSection/UserSlider";
import BannerCards from "../../components/College/BannerCards";
import Pay from "../../components/College/Pay";
import Laptop from "../../components/College/Laptop";
import ProvideBg from "../../components/College/Provide/ProvideBg";
import CompanyImageBg from "../../components/Common/CompanyImage/CompanyImageBg";
import FormBg from "../../components/College/Form/FormBg";
import Video from "../../components/College/Video";
import CategoryBg from "../../components/College/CategoryBg.js/CategoryBg";
import CollegeImageBg from "../../components/Common/CollegeImage/CollegeImageBg";
import StudentBg from "../../components/College/Student/StudentBg";

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
      <Banner />
      <BannerCards />
      <ProvideBg />
      {/* <StepBg/> */}
      <Video />
      <StudentBg />
      <Laptop />
      <CompanyImageBg />
      <CategoryBg />
      <CollegeImageBg />
      <div className={classes.section}>
        <Hidden smUp>
          <UserSlider />
        </Hidden>
        <Hidden smDown>
          <UserSection />
        </Hidden>
      </div>
      <Pay />
      <FormBg />
      <div className={classes.section}>
        <BlogSlider />
      </div>
      <Footer />
    </>
  );
}

export default index;
