import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Hidden, Typography, Grid } from "@material-ui/core";
import Data from "./Data";
import TeamMember from "./TeamMember";

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
  title: {
    paddingBottom: "30px",
    paddingTop: "30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "60px",
  },
}));

export default function Team() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.header}>
        <div className={classes.title}>
          <Hidden smDown>
            <Typography variant="h1">GetWork Team</Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h2">GetWork Team</Typography>
          </Hidden>
        </div>
        <Grid container spacing={3}>
          {Data.map((val, ind) => (
            <Grid item xs={12} sm={6} md={3}>
              <TeamMember img={val.img} name={val.name} content={val.content} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
