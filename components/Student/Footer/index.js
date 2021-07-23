import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import {
  Divider,
  Hidden,
  SvgIcon,
  Container,
  Grid,
  Typography,
  Box,
} from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://getwork.org/">
        GetWork
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  link: {
    cursor: "pointer",
  },
  img: {
    paddingLeft: "0px",
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    // marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    //  paddingRight: "10px",
    //paddingLeft: "10px",
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  playstore: {
    borderRadius: "10px",
  },
  social: {
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "12px",
    color: "white",
  },
  linktext: {
    color: "white",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      {/* Footer */}
      {/* <Hidden smDown> */}
      <div style={{ backgroundColor: "#23272b" }}>
        <Container maxWidth="lg" component="footer" className={classes.footer}>
          <Grid container spacing={4} justify="space-evenly">
            <Grid item xs={12} sm={3} md={3}>
              <Link href="/">
                <a target="_blank">
                  <Image
                    src="/png/white-logo.png"
                    className={classes.img}
                    height="60px"
                    width="70px"
                    alt="getwork-logo"
                  />
                </a>
              </Link>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <Typography variant="h4" color="textSecondary" gutterBottom>
                Download
              </Typography>
              <br />
              <Link
                href="https://play.google.com/store/apps/details?id=com.getwork_app"
                target="_blank"
              >
                <Image
                  src="/png/google.png"
                  height="50px"
                  width="160px"
                  alt="playstore"
                  className={classes.playstore}
                />
              </Link>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <Typography variant="h4" color="textSecondary" gutterBottom>
                Quick Links
              </Typography>
              <br />
              <div className={classes.link}>
                <Link href="/about-us" className={classes.linktext}>
                  <Typography variant="body2" color="textSecondary">
                    About Us
                  </Typography>
                </Link>
                <br />
                <Link href="/blog" className={classes.linktext}>
                  <Typography variant="body2" color="textSecondary">
                    Blog
                  </Typography>
                </Link>
                <br />
                <Link href="/contact-us" className={classes.linktext}>
                  <Typography variant="body2" color="textSecondary">
                    Contact
                  </Typography>{" "}
                </Link>
                <br />
                <Link href="/" className={classes.linktext}>
                  <Typography variant="body2" color="textSecondary">
                    FAQ
                  </Typography>
                </Link>
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <Typography variant="h4" color="textSecondary" gutterBottom>
                Legal Stuff
              </Typography>
              <br />
              <div className={classes.link}>
                <Typography variant="body2" color="textSecondary">
                  Disclaimer
                </Typography>
                <br />
                <Typography variant="body2" color="textSecondary">
                  Financing
                </Typography>
                <br />
                <Typography variant="body2" color="textSecondary">
                  Privacy Policy
                </Typography>
                <br />
                <Typography variant="body2" color="textSecondary">
                  Terms of Service
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <Typography variant="h4" color="textSecondary" gutterBottom>
                Social
              </Typography>
              <br />
              <div style={{ color: "#fff" }}>
                <Link
                  href="https://www.facebook.com/getwork2018"
                  className={classes.social}
                  target="_blank"
                >
                  <FacebookIcon fontSize="12px" />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ marginLeft: "7px" }}
                  >
                    Facebook
                  </Typography>
                </Link>
                <Link
                  href="https://www.instagram.com/getworknow/"
                  className={classes.social}
                  target="_blank"
                >
                  <InstagramIcon />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ marginLeft: "7px" }}
                  >
                    Instagram
                  </Typography>
                </Link>
                <Link
                  href="https://twitter.com/getwork_now"
                  className={classes.social}
                  target="_blank"
                >
                  <TwitterIcon />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ marginLeft: "7px" }}
                  >
                    Twitter
                  </Typography>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/getworknow/"
                  className={classes.social}
                  target="_blank"
                >
                  <LinkedInIcon />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ marginLeft: "7px" }}
                  >
                    Linkedin
                  </Typography>
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCwp8aQ6Wp23ZHrw9-vWmV8w"
                  className={classes.social}
                  target="_blank"
                >
                  <YouTubeIcon />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ marginLeft: "7px" }}
                  >
                    You Tube
                  </Typography>
                </Link>
              </div>
            </Grid>
          </Grid>
          <br />
          <Divider style={{ backgroundColor: "#e5e9ec" }} />
          <Box mt={2}>
            <Copyright />
          </Box>
        </Container>
      </div>
      {/* </Hidden> */}
      {/* End footer */}
    </>
  );
}
