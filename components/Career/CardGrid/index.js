import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Hidden, Grid } from "@material-ui/core";
import CareerCard from "./CareerCard";

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: "#007bff",
    height: "auto",
    padding: "10px",
    paddingBottom: "40px",
  },
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },

  text: {
    color: "#fff",
    paddingBottom: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function CardGrid() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.card}>
        <Container maxWidth="lg" className={classes.header}>
          <div className={classes.text}>
            <Hidden smDown>
              <Typography variant="h1">Currently Available Roles</Typography>
            </Hidden>
            <Hidden smUp>
              <Typography variant="h2">Currently Available Roles</Typography>
            </Hidden>
          </div>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={4} className={classes.grid}>
              <CareerCard />
            </Grid>
            <Grid item xs={12} sm={4} className={classes.grid}>
              <CareerCard />
            </Grid>
            <Grid item xs={12} sm={4} className={classes.grid}>
              <CareerCard />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
