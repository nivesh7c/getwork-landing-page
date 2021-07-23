import React from "react";
import { Parallax } from "react-parallax";
import { Typography, Hidden, makeStyles } from "@material-ui/core";
import Typewriter from "typewriter-effect";
const useStyles = makeStyles(theme => ({
  insideStyles: {
    background: "rgba(255, 255, 255, 0.5)",
    backdropFilter: "blur(7px)",
    borderRadius: "20px",
    color: "#333",
    top: "85%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    padding: 50,
    position: "absolute",
    maxWidth: "50%",
  },
  insideStylesmobile: {
    background: "rgba(255, 255, 255, 0.5)",
    backdropFilter: "blur(7px)",
    borderRadius: "20px",
    color: "#333",
    top: "80%",
    left: "50%",
    //marginLeft: "120px",
    transform: "translate(-50%,-50%)",
    padding: 20,
    width: "300px",
    position: "absolute",
    //maxWidth: "80%",
  },
}));

function Banner() {
  const classes = useStyles();
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Parallax bgImage="/img/aboutbanner.jpg" strength={100}>
          <div style={{ height: 700 }}>
            <Hidden smDown>
              <div className={classes.insideStyles}>
                <Typography variant="h4">
                  <span style={{ fontWeight: "bold", fontSize: "27px" }}>
                    GetWork
                  </span>{" "}
                  is not Just a platform. It is an ecosystem that encircles
                  career paths for millions of students.
                </Typography>
              </div>
            </Hidden>
            <Hidden smUp>
              <div className={classes.insideStylesmobile}>
                <Typography variant="body2">
                  <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                    GetWork
                  </span>{" "}
                  is not Just a platform. It is an ecosystem that encircles
                  career paths for millions of students.
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
