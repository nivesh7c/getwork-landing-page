import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CustomStepper from ".";
import { Container, Hidden, Typography, Grid } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#e5f1ff",
    height: "450px",
    marginBottom: "250px",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      marginBottom: theme.spacing(1),
    },
  },
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  img: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
}));

export default function History() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.header}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={6}
            style={{ paddingTop: "60px", paddingBottom: "60px" }}
          >
            <Hidden smDown>
              <Typography variant="h1">
                Building the #1 Early Career Community
              </Typography>
            </Hidden>
            <Hidden smUp>
              <Typography variant="h2">
                Building the #1 Early Career Community
              </Typography>
            </Hidden>
            <br />
            <CustomStepper />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.img}>
            <Image src="/png/aboutone.png" height="400px" width="350px" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
