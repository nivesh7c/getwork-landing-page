import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.primary.main,
    borderRadius: "15px",
    backgroundColor: theme.palette.common.white,
    border: "none",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
  img: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    // '&:hover': {
    //       backgroundColor: theme.palette.primary.main,
    //       color: theme.palette.common.white
    //    },
  },
  // los:{
  //   '&:hover': {
  //     backgroundColor: theme.palette.primary.main,
  //     color: theme.palette.common.white
  //  },
}));

export default function LocationItem(props) {
  const classes = useStyles();

  return (
    <>
      <Link href={`/public/jobs/?city_id=${props.id}&`}>
        <Paper className={classes.paper} style={{ cursor: "pointer" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} className={classes.img}>
              <Image src={props.img} className={classes.los} height="60px" width="60px" alt="new" />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">{props.title}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Link>
    </>
  );
}
