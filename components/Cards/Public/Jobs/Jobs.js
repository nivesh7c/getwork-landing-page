import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Divider, Button, Hidden, Icon, Box } from "@material-ui/core";
import clsx from "clsx";
import { CustomButton } from "../../../InputComponent/Button/CustomButton";
import JobHeader from "../JobComponents/JobHeader/JobHeader";
import JobBody from "../JobComponents/JobBody/JobBody";
import MobileButton from "../../../InputComponent/Button/MobileButton";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { TrendingUpRounded } from "@material-ui/icons";
//import Icon from '@material-ui/core/Icon';
import JobCardSkeleton from "../../../JobCardSkeleton/JobCardSkeleton";

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
}));

export default function Jobs(props) {
  const { data, setPaginationButtonClicked, paginationButtonClicked, end, filterIsApplied } = props;

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.container, classes.fixedHeight);

  return (
    <>
      <main>
        {data?.length > 0 &&
          data?.map((item, index) => (
            <Container className={fixedHeightPaper}>
              <div>
                <JobHeader data={item} />
              </div>
              <div className={classes.jobbody}>
                <JobBody data={item} />
              </div>
              <Hidden xsDown>
                <Divider />
              </Hidden>
              {/* <Hidden smDown>  */}
              <div className={classes.btn}>
                <Hidden smDown>
                  <CustomButton
                    onClick={() => {
                      console.log("You Clicked on Me!");
                    }}
                    type="button"
                    buttonStyle="btn--primary--solid"
                    buttonSize="btn--small"
                  >
                    <Typography variant="body2" color="inherit">
                      Apply Now
                    </Typography>
                  </CustomButton>
                </Hidden>
                <Hidden smUp>
                  <CustomButton
                    onClick={() => {
                      console.log("You Clicked on Me!");
                    }}
                    type="button"
                    buttonStyle="btn--primary--solid"
                    buttonSize="btn--padding--small"
                  >
                    <Typography variant="body2" color="inherit">
                      Apply Now
                    </Typography>
                  </CustomButton>
                  <Button variant="contained" style={{ color: "white", backgroundColor: "black", borderRadius: "30px" }} endIcon={<BookmarkBorderIcon />}>
                    <Typography variant="h6" color="inherit">
                      Save
                    </Typography>
                  </Button>
                </Hidden>
              </div>
              {/* </Hidden> */}

              {/* <Hidden smUp> 
      <MobileButton/>
    </Hidden> */}
            </Container>
          ))}
        {paginationButtonClicked || filterIsApplied ? (
          <>
            <JobCardSkeleton />
            <JobCardSkeleton />
            <JobCardSkeleton />
            <JobCardSkeleton />
          </>
        ) : (
          data.length === 0 && (
            <Box style={{ display: "flex", justifyContent: "center", marginTop: 50, flexDirection: "column", alignItems: "center" }}>
              <img src="/png/no_data.png" alt="" width="150px" />
              <Typography style={{ textAlign: "center", fontSize: 19, marginTop: 30 }}>No Available Results</Typography>{" "}
            </Box>
          )
        )}
        {!end && !filterIsApplied && (
          <Box style={{ display: "flex", justifyContent: "center", marginBottom: 30 }}>
            <CustomButton
              onClick={() => {
                setPaginationButtonClicked(true);
              }}
              type="button"
              buttonStyle="btn--primary--outline"
              buttonSize="btn--small"
            >
              <Typography variant="body2" color="inherit">
                Load More Opportunities
              </Typography>
            </CustomButton>
          </Box>
        )}
      </main>
    </>
  );
}
