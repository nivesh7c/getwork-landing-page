import React from "react";
import { Parallax } from "react-parallax";
import { Container } from "@material-ui/core";
import LocationSection from "../LocationSection";
import { makeStyles } from "@material-ui/core/styles";

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

function Locationbg({ locations }) {
  const classes = useStyles();
  return (
    <>
      <Parallax bgImage="/png/bg-panal.png" strength={-200}>
        <div style={{ marginTop: "30px", marginBottom: "50px" }}>
          <Container maxWidth="lg" className={classes.header}>
            <LocationSection locations={locations} />
          </Container>
        </div>
      </Parallax>
    </>
  );
}

export default Locationbg;
