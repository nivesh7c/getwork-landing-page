import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, Container } from "@material-ui/core";
import User from "../../Cards/Public/User";
import Data from "../../Cards/Public/User/Data";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paper4: {
    backgroundColor: "#CCE4FF",
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    borderColor: "none",
    boxShadow: "none",
  },
  img: {
    borderRadius: "50%",
  },
  heading: {
    display: "flex",
    justifyContent: "center",
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

export default function UserSection() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" className={classes.header}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <div className={classes.heading}>
              <Typography variant="h1">Hear From Our Users</Typography>
            </div>
          </Grid>
          {Data.map((val, ind) => (
            <Grid item xs={12} sm={3} md={4} spacing={5}>
              <User
                key={ind}
                img={val.img}
                name={val.name}
                details={val.details}
                extra={val.extra}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
