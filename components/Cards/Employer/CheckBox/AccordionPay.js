import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Paper,
  Hidden,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import { CustomButton } from "../../../InputComponent/Button/CustomButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.common.black,
    height: "95%",
    width: "100%",
    borderRadius: "15px",
    marginTop: "0px",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    backgroundColor: "#ffffff",
  },
  detail: {
    marginBottom: "20px",
  },

  dropdownitem: {
    boxShadow: "none",
    border: "none",
    top: "none",
    "&.MuiAccordion-root:before": {
      backgroundColor: "white",
    },
  },
}));

export default function AccordionPay() {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper}>
        <Accordion className={classes.dropdownitem}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {" "}
            <DoneIcon color="primary" style={{ marginRight: "12px" }} />
            <Typography variant="h6">More Placements</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ paddingLeft: "50px" }}>
            <Typography variant="body2">
              See up to 5x increase in the number of reputable job
              opportunities.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.dropdownitem}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {" "}
            <DoneIcon color="primary" style={{ marginRight: "12px" }} />
            <Typography variant="h6">No Manpower Needed</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ paddingLeft: "50px" }}>
            <Typography variant="body2">
              Single Handedly manage your on campus placement
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.dropdownitem}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {" "}
            <DoneIcon color="primary" style={{ marginRight: "12px" }} />
            <Typography variant="h6">Events and Fair</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ paddingLeft: "50px" }}>
            <Typography variant="body2">
              Get invited to virtual and walk-in events and job fairs.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.dropdownitem}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {" "}
            <DoneIcon color="primary" style={{ marginRight: "12px" }} />
            <Typography variant="h6">Marketing Tools</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ paddingLeft: "50px" }}>
            <Typography variant="body2">
              Take the guesswork out of marketing with Smart Analytics.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.dropdownitem}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {" "}
            <DoneIcon color="primary" style={{ marginRight: "12px" }} />
            <Typography variant="h6">Stat Dashboard</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ paddingLeft: "50px" }}>
            <Typography variant="body2">
              Learn Gaps in courses and help students prepare better for Jobs.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.dropdownitem}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {" "}
            <DoneIcon color="primary" style={{ marginRight: "12px" }} />
            <Typography variant="h6">Student Satisfaction</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ paddingLeft: "50px" }}>
            <Typography variant="body2">
              Increase by up to 78% by placing them at the end of each course.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <div
          style={{
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
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
      </Paper>
    </>
  );
}
