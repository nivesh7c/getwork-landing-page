import React from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Hidden,
  IconButton,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Image from "next/image";
import SideDrawer from "./SideDrawer";
import SearchIcon from "@material-ui/icons/Search";
import ActiveLink from "./ActiveLink";
import { useRouter } from "next/router";
import LogInBtn from "./LogInBtn";
import RegisterBtn from "./RegisterBtn";
import DropDown from "./DropDown";
const useStyles = makeStyles({
  appbar: {
    borderBottom: "1px solid #e2e6ea",
    backgroundColor: "white",
  },
  navbar: {
    backgroundColor: "white",
    BorderBottom: " 4px solid black",
  },
  navtab: {
    float: "right",
    paddingRight: "0px",
    padding: "6px",
  },
  navicon: {
    marginRight: "5px",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    //paddingLeft: "5px",
    //paddingRight: "5px",
  },
  menuButton: {
    padding: "0px",
    // justifyContent: "flex-start",
    display: "flex",
    justifyContent: "center",
  },
  sectionDesktop: {
    display: "none",

    display: "flex",
  },
  btn: {
    "&:hover": {
      color: "#007bff",
    },
    padding: "10px",
  },
  btn_active: {
    color: "#007bff",
    padding: "10px",
    fontWeight: "20px",
  },
  tab: {
    borderRadius: "30px",
  },
  tab_active: {
    borderRadius: "30px",
    // backgroundColor: "#e8f3ff",
  },
});

const navLinks = [
  { title: `Students`, path: `/students` },
  { title: `Career Advice`, path: `/` },
  { title: `Opurtunities`, path: `/` },
  { title: `Companies`, path: `/employer` },
  { title: `Colleges`, path: `/college` },
  { title: `Blogs`, path: `/blog` },
  { title: `About us`, path: `/about-us` },
  { title: `Contact us`, path: `/contact-us` },
];

function Navbar() {
  const classes = useStyles();
  const router = useRouter();
  return (
    <AppBar position="fixed" elevation={0} className={classes.appbar}>
      <Toolbar className={classes.navbar}>
        <Container
          maxWidth="lg"
          component="main"
          className={classes.header}
          disableGutters
        >
          <Hidden smDown>
            <Link href="/">
              <Button
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                style={{ flexGox: 1 }}
              >
                <Image
                  src="/img/getwork-logo.png"
                  alt="Getwork"
                  width="50px"
                  height="50px"
                />
              </Button>
            </Link>

            <div className={classes.navtab}>
              <ActiveLink href="/students">
                <Button
                  color="primary"
                  className={
                    router.pathname === "/students"
                      ? classes.tab_active
                      : classes.tab
                  }
                >
                  <Typography
                    variant="body2"
                    className={
                      router.pathname === "/students"
                        ? classes.btn_active
                        : classes.btn
                    }
                  >
                    Students
                  </Typography>
                  {/* <ExpandMoreIcon /> */}
                </Button>
              </ActiveLink>
              <ActiveLink href="/public/jobs">
                <Button
                  color="primary"
                  className={
                    router.pathname === "/public/jobs"
                      ? classes.tab_active
                      : classes.tab
                  }
                >
                  <Typography
                    variant="body2"
                    className={
                      router.pathname === "/public/jobs"
                        ? classes.btn_active
                        : classes.btn
                    }
                  >
                    Career Advice
                  </Typography>
                </Button>
              </ActiveLink>
              <Link href="/">
                {/* <Button color="primary" className={classes.tab}>
                  <Typography variant="body2" className={classes.btn}>
                    Opurtunities
                  </Typography>
                </Button> */}
                <DropDown />
              </Link>
              <Link href="/employer">
                <Button
                  color="primary"
                  className={
                    router.pathname === "/employer"
                      ? classes.tab_active
                      : classes.tab
                  }
                >
                  <Typography
                    variant="body2"
                    className={
                      router.pathname === "/employer"
                        ? classes.btn_active
                        : classes.btn
                    }
                  >
                    Company
                  </Typography>
                </Button>
              </Link>
              <Link href="/college">
                <Button
                  color="primary"
                  className={
                    router.pathname === "/college"
                      ? classes.tab_active
                      : classes.tab
                  }
                >
                  <Typography
                    variant="body2"
                    className={
                      router.pathname === "/college"
                        ? classes.btn_active
                        : classes.btn
                    }
                  >
                    Colleges
                  </Typography>
                </Button>
              </Link>
              <Link href="/blog">
                <Button
                  color="primary"
                  className={
                    router.pathname === "/blog" ||
                    router.pathname === "/blogs/[category]"
                      ? classes.tab_active
                      : classes.tab
                  }
                >
                  <Typography
                    variant="body2"
                    className={
                      router.pathname === "/blog" ||
                      router.pathname === "/blogs/[category]"
                        ? classes.btn_active
                        : classes.btn
                    }
                  >
                    Blog
                  </Typography>
                </Button>
              </Link>
            </div>
            <div className={classes.sectionDesktop}>
              <IconButton>
                <SearchIcon color="inherit" />
              </IconButton>
              <MenuItem
                style={{ color: "inherit", backgroundColor: "inherit" }}
              >
                {/* <RegisterButton /> */}
                <RegisterBtn />
              </MenuItem>
              <MenuItem
                style={{
                  paddingRight: "3px",
                  color: "inherit",
                  backgroundColor: "inherit",
                }}
              >
                <LogInBtn />
              </MenuItem>

              {/* </div> */}
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
