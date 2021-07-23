import React from "react";
import { makeStyles } from "@material-ui/styles";
import Head from "next/head";
import Banner from "../../components/Employer/Banner";
import { Hidden } from "@material-ui/core";
import UserSection from "../../components/Student/UserSection";
import Footer from "../../components/Student/Footer";
import BlogSlider from "../../components/Student/BlogSection/BlogSlider";
import UserSlider from "../../components/Student/UserSection/UserSlider";
import BannerCards from "../../components/Employer/BannerCards";
import Pay from "../../components/Employer/Pay";
import Laptop from "../../components/Employer/Laptop";
import ProvideBg from "../../components/Employer/Provide/ProvideBg";
import StepBg from "../../components/Employer/Step/StepBg";
import CompanyImageBg from "../../components/Common/CompanyImage/CompanyImageBg";
import FormBg from "../../components/Employer/Form/FormBg";
import Video from "../../components/Employer/Video";
import CategoryBg from "../../components/Employer/CategoryBg.js/CategoryBg";
import CollegeImageBg from "../../components/Common/CollegeImage/CollegeImageBg";
import StrapiClient from "../../lib/strapi-client";
import { PRAVESH_API } from "../../constant";
import axios from "axios";
import PostJob from "../../components/Employer/PostJob.js";

const useStyles = makeStyles(theme => ({
  section: {
    backgroundColor: "#ffff",
    paddingBottom: "20px",
  },
}));

const client = new StrapiClient();

export async function getStaticProps(context) {
  const category_wise_blogs = await client.fetchData(
    `/blogs/and?category.id=${1}}`
  );
  const explore_url = `${PRAVESH_API}api/common/explore/?user_type=college`;
  const explore_res = await axios.get(explore_url);

  return {
    props: {
      categoryBlogs: category_wise_blogs,
      exploreData: explore_res.data.data,
    },
  };
}

function index({ categoryBlogs, exploreData }) {
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
      <StepBg />
      <Video />
      <Laptop />
      <CompanyImageBg />
      <CategoryBg jobSegment={exploreData?.job_segment_industry} />
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
        {categoryBlogs.length > 0 && <BlogSlider blogs={categoryBlogs} />}
      </div>
      <PostJob />
    </>
  );
}

export default index;
