import React from "react";
import { Parallax } from "react-parallax";
import { Typography, Hidden } from "@material-ui/core";
import { CustomButton } from "../InputComponent/Button/CustomButton";
import Link from "next/link";

const insideStyles = {
  color: "white",
  padding: 10,
  position: "relative",
  paddingtop: "20px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};
function Banner() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Parallax bgImage="/png/employerbanner.png" strength={10}>
          <div style={{ height: 450 }}>
            <Hidden smDown>
              <div style={insideStyles}>
                <Typography variant="h1">
                  Get Matched to the <br />
                  <span style={{ color: "#007bff" }}>Right Candidate </span> on
                  Every Hire <br />
                  Post Your <span style={{ color: "#007bff" }}>
                    First Job{" "}
                  </span>{" "}
                  For <span style={{ color: "#007bff" }}>Free </span>
                </Typography>
                <div style={{ marginTop: "50px" }}>
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
              </div>
            </Hidden>
            <Hidden smUp>
              <div style={insideStyles}>
                <Typography variant="h2">
                  Get Matched to the <br />
                  <span style={{ color: "#007bff" }}>Right Candidate </span> on
                  Every Hire <br />
                  Post Your <span style={{ color: "#007bff" }}>
                    First Job{" "}
                  </span>{" "}
                  For <span style={{ color: "#007bff" }}>Free </span>
                </Typography>
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
            </Hidden>
          </div>
        </Parallax>
      </div>
    </>
  );
}

export default Banner;
