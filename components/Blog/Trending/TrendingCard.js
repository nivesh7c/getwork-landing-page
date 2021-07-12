import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid, Chip } from "@material-ui/core";
import Image from "next/image";
import { Link } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
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
}));
export default function TrendingCard() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.mainFeaturedPost}></Paper>
      <Typography variant="h6" color="inherit" paragraph>
        Quis autem vel eum iure velit esse quam
      </Typography>

      <Typography variant="body2" color="inherit" paragraph>
        17 November 2019
      </Typography>
    </>
  );
}
