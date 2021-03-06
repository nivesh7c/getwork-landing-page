import React from "react";
import { Parallax } from "react-parallax";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Category from "../Category";

const useStyles = makeStyles(theme => ({
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
    marginTop: "20px",
  },
}));

function Categoriesbg({ jobSegment }) {
  const classes = useStyles();
  return (
    <>
      <Parallax bgImage="/svg/companybg.svg" strength={-200}>
        <div style={{ marginTop: "80px", marginBottom: "50px" }}>
          <Container maxWidth="lg" className={classes.header}>
            <Category jobSegment={jobSegment} />
          </Container>
        </div>
      </Parallax>
    </>
  );
}

export default Categoriesbg;
