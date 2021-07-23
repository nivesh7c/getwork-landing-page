import React from "react";
import { Grid, Paper, Container, Typography, Box, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CustomButton } from "../../InputComponent/Button/CustomButton";
import Image from "next/image";
import Link from "next/link";
import { checkLinkType } from "../../../utils/checkLinkType";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    //  padding: theme.spacing(1),
    borderRadius: "15px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: "100px",
    // boxShadow: "rgba(49, 69, 244, 0.2) 0px 8px 24px",
    border: "solid 1px #e2e6ea",
    boxShadow: "none",
  },

  paper5: {
    padding: theme.spacing(3),
    borderRadius: "15px",
    boxShadow: "none",
    backgroundColor: "transparent",
  },

  imgs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  company: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
}));

export default function CompanyImageItem() {
  const classes = useStyles();
  const router = useRouter();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.company}>
          <Hidden smDown>
            <Typography variant="h1">These Companies Already Trust Us ( 1000+ Companies)</Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h3">These Companies Already Trust Us ( 1000+ Companies)</Typography>
          </Hidden>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper5}>
            <Grid container spacing={5} className={classes.imgs}>
              <Grid item xs={12} md={2}>
                <Paper className={classes.paper}>
                  <Image src="/company/c1.png" height="100%" width="100%" />
                </Paper>
              </Grid>
              <Grid item xs={12} md={2}>
                <Paper className={classes.paper}>
                  <Image src="/company/c2.png" height="100%" width="100%" />
                </Paper>
              </Grid>
              <Grid item xs={12} md={2}>
                <Paper className={classes.paper}>
                  <Image src="/company/c3.png" height="100%" width="100%" />
                </Paper>
              </Grid>
              <Grid item xs={12} md={2}>
                <Paper className={classes.paper}>
                  <Image src="/company/c4.png" height="100%" width="100%" />
                </Paper>
              </Grid>
              <Grid item xs={12} md={2}>
                <Paper className={classes.paper}>
                  <Image src="/company/c8.png" height="100%" width="100%" />
                </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={5} className={classes.imgs}>
              <Grid item xs={12} md={2}>
                <Paper className={classes.paper}>
                  <Image src="/company/c5.png" height="100%" width="100%" />
                </Paper>
              </Grid>
              <Grid item xs={12} md={2}>
                <Paper className={classes.paper}>
                  <Image src="/company/c6.png" height="100%" width="100%" />
                </Paper>
              </Grid>
              <Grid item xs={12} md={2}>
                <Paper className={classes.paper}>
                  <Image src="/company/c7.png" height="100%" width="100%" />
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px" }}>
          <Link href={checkLinkType(router.pathname)}>
            <CustomButton
              onClick={() => {
                console.log("You Clicked on Me!");
              }}
              type="button"
              buttonStyle="btn--primary--solid"
              buttonSize="btn--medium"
            >
              <Typography variant="body2" color="inherit">
                Get Started{" "}
              </Typography>
            </CustomButton>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
