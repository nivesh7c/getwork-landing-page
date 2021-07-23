import React from "react";
import { Parallax } from "react-parallax";
import { Container } from "@material-ui/core";
import FormItem from "./FormItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
}));

export default function FormBg() {
  const classes = useStyles();
  return (
    <>
      <Parallax bgImage="svg/companybg.svg" strength={-200}>
        <div style={{ marginTop: "30px" }}>
          <Container maxWidth="lg" className={classes.header}>
            <FormItem />
          </Container>
        </div>
      </Parallax>
    </>
  );
}
