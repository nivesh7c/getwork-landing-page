import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import { Typography, Container, Hidden } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  text: {
    color: "#fff",
    textAlign: "center",
    paddingBottom: "30px",
  },
  paper: {
    padding: theme.spacing(2),
    width: "auto",
    borderRadius: "20px",
    backgroundColor: "white",
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  grid: {
    display: "flex",
    padding: "12px",
    flexDirection: "row",
    justifyContent: "center",
  },
}));

export default function CardGrid() {
  const classes = useStyles();

  return (
    <>
      <div
        style={{ backgroundColor: "#007bff", height: "auto", padding: "50px" }}
      >
        <Container maxWidth="lg" className={classes.header}>
          <div className={classes.text}>
            <Hidden smDown>
              <Typography variant="h1">
                Looking for Something in Particular
              </Typography>
            </Hidden>
            <Hidden smUp>
              <Typography variant="h2">
                Looking for Something in Particular
              </Typography>
            </Hidden>
          </div>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={4} className={classes.header}>
              <div className={classes.paper}>
                <Image src="/png/support.png" height="120px" width="120px" />
                <Typography variant="h6" color="primary">
                  Technical Difficulty?
                  <br /> Use our Chatbot
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.header}>
              {" "}
              <div className={classes.paper}>
                <Image src="/png/demo.png" height="120px" width="120px" />
                <Typography variant="h6" color="primary">
                  Need more info?
                  <br />
                  Schedule Demo!
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.header}>
              {" "}
              <div className={classes.paper}>
                <Image src="/png/handshake.png" height="120px" width="120px" />
                <Typography variant="h6" color="primary">
                  Partnership
                  <br /> & Alliances
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
