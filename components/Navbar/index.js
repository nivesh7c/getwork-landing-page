import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, Container, Button, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { BorderBottom, Home } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import MenuIcon from "@material-ui/icons/Menu";
import SideDrawer from "./SideDrawer";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const useStyles = makeStyles({
  navbar: {
    backgroundColor: "white",
    BorderBottom: " 4px solid black",
  },
  navtab: {
    float: "right",
    paddingTop: "10px",
    paddingRight: "0px",
    //padding:"10px",
    //color:"black",
    // padding: "9px",
    //marginTop: "2px"
  },
  navicon: {
    marginRight: "5px",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // flex-direction: row;
    // justify-content: space-between;
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  menuButton: {
    padding: "0px",
    justifyContent: "flex-start",
  },
});

const navLinks = [
  { title: `College`, path: `/` },
  { title: `Jobs`, path: `/public/jobs` },
  { title: `Log In`, path: `/` },
];

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" elevation={0} style={{ borderBottom: "1px solid #e2e6ea" }}>
      <Toolbar className={classes.navbar}>
        <Container maxWidth="lg" component="main" className={classes.header} disableGutters>
          <Hidden smDown>
            <Link href="/">
              <Button edge="start" className={classes.menuButton} color="inherit" aria-label="menu" style={{ flexGox: 1 }}>
                <Image src="/img/getwork-logo.png" alt="Getwork" width="50px" height="50px" />
              </Button>
            </Link>

            <div className={classes.navtab}>
              <Link href="">
                <Button color="secondary">
                  <Typography variant="h6" style={{ display: "flex" }}>
                    <SchoolOutlinedIcon className={classes.navicon} />
                    Colleges
                  </Typography>
                </Button>
              </Link>
              <Link href="/public/jobs">
                <Button color="secondary">
                  <Typography variant="h6" style={{ display: "flex" }}>
                    <WorkOutlineOutlinedIcon className={classes.navicon} />
                    Jobs
                  </Typography>
                </Button>
              </Link>
              <Link href="/">
                <Button color="primary">
                  <Typography variant="h6" style={{ display: "flex" }}>
                    <AccountCircleIcon className={classes.navicon} />
                    Log In
                  </Typography>
                </Button>
              </Link>
            </div>
          </Hidden>
          <Hidden mdUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
