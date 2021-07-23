import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container, Hidden, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    //padding: "100px",
    marginTop: "80px",
    marginBottom: "80px",
  },
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CompanyDetail() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.header}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Hidden smDown>
              {" "}
              <Typography variant="h1">
                Committed to Democratizing Opportunity
              </Typography>
            </Hidden>
            <Hidden smUp>
              {" "}
              <Typography variant="h4">
                Committed to Democratizing Opportunity
              </Typography>
            </Hidden>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="body2">
              While studying at MNNIT Allahabad GetWork founders Rahul Veerwal
              and Sumit Gupta discovered the imploding campus placement system
              for students due to the skills gap present across India. Students
              were unable to secure quality opportunities in a saturated job
              market.
              <br />
              <br />
              They recognized that the potential of AI/ML technology could
              bridge this employability gap faced by Talent Acquisition and
              Campus Recruiters and built the foundations of GetWork.
              <br />
              <br />
              College & University Training and Placement Coordinators rapidly
              took interest in the business model and became official partners.
              Corporates, although harder to crack due to a multitude of options
              available in the market, are quickly seeing the unique value
              proposition the tech platform has to offer, especially with its
              candidate-matching tech. GetWork was created to ensure that all
              college students have equal access to meaningful careers.
              <br />
              <br />
              Since our 2019 founding in Gurugram, our network of colleges and
              employer partners has positively impacted student career options.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
