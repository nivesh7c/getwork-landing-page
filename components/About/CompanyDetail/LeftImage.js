import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { Container, Hidden, Typography } from "@material-ui/core";
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
  rightimg: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  img: {
    borderRadius: "15px",
  },
}));

export default function LeftImage(props) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} sm={6} className={classes.content}>
        <div>
          <Hidden smUp>
            <Image
              src={props.img}
              className={classes.img}
              height="440px"
              width="440px"
              alt="getwork-img"
            />
          </Hidden>
          <Typography variant="h6">{props.heading}</Typography>
          <Typography variant="body2">{props.details}</Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.rightimg}>
        <Hidden smDown>
          <Image
            src={props.img}
            height="420px"
            width="440px"
            className={classes.img}
          />
        </Hidden>
      </Grid>
    </>
  );
}
