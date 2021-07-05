import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid, Chip } from "@material-ui/core";
import Image from "next/image";
import { Link } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.common.black,
    borderRadius: "15px",
    backgroundColor: theme.palette.common.white,
    border: "solid 1px #007bff",
    boxShadow: "none",
  },
  img: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  cd: {
    color: "red",
  },

  demo: {
    borderRadius: "30px",
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${"/png/studentbg.jpg"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    boxShadow: "none",
    height: "350px",
    borderRadius: "25px",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    borderRadius: "25px",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    color: "white",
    width: "auto",
    // marginTop:"195px",
    // backgroundColor:"white",
    height: "200px",
    borderRadius: "12px",
    boxShadow: "none",

    border: "none",
    color: "black",
    padding: theme.spacing(5),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(5),
      paddingRight: 0,
    },
  },
  ch: {
    color: "white",
    paddingLeft: "10px",
    paddingRight: "10px",
    backgroundColor: "black",
  },
}));
export default function FeaturedCard() {
  const classes = useStyles();
  return (
    <>
      <div>
        <Paper
          className={classes.mainFeaturedPost}
          style={{ backgroundImage: "/png/collegebanner.png" }}
        >
          {/* Increase the priority of the hero background image */}
          {
            // <img
            //   style={{ display: "none" }}
            //   src="/png/studentbg.png"
            //   alt="de"
            // />
          }
          <div className={classes.overlay} />
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography variant="h3" style={{ color: "white" }}>
                  Perspiciatis unde omnis istenatus error sit
                </Typography>
                <Typography variant="overline" style={{ color: "white" }}>
                  December 29, 2019
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
}
