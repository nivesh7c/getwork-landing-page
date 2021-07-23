import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { StepButton } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return [
    "OCT 2018",
    "MAR 2018",
    "AUG 2019",
    "OCT 2019",
    "MAY 2020",
    "APR 2020",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `GetWork got incorporated in October 2018. We first launched as a platform that catered to College Freelancers who were looking to take up projects to earn small incomes while studying.`;
    case 1:
      return "We were chosen out of 100,000 startups globally into Startup Turkey's Top 100 Startup. The team traveled to Istanbul, Turkey where GetWork was well received by the global startup network.";
    case 2:
      return `After recognizing the skill gap problem, the GetWork business model was expanded to cater to developing meaningful careers for college students via digitizing Campus Placements. This pivot allowed GetWork to connect colleges and employers and jobseekers on one platform for the first time in India.`;
    case 3:
      return `GetWork launched two new modules on to the platform: GetWork Recruit & GetWork Campus. Each enabled smooth processes for employers and colleges respectively. It was also in this month that we signed our first B2B customer.`;
    case 4:
      return `In May 2020 we were incubated into India Accelerator's Startup Program in their Summer Cohort. This program gave us additional perks which came in the form of a cool new office space at India Accelerator's Co-Working office in Gurgaon.`;
    case 5:
      return `Shortly after joining the Startup Program, we were able to secure our very first pre-seed funding commitment from Rudraksh Ventures. This opportunity enabled GetWork to optimize our tech products and deliver efficient hiring process to our growing clientele.`;
    default:
      return "Unknown step";
  }
}

export default function CustomStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const totalSteps = () => {
    return getSteps().length;
  };

  const isStepOptional = step => {
    return step === 1;
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const skippedSteps = () => {
    return skipped.size;
  };

  const completedSteps = () => {
    return completed.size;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps() - skippedSteps();
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed
          // find the first step that has been completed
          steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStep = step => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = new Set(completed);
    newCompleted.add(activeStep);
    setCompleted(newCompleted);

    /**
     * Sigh... it would be much nicer to replace the following if conditional with
     * `if (!this.allStepsComplete())` however state is not set when we do this,
     * thus we have to resort to not being very DRY.
     */
    if (completed.size !== totalSteps() - skippedSteps()) {
      handleNext();
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted(new Set());
    setSkipped(new Set());
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  function isStepComplete(step) {
    return completed.has(step);
  }

  return (
    <div className={classes.root}>
      <Stepper
        nonLinear
        activeStep={activeStep}
        orientation="vertical"
        style={{
          borderRadius: "20px",
          boxShadow: "0 0 6px 0 rgba(0 0 0 0.16)",
        }}
      >
        {steps.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};
          if (isStepOptional(index)) {
            buttonProps.optional = <Typography variant="h6"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepButton
                onClick={handleStep(index)}
                completed={isStepComplete(index)}
                {...buttonProps}
              >
                {label}
              </StepButton>
              <StepContent>
                <Typography variant="body2">{getStepContent(index)}</Typography>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
}
