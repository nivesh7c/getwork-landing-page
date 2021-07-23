import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography } from "@material-ui/core";
import TrendingCard from "./TrendingCard";
import Blog from "../../Cards/Public/Blog";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    // paddingLeft: "10px",
    //paddingRight: "10px",
    // marginTop: '100px',
  },
  companydetail: {
    marginTop: "30px",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    marginBottom: "20px",
    // justifyContent: "space-between",
  },
}));

export default function Trending({ trending }) {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.header}>
        <Typography variant="h2">Trending</Typography>

        <Grid container spacing={3} className={classes.companydetail}>
          {trending.map((item, index) => (
            <Grid item xs={12} md={4}>
              {/* <TrendingCard item={item} /> */}
              <Blog item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
