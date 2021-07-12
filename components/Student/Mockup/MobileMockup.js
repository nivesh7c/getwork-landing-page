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
    position: "relative",
    backgroundColor: theme.palette.primary.main,
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
}));

export default function MobileMockup() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="lg" component="main" className={classes.header}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} className={classes.tab}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle2" style={{ color: "white" }}>
                  Everything on mobile
                </Typography>
                <br />
                <Typography variant="h2" style={{ color: "white" }}>
                  Use your android or ios device to manage everything.
                </Typography>
                <br />
                <Typography variant="body1" style={{ color: "white" }}>
                  Silent sir say desire fat him letter. Whatever settling
                  goodness too and honoured she building answered her.Strongly
                  thoughts remember mr to do consider.
                </Typography>
                <br />
                <div>
                  <Link href="https://play.google.com/store/apps/details?id=com.getwork_app">
                    <a target="_blank">
                      <Button
                        variant="contained"
                        color="default"
                        style={{
                          color: "white",
                          padding: "0",
                          backgroundColor: "black",
                          borderRadius: "50px",
                        }}
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
