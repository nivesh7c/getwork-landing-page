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
import AccordionCard from "../../Cards/Employer/CheckBox/AccordionCard";

const data = [
  {
    title: "Are you looking forOn campus placement, off campus placement",
    one: "More Diverse Placement",
    detailone:
      "Institutes that switch to GetWork, campus placement portal, connect with new employers that may have otherwise been unreachable or unknowable. Employers of all shapes and sizes are waiting to hire your trained students.",
    two: "Increase Your Student Visibility",
    detailtwo:
      "Employers find students on GetWork by certifications, organizations, unique courses of study and more. Your Institute is automatically suggested to employers that most fit your students’ needs for better campus placement.",
    three: "Grow Your Business",
    detailthree:
      "Not Just get your students hired. Now Get even more students to register for your courses with GetWork Smart Marketing to over 1 Lac+ College Students.",
    four: "Become Future Ready",
    detailfour:
      "At a time when students have to search for placement on job sites. Our institutes became future-ready with their own job portal app.",
  },
];

const da = [
  {
    title: "Are you looking forOn campus placement, off campus placement",
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
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: "0px",
  },
  imgmobile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
  },
  btnmobile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "0px",
    paddingBottom: "40px",
  },
  video: {
    height: "auto",
    marginBottom: "40px",
    backgroundColor: "#007bff",
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
              <Grid item xs={12} sm={12} md={7}>
                <div className={classes.img}>
                  <Image src="/png/laptop.png" height="320px" width="480px" />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={5} style={{ zIndex: "1" }}>
                {/* {data.map((val, ind) => (
                  <CheckBox
                    title={val.title}
                    one={val.one}
                    detailone={val.detailone}
                    two={val.two}
                    detailtwo={val.detailtwo}
                    three={val.three}
                    detailthree={val.detailthree}
                    four={val.four}
                    detailfour={val.detailfour}
                  />
                ))} */}

                <AccordionCard />
              </Grid>
            </Grid>
          </Container>
        </div>
      </Hidden>

      <Hidden smUp>
        <div className={classes.video}>
          <Container maxWidth="lg">
            <Grid container spacing={4} justify="space-evenly">
              <Grid item xs={12} sm={12} md={7}>
                <div className={classes.imgmobile}>
                  <Image src="/png/laptop.png" height="320px" width="480px" />
                </div>
              </Grid>
              {data.map((val, ind) => (
                <Grid item xs={12} sm={12} md={5}>
                  {/* {data.map((val, ind) => (
                    <CheckBox
                      title={val.title}
                      one={val.one}
                      detailone={val.detailone}
                      two={val.two}
                      detailtwo={val.detailtwo}
                      three={val.three}
                      detailthree={val.detailthree}
                      four={val.four}
                      detailfour={val.detailfour}
                    />
                  ))} */}

                  <AccordionCard />
                  <br />
                  <div className={classes.btnmobile}>
                    <Link href="https://www.getwork.org/colleges#schedule_form">
                      <CustomButton
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
              ))}
            </Grid>
          </Container>
        </div>
      </Hidden>
    </>
  );
}
