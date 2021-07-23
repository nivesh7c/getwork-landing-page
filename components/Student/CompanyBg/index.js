import React from "react";
import Carousel, { consts } from "react-elastic-carousel";
import Item from "./Item";
import { makeStyles } from "@material-ui/core/styles";
import Company from "../../Cards/Public/Company";
import { Typography, Grid, Hidden } from "@material-ui/core";
import { CustomButton } from "../../InputComponent/Button/CustomButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonmobile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sliderbutton: {
    border: "none",
    backgroundColor: "transparent",
    padding: "0",
  },
}));

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];

function CompanySlider() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={6}>
          <Hidden smDown>
            <Typography variant="h1">Top Vacancies</Typography>
          </Hidden>
          <Hidden smUp>
            <div className={classes.buttonmobile}>
              <Typography variant="h2">Top Vacancies</Typography>
            </div>
          </Hidden>
        </Grid>

        <Grid item xs={12} sm={6} md={6} className={classes.button}>
          <Hidden xsDown>
            <Link href="/public/jobs">
              <CustomButton
                onClick={() => {
                  console.log("You Clicked on Me!");
                }}
                type="button"
                buttonStyle="btn--primary--outline"
                buttonSize="btn--medium"
              >
                <Typography variant="body2" color="primary">
                  View All
                </Typography>
              </CustomButton>
            </Link>
          </Hidden>
        </Grid>
      </Grid>
      <br />
      {/* <div className="App"> */}
      <Carousel
        breakPoints={breakPoints}
        renderArrow={({ type, onClick }) => {
          const pointer = type === consts.PREV ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />;
          return (
            <button className={classes.sliderbutton} onClick={onClick}>
              {pointer}
            </button>
          );
        }}
        itemPadding={[10, 10]}
      >
        <Item>
          <Company />
        </Item>
        <Item>
          <Company />
        </Item>
        <Item>
          <Company />
        </Item>
        <Item>
          <Company />
        </Item>
      </Carousel>
      <Grid container spacing={3}>
        <Hidden smUp>
          <Grid item xs={12} className={classes.buttonmobile}>
            <CustomButton
              onClick={() => {
                console.log("You Clicked on Me!");
              }}
              type="button"
              buttonStyle="btn--primary--outline"
              buttonSize="btn--medium"
            >
              <Typography variant="body2" color="primary">
                View All
              </Typography>
            </CustomButton>
          </Grid>
        </Hidden>
      </Grid>
    </>
  );
}

export default CompanySlider;
