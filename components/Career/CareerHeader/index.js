import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Grid, Hidden } from "@material-ui/core";
import CareerIconCard from "./CareerIconCard";
import Data from "./Data";

const useStyles = makeStyles(theme => ({
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
    marginTop: "100px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function CareerHeader() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" className={classes.header}>
        <Hidden smDown>
          <Typography variant="h1">Careers at Getwork</Typography>
        </Hidden>
        <Hidden smUp>
          <Typography variant="h2">Careers at Getwork</Typography>
        </Hidden>
        <Typography variant="body2">
          We Ignite the opportunity by setting the world in motion
        </Typography>
        <Grid container spacing={3}>
          {Data.map((val, ind) => (
            <Grid item xs={6} sm={3}>
              <CareerIconCard img={val.img} title={val.title} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
