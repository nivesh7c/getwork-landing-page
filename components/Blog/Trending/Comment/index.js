import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Typography,
  Divider,
  Paper,
  Avatar,
} from "@material-ui/core";
import FeaturedCard from "../../BlogGrid/FeaturedCard";
import Image from "next/image";
import Form from "../../Form";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    //   marginTop: '100px',
  },
  companydetail: {
    marginTop: "30px",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    marginBottom: "50px",
    justifyContent: "space-between",
  },
  img: {
    borderRadius: "50%",
  },
}));

export default function Comment() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.header}>
        <Typography variant="h6" color="inherit">
          {" "}
          25 Comments
        </Typography>
        <Divider />

        <Grid container spacing={3} className={classes.companydetail}>
          <Grid item xs={12} md={8}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Image
                  src="/png/collegebanner.png"
                  className={classes.img}
                  height="70px"
                  width="70px"
                />
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h6">Julie Gomez</Typography>
                <br />
                <Typography variant="body2">4th November</Typography>
                <br />
                <Typography variant="body2">
                  SyntSynth polaroid bitters chillwave pickled. Vegan disrupt
                  tousled, Portland keffiyeh aesthetic food truck sriracha
                  cornhole single-origin coffee church-key roof party.h polaroid
                  bitters chillwave pickled. Vegan disrupt tousled, Portland
                  keffiyeh aesthetic food truck sriracha cornhole single-origin
                  coffee church-key roof party.
                </Typography>
                <br />
                <Divider />
              </Grid>
              <Grid item xs={2}>
                <Typography color="primary" variant="body2">
                  Reply
                </Typography>
              </Grid>
            </Grid>

            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Image
                  src="/png/collegebanner.png"
                  className={classes.img}
                  height="70px"
                  width="70px"
                />
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h6">Julie Gomez</Typography>
                <br />
                <Typography variant="body2">4th November</Typography>
                <br />
                <Typography variant="body2">
                  SyntSynth polaroid bitters chillwave pickled. Vegan disrupt
                  tousled, Portland keffiyeh aesthetic food truck sriracha
                  cornhole single-origin coffee church-key roof party.h polaroid
                  bitters chillwave pickled. Vegan disrupt tousled, Portland
                  keffiyeh aesthetic food truck sriracha cornhole single-origin
                  coffee church-key roof party.
                </Typography>
                <br />
                <Divider />
              </Grid>
              <Grid item xs={2}>
                <Typography color="primary" variant="body2">
                  Reply
                </Typography>
              </Grid>
            </Grid>
            <Form />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeaturedCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
