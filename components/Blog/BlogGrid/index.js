import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
import BlogCards from "./BlogCards";
import Data from "./Data";
import ChipBlogCard from "./ChipBlogCard";
import BlogPaper from "./BlogPaper";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    marginTop: "100px",
  },
  companydetail: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    marginBottom: "20px",
    justifyContent: "space-between",
  },
}));

export default function BlogGrid() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.header}>
        <Grid container spacing={3} className={classes.companydetail}>
          {Data.map((val, ind) => (
            <Grid item xs={12} md={3}>
              <BlogCards key={ind} img={val.img} title={val.title} />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3} className={classes.companydetail}>
          <Grid item xs={12} md={3}>
            <ChipBlogCard />
          </Grid>
          <Grid item xs={12} md={3}>
            <ChipBlogCard />
          </Grid>
          <Grid item xs={12} md={3}>
            <ChipBlogCard />
          </Grid>
          <Grid item xs={12} md={3}>
            <ChipBlogCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <BlogPaper />
          </Grid>
          <Grid item xs={12} md={6}>
            <BlogPaper />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
