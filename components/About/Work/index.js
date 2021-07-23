import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Hidden } from "@material-ui/core";
import RightImage from "../CompanyDetail/RightImage";
import Data from "./Data";
import LeftImage from "../CompanyDetail/LeftImage";
import Founder from "./Founder";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    display: "flex",
    marginBottom: "50px",
    paddingTop: "40px",
    justifyContent: "center",
    flexDirection: "row",
  },

  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingBottom: "40px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
}));

export default function Work() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ backgroundColor: "#e5f1ff" }}>
      <Container maxWidth="lg" className={classes.header}>
        <div className={classes.title}>
          <Hidden smDown>
            <Typography variant="h1">Working at GetWork</Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h2">Working at GetWork</Typography>
          </Hidden>
        </div>
        <Grid container spacing={3}>
          {Data.map((val, ind) => (
            <RightImage
              img={val.img}
              heading={val.heading}
              details={val.details}
            />
          ))}
          {Founder.map((val, ind) => (
            <LeftImage
              img={val.img}
              heading={val.heading}
              details={val.details}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
}
