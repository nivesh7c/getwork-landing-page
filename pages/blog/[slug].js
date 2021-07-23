import React, { useEffect } from "react";
import Head from "next/head";
import Footer from "../../components/Student/Footer";
import BlogDescription from "../../components/Blog/BlogDescription/BlogDescription";
import Comment from "../../components/Blog/Comment";
import RecentBlog from "../../components/Blog/RecentBlog";
import { useRouter } from "next/router";
import StrapiClient from "../../lib/strapi-client";
import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import Router from "next/router";
import { STRAPI_API } from "../../constant";

const client = new StrapiClient();

export const getStaticPaths = async () => {
  // you can get how many ever postIds are know ahead of time
  // and return as paths with fallback set to true
  const posts = await client.fetchData(`/blogs`); // queried data from db or fetched from remote API

  var arr = [];
  posts?.length > 0 &&
    posts?.map((post) =>
      arr.push({
        params: {
          slug: post.Title.split(" ").join("_") + "=" + post.id,
        },
      })
    );

  const paths = arr;
  console.log(paths);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const blogs = await client.fetchData(`/blogs/${context.params.slug.split("=")[1]}`);
  const category_wise_blogs = await client.fetchData(`/blogs/and?category.id=${blogs.category.id}`);
  const featured_blog = await client.fetchData(`/groups/${1}`);
  return {
    props: {
      data: blogs,
      categoryBlogs: category_wise_blogs,
      params: context.params,
      featured_blog: featured_blog.blogs[0],
    },
  };
};

function index({ data, categoryBlogs, params, featured_blog }) {
  const [singleBlogData, setSingleBlogData] = useState(data);
  const [categoryBlogData, setCategoryBlogData] = useState(categoryBlogs);
  const [buttonClickedNext, setButtonClickedNext] = useState(false);
  const [buttonClickedPrev, setButtonClickedPrev] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const [currentIndexSet, setCurrentIndexSet] = useState(false);
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [message, setMessage] = useState();
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const [showNext, setShowNext] = useState(false);
  const [showPrev, setShowPrev] = useState(false);
  const { slug } = router.query;
  const [currentIndex, setCurrentIndex] = useState();
  const [tempId, setTempId] = useState(null);
  var blog_id = null;
  React.useEffect(() => {
    if (slug) {
      blog_id = slug.split("=")[1];
      setTempId(blog_id);
    }
  }, [slug]);

  const fetchData = async (id, flag) => {
    const blogs = await client.fetchData(`/blogs/${id}`);
    setButtonClickedNext(false);
    setButtonClickedPrev(false);
    setButtonClicked(false);
    // if (flag === "next") setCurrentIndex(currentIndex + 1);
    // if (flag === "prev") setCurrentIndex(currentIndex - 1);

    return setSingleBlogData(blogs);
  };
  const fetchCategoryData = async () => {
    const blogs = await client.fetchData(`/blogs/and?category.id=${singleBlogData.category.id}`);
    return setCategoryBlogData(blogs);
  };
  useEffect(() => {
    if (blog_id && Object.keys(singleBlogData).length === 0) {
      fetchData(blog_id);
    }
  }, [blog_id]);

  useEffect(() => {
    if (buttonClickedNext) {
      fetchData(categoryBlogData[parseInt(currentIndex + 1)].id, "next");
    }
    if (buttonClickedPrev) {
      fetchData(categoryBlogData[parseInt(currentIndex - 1)].id, "prev");
    }
  }, [buttonClickedNext, buttonClickedPrev]);

  useEffect(() => {
    if (Object.keys(singleBlogData).length > 0 && categoryBlogData.length === 0) {
      fetchCategoryData();
    }
    setTempId(singleBlogData?.id);
  }, [singleBlogData]);

  useEffect(() => {
    var index;
    setShowNext(false);
    setShowPrev(false);
    setCurrentIndexSet(false);
    if (categoryBlogData.length > 0 && tempId) {
      index = categoryBlogData.findIndex((i) => i.id === parseInt(tempId));

      setCurrentIndex(index);
      console.log(index);
      if (categoryBlogData.length === 1) {
        setShowNext(false);
        setShowPrev(false);
      } else if (parseInt(categoryBlogData.length - 1) === parseInt(index) && categoryBlogData.length > 1) {
        console.log("show previous");
        setShowPrev(true);
      } else if (parseInt(index) === 0 && categoryBlogData.length > 1) {
        console.log("show next");

        setShowNext(true);
      } else {
        setShowNext(true);
        setShowPrev(true);
      }
      setCurrentIndexSet(true);
    }
  }, [categoryBlogData, tempId]);

  async function addComment() {
    setLoader(true);
    const commentInfo = {
      content: message,
      authorName: name,
      authorEmail: email,
      related: [
        {
          refId: tempId,
          ref: "blogs",
          field: "comments",
        },
      ],
    };

    const add = await fetch(`${STRAPI_API}/comments/blogs:${tempId}`, {
      method: "POST",
      headers: {
        // 'Authorization': `Bearer ${jwt}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentInfo),
    });

    const addResponse = await add.json();
    console.log(addResponse);
    setLoader(false);

    return setSingleBlogData({ ...singleBlogData, comments: [...singleBlogData.comments, addResponse] });
  }

  useEffect(() => {
    console.log(singleBlogData);
  }, [singleBlogData]);

  useEffect(() => {
    console.log(categoryBlogData);
  }, [categoryBlogData]);

  if (router.isFallback) {
    return <Loader />;
  } else {
    return (
      <>
        <Head>
          <title>GetWork Blog Details</title>
          <link rel="icon" href="/img/getwork-logo.png" />
          <meta name="Students" content="Development " />
        </Head>
        {buttonClickedNext || buttonClickedPrev || buttonClicked ? (
          <Loader />
        ) : (
          <>
            <BlogDescription
              data={singleBlogData}
              categoryData={categoryBlogData}
              currentIndex={currentIndex}
              showNext={showNext}
              showPrev={showPrev}
              setButtonClickedNext={setButtonClickedNext}
              setButtonClickedPrev={setButtonClickedPrev}
              currentIndexSet={currentIndexSet}
            />
            <Comment
              comments={singleBlogData?.comments}
              idBlog={singleBlogData?.id}
              setSingleBlogData={setSingleBlogData}
              singleBlogData={singleBlogData}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              loader={loader}
              message={message}
              setMessage={setMessage}
              addComment={addComment}
              featured_blog={featured_blog}
            />
            <RecentBlog data={categoryBlogData} fetchData={fetchData} setButtonClicked={setButtonClicked} />
          </>
        )}
      </>
    );
  }
}

export default index;
