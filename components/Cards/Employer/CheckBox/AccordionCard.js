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
    padding: theme.spacing(2),
    // textAlign: 'center',
    color: theme.palette.common.black,
    // height: "80%",
    width: "100%",
    borderRadius: "15px",
    marginTop: "80px",

    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    backgroundColor: "#ffffff",
  },
  detail: {
    marginBottom: "20px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
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

export default function AccordionCard() {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper}>
        <Typography variant="h2" color="inherit"></Typography>
        <Accordion className={classes.dropdownitem}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {" "}
            <DoneIcon color="primary" style={{ marginRight: "12px" }} />
            <Typography variant="h6">More Diverse Placement</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ paddingLeft: "50px" }}>
            <Typography variant="body2">
              Institutes that switch to GetWork, campus placement portal,
              connect with new employers that may have otherwise been
              unreachable or unknowable. Employers of all shapes and sizes are
              waiting to hire your trained students.
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
            <Typography variant="h6">
              Increase Your Student Visibility
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ paddingLeft: "50px" }}>
            <Typography variant="body2">
              Employers find students on GetWork by certifications,
              organizations, unique courses of study and more. Your Institute is
              automatically suggested to employers that most fit your students’
              needs for better campus placement.
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
            <Typography variant="h6">Grow Your Business</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ paddingLeft: "50px" }}>
            <Typography variant="body2">
              Not Just get your students hired. Now Get even more students to
              register for your courses with GetWork Smart Marketing to over 1
              Lac+ College Students.
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
            <Typography variant="h6">Become Future Ready</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ paddingLeft: "50px" }}>
            <Typography variant="body2">
              At a time when students have to search for placement on job sites.
              Our institutes became future-ready with their own job portal app.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <div
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            marginLeft: "50px",
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
