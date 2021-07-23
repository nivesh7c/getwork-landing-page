import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  img: {
    borderRadius: "15px",
  },
}));

export default function RightImage(props) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} sm={6}>
        <Image
          src={props.img}
          className={classes.img}
          height="440px"
          width="440px"
          alt="getwork-img"
        />
        <br />
      </Grid>
      <Grid item xs={12} sm={6} className={classes.content}>
        <div>
          <Typography variant="h6">{props.heading}</Typography>
          <Typography variant="body2">{props.details}</Typography>
        </div>
      </Grid>
    </>
  );
}
