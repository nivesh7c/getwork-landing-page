import React from "react";
import Head from "next/head";
import Footer from "../../components/Student/Footer";
import BlogDescription from "../../components/Blog/BlogDescription/BlogDescription";
import Comment from "../../components/Blog/Comment";
import RecentBlog from "../../components/Blog/RecentBlog";

function index() {
  return (
    <>
      <Head>
        <title>GetWork Blog Details</title>
        <link rel="icon" href="/img/getwork-logo.png" />
        <meta name="Students" content="Development " />
      </Head>
      <BlogDescription />
      <Comment />
      <RecentBlog />
      <Footer />
    </>
  );
}

export default index;
