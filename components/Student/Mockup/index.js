import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import { Typography, Button, Container } from "@material-ui/core";
import CustomTab from "../../Cards/Public/CustomTab";
import Link from "next/link";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "-530px",
    position: "relative",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  download: {
    borderRadius: "10px",
  },
  tab: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  downloadbtn: {
    color: "white",
    padding: "0",
    backgroundColor: "black",
    borderRadius: "50px",
  },
  text: {
    color: "white",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    marginTop: "-100px",
  },
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
    marginTop: "20px",
  },
}));

export default function Mockup() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="lg" component="main" className={classes.header}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} className={classes.tab}>
              <div className={classes.details}>
                <Typography variant="subtitle2" className={classes.text}>
                  Everything on mobile
                </Typography>
                <br />
                <Typography variant="h2" className={classes.text}>
                  The “Adda” of Jobs is Now on PlayStore.
                </Typography>
                <br />
                <Typography variant="body1" className={classes.text}>
                  Get jobs for freshers and many more. Download the app to get
                  personalised notifications daily.
                </Typography>
                <br />
                <div>
                  <Link href="https://play.google.com/store/apps/details?id=com.getwork_app">
                    <a target="_blank">
                      <Button
                        variant="contained"
                        color="default"
                        className={classes.downloadbtn}
                      >
                        <Image
                          src="/png/google.png"
                          className={classes.download}
                          height="60px"
                          width="200px"
                          alt="googleplaystore_icon"
                        />
                      </Button>
                    </a>
                  </Link>
                </div>
              </div>
            </Grid>
            <Grid item xs style={{ display: "flex", justifyContent: "center" }}>
              <Image src="/svg/app_screen.svg" height="650px" width="320px" />
            </Grid>

            <Grid item xs md="4" className={classes.tab}>
              <CustomTab />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
