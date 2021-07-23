import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
import BlogCards from "./BlogCards";
// import Data from "./Data";
import ChipBlogCard from "./ChipBlogCard";
import BlogPaper from "./BlogPaper";
import Link from "next/link";

import { useRouter } from "next/router";
import college from "../../../public/svg/college.svg";
import college_white from "../../../public/svg/college-white.svg";

import graduated from "../../../public/svg/graduated.svg";
import graduated_white from "../../../public/svg/graduated_white.svg";

import officebuilding from "../../../public/svg/office-building.svg";
import officebuilding_white from "../../../public/svg/office-building_white.svg";

import Blog from "../../Cards/Public/Blog";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    marginTop: "100px",
  },
  companydetail1: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    marginBottom: "20px",
    justifyContent: "space-between",
  },
  companydetail: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    marginBottom: "20px",
    // justifyContent: "space-between",
  },
}));

export default function BlogGrid({ data }) {
  const classes = useStyles();
  const router = useRouter();

  const Data = [
    {
      img: router.query.category === "students" ? graduated_white : graduated,
      title: "Students",
      link: "student",
      as: "/blogs/students",
      href: "/blogs/[category]",
      selected: router.query.category === "students" ? true : false,
    },
    {
      img: router.query.category === "college" ? college_white : college,
      title: "Colleges & Institutes",
      link: "college",
      as: "/blogs/college",
      href: "/blogs/[category]",
      selected: router.query.category === "college" ? true : false,
    },
    {
      img: router.query.category === "company" ? officebuilding_white : officebuilding,
      title: "Companies",
      link: "company",
      as: "/blogs/company",
      href: "/blogs/[category]",
      selected: router.query.category === "company" ? true : false,
    },
  ];

  return (
    <>
      <Container maxWidth="lg" className={classes.header}>
        <Grid container spacing={3} className={classes.companydetail1}>
          {Data.map((val, ind) => (
            <Link as={val.as} href={val.href}>
              <Grid item xs={12} md={3}>
                <BlogCards key={ind} img={val.img} title={val.title} selected={val.selected} />
              </Grid>
            </Link>
          ))}
        </Grid>

        <Grid container spacing={3} className={classes.companydetail}>
          {data.map((item, index) => (
            <Grid item md={3} xs={12}>
              {/* <ChipBlogCard item={item} /> */}
              <Blog item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
