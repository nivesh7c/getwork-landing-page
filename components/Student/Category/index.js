import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, Container, Hidden } from "@material-ui/core";
import CategoryItem from "../../Cards/Public/CategoryItem";
import CategoryData from "./CategoryData";
import { CustomButton } from "../../InputComponent/Button/CustomButton";
import Engineering from "../../../public/svg/application.svg";
import Link from "next/link";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "100px",
  },
  heading: {
    display: "flex",
  },
  button: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  header: {
    //paddingLeft:"10px",
    // paddingRight:"10px",
    marginTop: "20px",
    marginBottom: "30px",
  },
  buttonmobile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Category({ jobSegment }) {
  const classes = useStyles();

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={6}>
        <Hidden mdDown>
          <Typography variant="h1">Popular Categories</Typography>
        </Hidden>
        <Hidden smUp>
          <div className={classes.buttonmobile}>
            <Typography variant="h2">Popular Categories</Typography>
          </div>
        </Hidden>
      </Grid>

      <Grid item xs={12} sm={6} className={classes.button}>
        <Hidden xsDown>
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
        </Hidden>
      </Grid>
      {/* {jobSegment.slice(0, 6).map((val, ind) => (
        <CategoryItem key={ind} id={val.id} />
      ))} */}

      {CategoryData.map((val, ind) => (
        <Grid item xs={6} sm={3} md={4}>
          <CategoryItem
            key={ind}
            img={val.img}
            title={val.title}
            content={val.content}
            id={val.id}
          />
        </Grid>
      ))}
      <Hidden smUp>
        <Grid item xs={12} className={classes.buttonmobile}>
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
        </Grid>
      </Hidden>
    </Grid>
  );
}
