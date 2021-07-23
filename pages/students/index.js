import React, { useEffect, useState } from "react";
import Head from "next/head";
import Banner from "../../components/Student/Banner";
import SearchSection from "../../components/Student/SearchSection";
import { Hidden } from "@material-ui/core";
import UserSection from "../../components/Student/UserSection";
import Mockup from "../../components/Student/Mockup";
import MockUpBanner from "../../components/Student/Banner/MockUpBanner";
import CompanyBg from "../../components/Student/Banner/Companybg";
import Locationbg from "../../components/Student/Banner/Locationbg";
import Jobbg from "../../components/Student/Banner/Jobbg";
import Footer from "../../components/Student/Footer";
import SecondBg from "../../components/Student/Banner/SecondBg";
import BlogSlider from "../../components/Student/BlogSection/BlogSlider";
import UserSlider from "../../components/Student/UserSection/UserSlider";
import MobileMockup from "../../components/Student/Mockup/MobileMockup";
import Categoriesbg from "../../components/Student/Banner/Categoriesbg";
import { NIYUKTI_API, PRAVESH_API } from "../../constant";
import axios from "axios";
import { generateCsvWithoutSpacing } from "../../utils/generateCsv";
import { useRouter } from "next/router";
import StrapiClient from "../../lib/strapi-client";
const client = new StrapiClient();

export async function getStaticProps(context) {
  const url = `${NIYUKTI_API}job/role/`;
  const city_url = `${PRAVESH_API}api/location/city/`;
  const explore_url = `${PRAVESH_API}api/common/explore/?user_type=student`;
  const response = await axios.get(url);
  const city_res = await axios.get(city_url);
  const explore_res = await axios.get(explore_url);
  const category_wise_blogs = await client.fetchData(`/blogs/and?category.id=2`);

  return {
    props: {
      jobData: response.data.data,
      locations: city_res.data,
      exploreData: explore_res.data.data,
      categoryBlogs: category_wise_blogs,
    },
  };
}

function index({ jobData, locations, exploreData, categoryBlogs }) {
  console.log(exploreData);
  const [filterObject, setFilterObject] = useState({ job_type_id: [], city_id: [] });
  const [searchString, setSearchString] = useState();
  const [filterIsApplied, setFilterIsApplied] = useState(false);
  const Router = useRouter();
  useEffect(() => {
    if (filterIsApplied) {
      let str = "";
      var count = 0;

      Object.keys(filterObject).forEach((head, index) =>
        Object.keys(filterObject).indexOf(head) !== Object.keys(filterObject).length - 1
          ? (str += filterObject[head].length > 0 ? head + "=" + generateCsvWithoutSpacing(filterObject[head], "id") + "&" : "")
          : (str += filterObject[head].length > 0 ? head + "=" + generateCsvWithoutSpacing(filterObject[head], "id") : "")
      );

      setSearchString(str);
      Router.push(`/public/jobs/?${str}`);
    }
  }, [filterIsApplied]);
  return (
    <>
      <Head>
        <title>GetWork</title>
        <link rel="icon" href="/img/getwork-logo.png" />
        <meta name="Students" content="Development " />
      </Head>
      <Banner />
      <SearchSection jobTypeData={jobData} locations={locations} filterObject={filterObject} setFilterObject={setFilterObject} setFilterIsApplied={setFilterIsApplied} />
      <SecondBg />
      <CompanyBg />
      <Locationbg locations={exploreData?.location} />
      <Categoriesbg jobSegment={exploreData?.job_segment_industry} />
      <Hidden smDown>
        <MockUpBanner />
        <Mockup />
      </Hidden>
      <Hidden smUp>
        <MobileMockup />
      </Hidden>
      <Jobbg />
      <Hidden smUp>
        <UserSlider />
      </Hidden>
      <Hidden smDown>
        <UserSection />
      </Hidden>
      {categoryBlogs.length > 0 && <BlogSlider blogs={categoryBlogs} />}
      {/* <Footer /> */}
    </>
  );
}

export default index;
