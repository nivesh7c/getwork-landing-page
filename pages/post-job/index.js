import React from "react";
import Image from "next/image";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  postjob: {
    marginTop: "50px",
    overflowY: "scroll",
  },
  img: {
    display: "flex",
    justifyContent: "center",
  },
  iframe: {
    height: "1200px",
    width: "99%",
    border: "none",
  },
});
function postjob() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.postjob}>
        <div className={classes.img}>
          <Image
            src="/png/career-logo.png"
            alt="post-job-banner"
            width="1000px"
            height="300px"
          />
        </div>
        <iframe
          frameborder="0"
          className={classes.iframe}
          src="https://forms.zohopublic.in/getwork/form/JobApplicationForm/formperma/sBQFOFOxFyD6_qUa4wpjpke6lon3-fVHIhTwqe0fOMc"
        ></iframe>
      </div>
    </>
  );
}

export default postjob;
