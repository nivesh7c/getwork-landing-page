import React, { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../../components/Student/Footer";
import BlogGrid from "../../components/Blog/BlogGrid";
import Featured from "../../components/Blog/Featured";
import Trending from "../../components/Blog/Trending";
import MobileTab from "../../components/Blog/MobileTab";
import { Hidden } from "@material-ui/core";
import StrapiClient from "../../lib/strapi-client";
import { useRouter } from "next/router";
import { STRAPI_API } from "../../constant";
const client = new StrapiClient();
export const getServerSideProps = async ctx => {
  const blogs = await client.fetchData(`/blogs`);
  const featured = await client.fetchData(`/groups/${1}`);
  const trending = await client.fetchData(`/blogs/and?group.id=2`);
  return {
    props: {
      data_blog: blogs,
      featured_blog: featured,
      trending_blog: trending,
    },
  };
};

function index({ data_blog, featured_blog, trending_blog }) {
  const [featured, setFeatured] = useState(featured_blog);
  const [trending, setTrending] = useState(trending_blog);
  const [data, setData] = useState(data_blog);
  const [categoryButtonClicked, setCategoryButtonClicked] = useState(false);
  const [clickedTab, setClickedTab] = useState(null);
  const router = useRouter();
  const { queryParam } = router.query;

  // useEffect(() => {
  //   if (categoryButtonClicked) window.history.pushState({}, null, `/blog/${clickedTab}`);
  // }, [categoryButtonClicked]);

  return (
    <>
      <Head>
        <title>GetWork Blog</title>
        <link rel="icon" href="/img/getwork-logo.png" />
        <meta name="Students" content="Development " />
      </Head>
      <Hidden smUp>
        <MobileTab data={data_blog} />
      </Hidden>
      <Hidden smDown>
        <BlogGrid data={data_blog} />
      </Hidden>

      {featured?.blogs?.length > 0 && <Featured featured={featured?.blogs} />}
      {trending?.length > 0 && <Trending trending={trending} />}
    </>
  );
}

export default index;
