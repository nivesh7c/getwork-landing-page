import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Divider, Button, Hidden, Icon, Box } from "@material-ui/core";
import clsx from "clsx";
import { CustomButton } from "../InputComponent/Button/CustomButton";
import JobHeaderSkeleton from "./JobHeaderSkeleton";
import JobBodySkeleton from "./JobBodySkeleton";
import MobileButton from "../InputComponent/Button/MobileButton";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { TrendingUpRounded } from "@material-ui/icons";
//import Icon from '@material-ui/core/Icon';
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    overflow: "auto",
    marginTop: "30px",
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    width: "auto",
    backdropFilter: "blur(30px)",
    // boxShadow: "0 25px 30px 0 rgba(0, 0, 0, 0.1)",
    flexDirection: "column",
    border: "1px solid  #E2E6EA",
    height: "auto",
    overflowY: "hidden",
    backgroundColor: "#FFFFFF",
    borderRadius: "25px",
  },
  jobbody: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  btn: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-between",
  },
  skeletonStyling: {
    borderRadius: 12,
    background: "linear-gradient(to left, #ffffff, rgba(255, 255, 255, 0.65) 0%, rgba(0, 123, 255, 0.25) 42%)",
  },
}));

export default function JobCardSkeleton() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.container, classes.fixedHeight);

  return (
    <>
      <main>
        <Container className={fixedHeightPaper}>
          <div>
            <JobHeaderSkeleton />
          </div>
          <div className={classes.jobbody}>
            <JobBodySkeleton />
          </div>
          <Hidden xsDown>
            <Divider />
          </Hidden>
          {/* <Hidden smDown>  */}
          <div className={classes.btn}>
            <Hidden smDown>
              <Skeleton variant="rect" className={classes.skeletonStyling} width={82} height={24} style={{ marginRight: 10 }} />
            </Hidden>
            <Hidden smUp>
              <Skeleton variant="rect" className={classes.skeletonStyling} width={82} height={24} style={{ marginRight: 10 }} />

              <Skeleton variant="rect" className={classes.skeletonStyling} width={82} height={24} style={{ marginRight: 10 }} />
            </Hidden>
          </div>
        </Container>
      </main>
    </>
  );
}
