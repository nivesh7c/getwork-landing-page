import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Hidden, Grid } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import { CustomButton } from "../../../InputComponent/Button/CustomButton";
const tiers = [
  {
    title: "Free",

    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
  },
];

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(5),

    color: theme.palette.common.black,
    height: "80%",
    width: "100%",
    //maxWidth:"80%",
    // minWidth:"100%",
    borderRadius: "15px",
    marginTop: "50px",
    //backgroundColor:theme.palette.common.white,
    //border: "solid 1px #007bff",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    backgroundColor: "#ffffff",
  },
  detail: {
    marginBottom: "20px",
  },
}));

export default function CheckBox(props) {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper}>
        <div className={classes.detail}>
          <Typography variant="h2" color="inherit">
            {props.title}
          </Typography>
        </div>

        <Grid container spacing={3}>
          <Grid item xs={2} sm={3} md={1}>
            <DoneIcon color="primary" />
          </Grid>
          {/* {tier.description.map(line => (
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            style={{ paddingLeft: "10px", display: "flex" }}
          >
            {/* <DoneIcon color="primary" style={{ marginRight: "12px" }} /> */}
          <Grid item xs={10} sm={3} md={11} style={{ paddingLeft: "10px" }}>
            <Typography variant="h6">{props.one}</Typography>
            <Typography variant="body2">{props.detailone}</Typography>
          </Grid>
          {/* ))} */}
          <Grid item xs={2} sm={3} md={1}>
            <DoneIcon color="primary" />
          </Grid>
          <Grid item xs={10} sm={3} md={11} style={{ paddingLeft: "10px" }}>
            <Typography variant="h6">{props.two}</Typography>
            <Typography variant="body2">{props.detailtwo}</Typography>
          </Grid>
          <Grid item xs={2} sm={3} md={1}>
            <DoneIcon color="primary" />
          </Grid>
          <Grid item xs={10} sm={3} md={11} style={{ paddingLeft: "10px" }}>
            <Typography variant="h6">{props.three}</Typography>
            <Typography variant="body2">{props.detailthree}</Typography>
          </Grid>
          <Grid item xs={2} sm={3} md={1}>
            <DoneIcon color="primary" />
          </Grid>
          <Grid item xs={10} sm={3} md={11} style={{ paddingLeft: "10px" }}>
            <Typography variant="h6">{props.four}</Typography>
            <Typography variant="body2">{props.detailfour}</Typography>
            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <Hidden smDown>
                <CustomButton
                  onClick={() => {
                    console.log("You Clicked on Me!");
                  }}
                  type="button"
                  buttonStyle="btn--primary--solid"
                  buttonSize="btn--medium"
                >
                  <Typography variant="body2" color="inherit">
                    Get Started Now
                  </Typography>
                </CustomButton>
              </Hidden>
            </div>
          </Grid>
        </Grid>
      </Paper>
      {/* ))} */}
    </>
  );
}
