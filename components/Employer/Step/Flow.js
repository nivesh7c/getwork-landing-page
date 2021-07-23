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
    width: "200px",
    height: "120px",
    boxShadow: "rgba(49, 69, 244, 0.2) 0px 8px 24px",
    marginTop: "250px",
  },
  paper1: {
    padding: theme.spacing(3),
    borderRadius: "15px",
    width: "200px",
    height: "120px",
    boxShadow: "rgba(49, 69, 244, 0.2) 0px 8px 24px",
    marginTop: "200px",
  },
  paper2: {
    padding: theme.spacing(3),
    borderRadius: "15px",
    width: "200px",
    height: "120px",
    boxShadow: "rgba(49, 69, 244, 0.2) 0px 8px 24px",
    marginTop: "150px",
  },
  paper3: {
    padding: theme.spacing(3),
    borderRadius: "15px",
    width: "200px",
    height: "120px",
    boxShadow: "rgba(49, 69, 244, 0.2) 0px 8px 24px",
    marginTop: "100px",
  },
  paper4: {
    padding: theme.spacing(3),
    borderRadius: "15px",
    width: "200px",
    height: "120px",
    boxShadow: "rgba(49, 69, 244, 0.2) 0px 8px 24px",
    marginTop: "50px",
  },
  paper5: {
    padding: theme.spacing(3),
    borderRadius: "15px",
    width: "200px",
    height: "120px",
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
    flexDirection: "row",
    alignItems: "center",
    marginTop: "-90px",
  },
}));

export default function Flow() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Typography variant="h1">
            How do we provide you the ideal Candidates?
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.step}>
        <Paper className={classes.paper}>
          <Typography variant="body2"> STEP 1 </Typography>
          <Typography variant="caption" color="primary">
            {" "}
            Post a Job
          </Typography>
        </Paper>
        <svg height="20" width="100" style={{ marginTop: "240px" }}>
          <g fill="none" stroke="#007BFF" stroke-width="4">
            <path stroke-dasharray="5,5" d="M5 20 l215 0" />
            <path stroke-dasharray="10,10" d="M5 40 l215 0" />
            <path stroke-dasharray="20,10,5,5,5,10" d="M5 60 l215 0" />
          </g>
        </svg>

        <Paper className={classes.paper1}>
          <Typography variant="body2"> STEP 2 </Typography>
          <Typography variant="caption" color="primary">
            Connect with College Students and Institutes
          </Typography>
        </Paper>
        <svg height="20" width="100" style={{ marginTop: "180px" }}>
          <g fill="none" stroke="#007BFF" stroke-width="4">
            <path stroke-dasharray="5,5" d="M5 20 l215 0" />
            <path stroke-dasharray="10,10" d="M5 40 l215 0" />
            <path stroke-dasharray="20,10,5,5,5,10" d="M5 60 l215 0" />
          </g>
        </svg>
        <Paper className={classes.paper2}>
          <Typography variant="body2"> STEP 3 </Typography>
          <Typography variant="caption" color="primary">
            Choose from 1 Lac+ Active Candidates
          </Typography>
        </Paper>
        <svg height="20" width="100" style={{ marginTop: "120px" }}>
          <g fill="none" stroke="#007BFF" stroke-width="4">
            <path stroke-dasharray="5,5" d="M5 20 l215 0" />
            <path stroke-dasharray="10,10" d="M5 40 l215 0" />
            <path stroke-dasharray="20,10,5,5,5,10" d="M5 60 l215 0" />
          </g>
        </svg>

        <Paper className={classes.paper3}>
          <Typography variant="body2"> STEP 4 </Typography>
          <Typography variant="caption" color="primary">
            Evaluate Skills
          </Typography>
        </Paper>
        <svg height="20" width="100" style={{ marginTop: "80px" }}>
          <g fill="none" stroke="#007BFF" stroke-width="4">
            <path stroke-dasharray="5,5" d="M5 20 l215 0" />
            <path stroke-dasharray="10,10" d="M5 40 l215 0" />
            <path stroke-dasharray="20,10,5,5,5,10" d="M5 60 l215 0" />
          </g>
        </svg>

        <Paper className={classes.paper4}>
          <Typography variant="body2"> STEP 5 </Typography>
          <Typography variant="caption" color="primary">
            Shortlist with AI
          </Typography>
        </Paper>
        <svg height="20" width="100" style={{ marginTop: "40px" }}>
          <g fill="none" stroke="#007BFF" stroke-width="4">
            <path stroke-dasharray="5,5" d="M5 20 l215 0" />
            <path stroke-dasharray="10,10" d="M5 40 l215 0" />
            <path stroke-dasharray="20,10,5,5,5,10" d="M5 60 l215 0" />
          </g>
        </svg>
        <Paper className={classes.paper5}>
          <Typography variant="body2"> STEP 6 </Typography>
          <Typography variant="caption" color="primary">
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
