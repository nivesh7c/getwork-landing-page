import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid, Chip } from "@material-ui/core";
import Image from "next/image";

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
  ch: {
    color: "white",
    paddingLeft: "10px",
    paddingRight: "10px",
    backgroundColor: "black",
  },
}));
export default function BlogCards(props) {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={4} className={classes.img}>
            <Image
              src={props.img}
              className={classes.cd}
              height="70px"
              width="70px"
              alt="icons"
            />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h5" color="primary">
              Blog For
            </Typography>
            <br />
            <Typography variant="body2" color="primary">
              {props.title}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
