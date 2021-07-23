import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    //maxWidth: 500,
    color: "#ffffff",

    height: "150px",
    // width:"150px",
    display: "flex",

    flexDirection: "column",
    alignItems: "center",
    // width:"60%",
    borderRadius: "12px",
    boxShadow: "none",
    backgroundColor: theme.palette.primary.main,
    border: "none",
  },
  image: {
    width: "auto",
    height: "auto",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function Choose(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h1">{props.title}</Typography>

        <Typography variant="subtitle2" style={{ padding: "10px" }}>
          {props.content}
        </Typography>
      </Paper>
    </div>
  );
}
