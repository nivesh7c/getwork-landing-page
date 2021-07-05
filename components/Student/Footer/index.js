import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Image from "next/image";
import { Divider, SvgIcon } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";

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
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  img: {
    paddingLeft: "0px",
  },
  footer: {
    // backgroundColor:"black",
    borderTop: `1px solid ${theme.palette.divider}`,
    // marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingRight: "10px",
    paddingLeft: "10px",
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const footers = [
  {
    title: "Download",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Quick Links",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Legal Stuff",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Social",
    description: ["Facebook", "Twitter", "YouTube", "Instagram", "Linkedin"],
  },
];

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      {/* Footer */}
      <div style={{ backgroundColor: "black" }}>
        <Container maxWidth="lg" component="footer" className={classes.footer}>
          <Grid container spacing={4} justify="space-evenly">
            <Grid item xs={12} sm={3} md={3}>
              <Image
                src="/png/white-logo.png"
                className={classes.img}
                height="60px"
                width="70px"
                alt="getwork-logo"
              />
            </Grid>
            {footers.map(footer => (
              <Grid item xs={12} sm={3} md={2} key={footer.title}>
                <Typography variant="h4" color="textSecondary" gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map(item => (
                    <li key={item}>
                      <Link href="#" variant="subtitle1" color="textSecondary">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
          <br />
          <Divider style={{ backgroundColor: "#e5e9ec" }} />
          <Box mt={2}>
            <Copyright />
          </Box>
        </Container>
      </div>
      {/* End footer */}
    </>
  );
}
