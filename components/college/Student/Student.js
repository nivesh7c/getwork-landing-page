import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Typography, Paper, Hidden } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import Image from "next/image";
import { CustomButton } from "../../InputComponent/Button/CustomButton";
import CheckBox from "../../Cards/Employer/CheckBox";
import Link from "next/link";

const data = [
  {
    title: "Are You Looking For- ",
    one: "On Campus Placement",
    two: "Off Campus Placement",
    three: "Training",
    four: "Career Advice",
  },
];

const useStyles = makeStyles(theme => ({
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    marginTop: "20px",
  },
  img: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginTop: "0px",
  },
  imgmobile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  btnmobile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "0px",
    // marginBottom:"40px"
  },
}));

export default function Student() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={4} justify="space-evenly">
        <Grid item xs={12} sm={12} md={5}>
          {data.map((val, ind) => (
            <CheckBox
              title={val.title}
              one={val.one}
              two={val.two}
              three={val.three}
              four={val.four}
            />
          ))}
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <div className={classes.imgmobile}>
            <Image
              src="/svg/Joboffers-rafiki.svg"
              height="500px"
              width="500px"
            />
          </div>
          <br />
          <div className={classes.btnmobile}>
            <Hidden smUp>
              <Link href="https://www.getwork.org/colleges#schedule_form">
                <CustomButton
                  type="button"
                  buttonStyle="btn--primary--solid"
                  buttonSize="btn--medium"
                >
                  <Typography variant="body2" color="inherit">
                    Get Started Now
                  </Typography>
                </CustomButton>
              </Link>
            </Hidden>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
