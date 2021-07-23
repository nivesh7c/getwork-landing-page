import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Hidden } from "@material-ui/core";
import RightImage from "../CompanyDetail/RightImage";
import Data from "../CompanyDetail/Data";
import Funding from "../CompanyDetail/Funding";
import LeftImage from "../CompanyDetail/LeftImage";
import Upgrad from "../CompanyDetail/Upgrad";
import GetWork from "../CompanyDetail/Rahul";

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
  title: {
    display: "flex",
    marginBottom: "50px",
    paddingTop: "40px",
    justifyContent: "center",
    flexDirection: "row",
  },
}));

export default function Achievements() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ backgroundColor: "#e5f1ff" }}>
      <Container maxWidth="lg" className={classes.header}>
        <div className={classes.title}>
          <Hidden smDown>
            <Typography variant="h1">Our Achievements</Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h2">Our Achievements</Typography>
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
          {Funding.map((val, ind) => (
            <LeftImage
              img={val.img}
              heading={val.heading}
              details={val.details}
            />
          ))}
          {Upgrad.map((val, ind) => (
            <RightImage
              img={val.img}
              heading={val.heading}
              details={val.details}
            />
          ))}
          {GetWork.map((val, ind) => (
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
