import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Button, Grid, Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Image from "next/image";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: "30px",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  chip: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  img: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "70px",
  },
}));

export default function SecondSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div style={{ marginTop: "70px" }}>
            <Typography variant="h2" color="initial">
              Are You Looking For
            </Typography>
            <br />
            <div className={classes.chip}>
              <Chip size="small" label="Internships" color="primary" />
              <Chip size="small" label="Jobs" color="primary" />
              <Chip size="small" label="Part-Time" color="primary" />
              <Chip size="small" label="Summer Jobs" color="primary" />
              <Chip size="small" label="Placement" color="primary" />
              <Chip size="small" label="Weekend Jobs" color="primary" />
              <Chip size="small" label="Work from home jobs" color="primary" />
            </div>
            <br />
            <Link href="/public/jobs">
              <Button variant="text" color="primary" endIcon={<ArrowForwardIcon />}>
                Check out all the New Opportunities
              </Button>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.img}>
            <Image src="/svg/jobmen.svg" height="220px" width="220px" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
