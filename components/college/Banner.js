import React from "react";
import { Parallax } from "react-parallax";
import { Typography, Hidden } from "@material-ui/core";
import Typewriter from "typewriter-effect";

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
        <Parallax bgImage="/png/collegebanner.png" strength={1}>
          <div style={{ height: 450 }}>
            <Hidden smDown>
              <div style={insideStyles}>
                <Typography variant="h1">
                  Information SaaS Tool for
                  <Typewriter
                    options={{
                      strings: [
                        "Placements",
                        "Data Powered",
                        "Discoverability",
                        "Fully Automated",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Typography>
              </div>
            </Hidden>
            <Hidden smUp>
              <div style={insideStyles}>
                <Typography variant="h2">
                  InformationSaaS Tool for
                  <Typewriter
                    options={{
                      strings: [
                        "Placements",
                        "Data Powered",
                        "Discoverability",
                        "Fully Automated",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Typography>
              </div>
            </Hidden>
          </div>
        </Parallax>
      </div>
    </>
  );
}

export default Banner;
