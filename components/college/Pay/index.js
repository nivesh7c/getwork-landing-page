import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Image from "next/image";
import { CustomButton } from "../../InputComponent/Button/CustomButton";
import CheckBox from "../../Cards/Employer/CheckBox";
import { Hidden, Typography } from "@material-ui/core";
import Link from "next/link";
import AccordionPay from "../../Cards/Employer/CheckBox/AccordionPay";

const useStyles = makeStyles(theme => ({
  img: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginTop: "-100px",
  },
  imgmobile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "40px",
  },
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    marginTop: "20px",
  },
}));

export default function Pay() {
  const classes = useStyles();

  return (
    <>
      <Hidden smDown>
        <div style={{ height: "375px", backgroundColor: "#007bff" }}>
          <Container maxWidth="lg" className={classes.header}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={5} style={{ zIndex: "1" }}>
                <AccordionPay />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <div className={classes.img}>
                  <Image
                    src="/svg/creditcard.svg"
                    height="520px"
                    width="420px"
                  />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Hidden>

      <Hidden smUp>
        <div style={{ height: "auto", backgroundColor: "#007bff" }}>
          <Container maxWidth="lg" component="footer">
            <Grid container spacing={4} justify="space-evenly">
              <Grid item xs={12} sm={6} md={5} style={{ zIndex: "1" }}>
                <AccordionPay />
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <div className={classes.imgmobile}>
                  <Image
                    src="/svg/creditcard.svg"
                    height="520px"
                    width="420px"
                  />
                  <br />
                  <Link href="https://www.getwork.org/colleges#schedule_form">
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
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Hidden>
    </>
  );
}
