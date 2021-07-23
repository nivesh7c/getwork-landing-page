import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import { Container, Hidden, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#007bff",
    height: "auto",
  },
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
}));

export default function BlueBg() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.header}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} style={{ marginTop: "-81px" }}>
            <Image src="/png/aboutone.png" height="500px" width="400px" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={{ color: "white" }}>
            <Typography variant="h1">The GetWork Network</Typography>
            <br />
            <Typography variant="h2">18,000+</Typography>
            <br />
            <Typography variant="h4">
              Colleges, Universities & Institutes
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
