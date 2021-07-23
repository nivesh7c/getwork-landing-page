import { Paper, Typography, makeStyles, Hidden } from "@material-ui/core";
import React from "react";
import { CustomButton } from "../../InputComponent/Button/CustomButton";
import Link from "next/link";

const useStyles = makeStyles(theme => ({
  post: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    height: "300px",
    backgroundColor: "#e8f3ff",
    justifyContent: "center",
  },
}));

function PostJob() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.post}>
        <Hidden smDown>
          <Typography variant="h1">Ready to Hire with Less Effort?</Typography>
        </Hidden>
        <Hidden smUp>
          <Typography variant="h2">Ready to Hire with Less Effort?</Typography>
        </Hidden>
        <br />
        <Hidden smDown>
          <Typography variant="h2">
            Post Your <span style={{ color: "#007bff" }}>First Job</span> For{" "}
            <span style={{ color: "#007bff" }}>Free</span>
          </Typography>
        </Hidden>
        <Hidden smUp>
          <Typography variant="h4">
            Post Your <span style={{ color: "#007bff" }}>First Job</span> For{" "}
            <span style={{ color: "#007bff" }}>Free</span>
          </Typography>
        </Hidden>
        <br />
        <Link href="post-job">
          <CustomButton
            type="button"
            buttonStyle="btn--primary--solid"
            buttonSize="btn--medium"
          >
            <Typography variant="body2" color="inherit">
              Post A Jobs
            </Typography>
          </CustomButton>
        </Link>
      </div>
    </>
  );
}

export default PostJob;
