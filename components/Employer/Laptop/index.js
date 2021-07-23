import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Typography, Paper, Hidden } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import Image from "next/image";
import { CustomButton } from "../../InputComponent/Button/CustomButton";
import CheckBox from "../../Cards/Employer/CheckBox";

const data = [
  {
    title: "Are you looking for-",
    one: "Online Employment Registration",
    two: " Post vacancies",
    three: "Best Job Portal",
    four: "Hiring candidates",
  },
];

const useStyles = makeStyles(theme => ({
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: "0px",
    marginBottom: "40px",
  },
}));

export default function Laptop() {
  const classes = useStyles();

  return (
    <>
      <Hidden smDown>
        <div style={{ height: "375px", backgroundColor: "#007bff" }}>
          <Container maxWidth="lg" className={classes.header}>
            <Grid container spacing={4} justify="space-evenly">
              {data.map((val, ind) => (
                <Grid item xs={12} sm={12} md={5} style={{ zIndex: "1" }}>
                  <CheckBox
                    title={val.title}
                    one={val.one}
                    two={val.two}
                    three={val.three}
                    four={val.four}
                  />
                </Grid>
              ))}
              <Grid item xs={12} sm={12} md={7}>
                <div className={classes.img}>
                  <Image src="/png/laptop.png" height="320px" width="480px" />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Hidden>

      <Hidden smUp>
        <div style={{ height: "auto", backgroundColor: "#007bff" }}>
          <Container maxWidth="lg">
            <Grid container spacing={4} justify="space-evenly">
              {data.map((val, ind) => (
                <Grid item xs={12} sm={12} md={5} style={{ zIndex: "1" }}>
                  <CheckBox
                    title={val.title}
                    one={val.one}
                    two={val.two}
                    three={val.three}
                    four={val.four}
                  />
                </Grid>
              ))}
              <Grid item xs={12} sm={12} md={7}>
                <div className={classes.imgmobile}>
                  <Image src="/png/laptop.png" height="320px" width="480px" />

                  <br />
                  <CustomButton
                    onClick={() => {
                      console.log("You Clicked on Me!");
                    }}
                    type="button"
                    buttonStyle="btn--white--solid"
                    buttonSize="btn--medium"
                  >
                    <Typography variant="body2" color="primary">
                      Get Started Now
                    </Typography>
                  </CustomButton>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Hidden>
    </>
  );
}
