import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.common.black,
    borderRadius: "15px",
    backgroundColor: theme.palette.common.white,
    border: "solid 1px #007bff",
    boxShadow: "none",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.02)",
      transition: "transform 0.2s",
    },
  },
  paperBlue: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.common.black,
    borderRadius: "15px",
    backgroundColor: "#007bff",
    border: "solid 1px #007bff",
    boxShadow: "none",
  },
  img: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export default function BlogCards(props) {
  const classes = useStyles();
  return (
    <>
      <Paper className={props.selected ? classes.paperBlue : classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={4} className={classes.img}>
            <Image src={props.img} height="70px" width="70px" alt="icons" />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h5" style={props.selected ? { color: "white" } : { color: "#007bff" }}>
              Blog For
            </Typography>
            <br />
            <Typography variant="body2" style={props.selected ? { color: "white" } : { color: "#007bff" }}>
              {props.title}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
