import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import { Typography, Container } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Location() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="false" style={{ padding: "17px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Image src="/img/office.jpg" height="500px" width="800px" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ padding: "50px" }}>
              <Typography variant="h1">How to find Getwork</Typography>
              <Grid
                container
                wrap="nowrap"
                spacing={2}
                style={{ marginTop: "50px" }}
              >
                <Grid item>
                  <PhoneIcon />
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography noWrap>011-412-36466</Typography>
                </Grid>
              </Grid>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <MailOutlineIcon />
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography noWrap>support@getwork.org</Typography>
                </Grid>
              </Grid>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <LocationOnIcon />
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography noWrap>
                    UG 06, Metropolis Mall, MG Road,
                    <br /> Sector 28 Gurugram, Haryana, India 122022.
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
