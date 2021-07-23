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
import { checkCategoryType } from "../../utils/checkCategoryType";
const client = new StrapiClient();
// export const getStaticPaths = async () => {
//   const paths = [{ params: { category: "students" } }, { params: { category: "company" } }, { params: { category: "college" } }];

//   return {
//     paths,
//     fallback: false,
//   };
// };

export async function getServerSideProps(context) {
  var category_id = checkCategoryType(context.params.category);
  const category = await client.fetchData(`/blogs/and?category.id=${category_id}`);
  const featured = await client.fetchData(`/blogs/and?category.id=${category_id}&group.id=1`);
  const trending = await client.fetchData(`/blogs/and?category.id=${category_id}&group.id=2`);
  console.log(featured);
  return {
    props: {
      data_blog: category,
      featured_blog: featured,
      trending_blog: trending,
    },
  };
}

function index({ data_blog, featured_blog, trending_blog }) {
  console.log(featured_blog);
  const [featured, setFeatured] = useState(featured_blog);
  const [trending, setTrending] = useState(trending_blog);
  const [data, setData] = useState(data_blog);

  const router = useRouter();

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
      {featured_blog.length > 0 && <Featured featured={featured_blog} />}
      {trending_blog.length > 0 && <Trending trending={trending_blog} />}
    </>
  );
}

export default index;
