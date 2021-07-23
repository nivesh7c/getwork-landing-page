import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import { CustomButton } from "../../InputComponent/Button/CustomButton";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import CustomChip from "../../Cards/CustomChip";
const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    width: "auto",
    borderRadius: "20px",
    backgroundColor: "white",
    color: theme.palette.text.secondary,
  },
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  grid: {
    display: "flex",
    padding: "12px",
    flexDirection: "row",
    justifyContent: "center",
  },
  location: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function CareerCard() {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper}>
        <Typography variant="h4" style={{ color: "black" }}>
          Front-end Developer
        </Typography>
        <br />
        <div className={classes.location}>
          <div style={{ display: "flex" }}>
            <WorkOutlineIcon />
            <Typography variant="subtitle2">Experience: 0 -2 Years</Typography>
          </div>
          <CustomChip item="FullTime" />
        </div>

        <div style={{ display: "flex" }}>
          <LocationOnOutlinedIcon />
          <Typography variant="subtitle2">Location: Gurgaon</Typography>
        </div>
        <br />
        <CustomButton
          onClick={() => {
            console.log("You Clicked on Me!");
          }}
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--medium"
        >
          <Typography variant="body2" color="inherit">
            Apply Now
          </Typography>
        </CustomButton>
      </Paper>
    </>
  );
}
