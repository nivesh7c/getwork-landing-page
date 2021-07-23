import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles(theme => ({
  paper4: {
    backgroundColor: "#CCE4FF",
    //maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    borderColor: "none",
    boxShadow: "none",
    width: "auto",
  },
  img: {
    borderRadius: "50%",
  },
}));

export default function User(props) {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper4}>
        <Grid container spacing={1}>
          <Grid item md={12} style={{ marginBottom: "25px" }}>
            <Typography>{props.details}</Typography>
          </Grid>
          <Grid item md={2}>
            <Image
              src={props.img}
              className={classes.img}
              height="50px"
              width="50px"
              alt="demo"
            />
          </Grid>
          <Grid item md={10}>
            <Typography variant="h6">{props.name}</Typography>
            <Typography variant="body2">{props.extra}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
