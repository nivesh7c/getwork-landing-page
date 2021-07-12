import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid, Chip, Link } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles(theme => ({
  // img: {
  //   display: "flex",
  //   flexDirection: "row",
  //   alignContent: "center",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${"/png/collegebanner.png"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "200px",
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
    backgroundColor: "rgba(0,0,0,.1)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(5),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(2),
      paddingRight: 0,
    },
  },
  chip: {
    color: "white",
    paddingLeft: "10px",
    paddingRight: "10px",
    backgroundColor: "black",
  },
}));
export default function ChipBlogCard() {
  const classes = useStyles();
  return (
    <>
      <div>
        <Paper className={classes.mainFeaturedPost}>
          {/* {
            <img
              style={{ display: "none" }}
              src="/png/collegebanner.png"
              alt="de"
            />
          } */}
          <div className={classes.overlay} />
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Chip size="small" label="Job" className={classes.chip} />
              </div>
            </Grid>
          </Grid>
        </Paper>
        <Typography variant="h6" color="inherit" paragraph>
          Quis autem vel eum iure velit esse quam
        </Typography>

        <Typography variant="body2" color="inherit" paragraph>
          17 November 2019
        </Typography>
      </div>
    </>
  );
}
