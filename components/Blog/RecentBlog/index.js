import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography } from "@material-ui/core";
import ChipBlogCard from "../BlogGrid/ChipBlogCard";
import Blog from "../../Cards/Public/Blog";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
    //  marginTop: '100px',
  },
  companydetail: {
    marginTop: "30px",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    marginBottom: "50px",
    // justifyContent: "space-between",
  },
}));

export default function RecentBlog({ data, fetchData, setButtonClicked }) {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.header}>
        <Typography variant="h2">Related Blogs</Typography>
        <Grid container spacing={3} className={classes.companydetail}>
          {data.slice(0, 4).map((item, index) => (
            <Grid item md={3} xs={12}>
              {/* <ChipBlogCard item={item} fromSlug={true} fetchData={fetchData} setButtonClicked={setButtonClicked} /> */}
              <Blog
                item={item}
                fromSlug={true}
                fetchData={fetchData}
                setButtonClicked={setButtonClicked}
              />
            </Grid>
          ))}{" "}
        </Grid>
      </Container>
    </>
  );
}
