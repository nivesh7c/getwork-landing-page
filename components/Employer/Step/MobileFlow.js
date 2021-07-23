import React from "react";
import { Grid, Paper, Container, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CustomButton } from "../../InputComponent/Button/CustomButton";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    borderRadius: "15px",
    width: "300px",
    textAlign: "center",
    height: "120px",
    zIndex: "1",
    border: "solid 1.5px #e2e6ea",
    marginBottom: "30px",
    boxShadow: "rgba(49, 69, 244, 0.2) 0px 8px 24px",
  },

  timeline: {
    transform: "rotate(90deg)",
    width: "100%",
    marginTop: "-400px",
    marginBottom: "-400px",
  },
  timelineContentContainer: {
    textAlign: "left",
    height: "100px",
  },
  timelineContent: {
    display: "inline-block",
    transform: "rotate(90deg)",
    textAlign: "center",
    minWidth: 50,
  },
  timelineIcon: {
    transform: "rotate(-90deg)",
  },
  step: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "20px",
  },
}));

export default function MobileFlow() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.heading}>
          <Typography variant="h3">
            How do we provide you the ideal Candidates?
          </Typography>
        </Grid>
      </Grid>

      <div className={classes.step}>
        <Paper className={classes.paper}>
          <Typography variant="h6"> STEP 1 </Typography>
          <br />
          <Typography variant="body2" color="primary">
            {" "}
            Post a Job
          </Typography>
        </Paper>
        <svg height="20" width="100" style={{ transform: "rotate(90deg)" }}>
          <g fill="none" stroke="#007BFF" stroke-width="4">
            <path stroke-dasharray="5,5" d="M5 20 l215 0" />
            <path stroke-dasharray="10,10" d="M5 40 l215 0" />
            <path stroke-dasharray="20,10,5,5,5,10" d="M5 60 l215 0" />
          </g>
        </svg>

        <Paper className={classes.paper}>
          <Typography variant="h6"> STEP 2 </Typography>
          <br />
          <Typography variant="body2" color="primary">
            Connect with College Students and Institutes
          </Typography>
        </Paper>
        <svg height="20" width="100" style={{ transform: "rotate(90deg)" }}>
          <g fill="none" stroke="#007BFF" stroke-width="4">
            <path stroke-dasharray="5,5" d="M5 20 l215 0" />
            <path stroke-dasharray="10,10" d="M5 40 l215 0" />
            <path stroke-dasharray="20,10,5,5,5,10" d="M5 60 l215 0" />
          </g>
        </svg>

        <Paper className={classes.paper}>
          <Typography variant="h6"> STEP 3 </Typography>
          <br />
          <Typography variant="body2" color="primary">
            Choose from 1 Lac+ Active Candidates
          </Typography>
        </Paper>
        <svg height="20" width="100" style={{ transform: "rotate(90deg)" }}>
          <g fill="none" stroke="#007BFF" stroke-width="4">
            <path stroke-dasharray="5,5" d="M5 20 l215 0" />
            <path stroke-dasharray="10,10" d="M5 40 l215 0" />
            <path stroke-dasharray="20,10,5,5,5,10" d="M5 60 l215 0" />
          </g>
        </svg>

        <Paper className={classes.paper}>
          <Typography variant="h6"> STEP 4 </Typography>
          <br />
          <Typography variant="body2" color="primary">
            Evaluate Skills
          </Typography>
        </Paper>
        <svg height="20" width="100" style={{ transform: "rotate(90deg)" }}>
          <g fill="none" stroke="#007BFF" stroke-width="4">
            <path stroke-dasharray="5,5" d="M5 20 l215 0" />
            <path stroke-dasharray="10,10" d="M5 40 l215 0" />
            <path stroke-dasharray="20,10,5,5,5,10" d="M5 60 l215 0" />
          </g>
        </svg>

        <Paper className={classes.paper}>
          <Typography variant="h6"> STEP 5 </Typography>
          <br />
          <Typography variant="body2" color="primary">
            Shortlist with AI
          </Typography>
        </Paper>
        <svg height="20" width="100" style={{ transform: "rotate(90deg)" }}>
          <g fill="none" stroke="#007BFF" stroke-width="4">
            <path stroke-dasharray="5,5" d="M5 20 l215 0" />
            <path stroke-dasharray="10,10" d="M5 40 l215 0" />
            <path stroke-dasharray="20,10,5,5,5,10" d="M5 60 l215 0" />
          </g>
        </svg>
        <Paper className={classes.paper}>
          <Typography variant="h6"> STEP 6 </Typography>
          <br />
          <Typography variant="body2" color="primary">
            Hire in 24 Hours
          </Typography>
        </Paper>
      </div>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <CustomButton
            onClick={() => {
              console.log("You Clicked on Me!");
            }}
            type="button"
            buttonStyle="btn--primary--solid"
            buttonSize="btn--medium"
          >
            <Typography variant="body2" color="inherit">
              Post a Job New
            </Typography>
          </CustomButton>
        </Grid>
      </Grid>
    </>
  );
}
