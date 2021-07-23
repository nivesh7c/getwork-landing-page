import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Hidden, Typography, Grid } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "30px",
  },
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  text: {
    paddingTop: "50px",
    paddingBottom: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function Press() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.header}>
        <div className={classes.text}>
          <Hidden smDown>
            <Typography variant="h1">
              Building the #1 early career community
            </Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h2">
              Building the #1 early career community
            </Typography>
          </Hidden>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Image
              src="/png/getworkone.png"
              height="220px"
              width="460px"
              alt="getwork-poster"
            />
            <Typography variant="h6">March, 2019</Typography>
            <Typography variant="body2">
              Among Top 100 Startups in Startup Turkey
              <br /> Getwork at India Accelerator
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Image
              src="/png/getwork-two.png"
              height="220px"
              width="460px"
              alt="getwork-poster"
            />
            <Typography variant="h6">March, 2019</Typography>
            <Typography variant="body2">
              Among Top 100 Startups in Startup Turkey
              <br /> Getwork at India Accelerator
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
