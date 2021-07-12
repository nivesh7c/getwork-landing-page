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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import SideDrawer from "./SideDrawer";
import { CustomButton } from "../../InputComponent/Button/CustomButton";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ActiveLink from "./ActiveLink";
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
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  menuButton: {
    padding: "0px",
    justifyContent: "flex-start",
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
  tab: {
    borderRadius: "30px",
  },
});

const navLinks = [
  { title: `Students`, path: `/students` },
  { title: `Career Advice`, path: `/` },
  { title: `Opurtunities`, path: `/` },
  { title: `Companies`, path: `/employer` },
  { title: `Colleges`, path: `/college` },
  { title: `Blogs`, path: `/blog` },
  { title: `About us`, path: `/` },
  { title: `Content us`, path: `/` },
];

function Navbar() {
  const classes = useStyles();

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
                <Button color="primary" className={classes.tab}>
                  <Typography variant="body2" className={classes.btn}>
                    Students
                  </Typography>
                  {/* <ExpandMoreIcon /> */}
                </Button>
              </ActiveLink>
              <Link href="/public/jobs">
                <Button color="primary" className={classes.tab}>
                  <Typography variant="body2" className={classes.btn}>
                    Career Advice
                  </Typography>
                </Button>
              </Link>
              <Link href="/">
                <Button color="primary" className={classes.tab}>
                  <Typography variant="body2" className={classes.btn}>
                    Opurtunities
                  </Typography>
                </Button>
              </Link>
              <Link href="/employer">
                <Button color="primary" className={classes.tab}>
                  <Typography variant="body2" className={classes.btn}>
                    Company
                  </Typography>
                </Button>
              </Link>
              <Link href="/college">
                <Button color="primary" className={classes.tab}>
                  <Typography variant="body2" className={classes.btn}>
                    Colleges
                  </Typography>
                </Button>
              </Link>
              <Link href="/blog">
                <Button color="primary" className={classes.tab}>
                  <Typography variant="body2" className={classes.btn}>
                    Blog
                  </Typography>
                </Button>
              </Link>
            </div>
            <div className={classes.sectionDesktop}>
              <IconButton>
                <SearchIcon color="inherit" />
              </IconButton>
              <MenuItem>
                <CustomButton
                  onClick={() => {
                    console.log("You Clicked on Me!");
                  }}
                  type="button"
                  buttonStyle="btn--primary--solid"
                  buttonSize="btn--medium"
                >
                  <Typography variant="body2" color="inherit">
                    Register{" "}
                  </Typography>
                </CustomButton>
              </MenuItem>
              <MenuItem style={{ paddingRight: "3px" }}>
                <CustomButton
                  onClick={() => {
                    console.log("You Clicked on Me!");
                  }}
                  type="button"
                  buttonStyle="btn--primary--outline"
                  buttonSize="btn--medium"
                >
                  <Typography variant="body2" color="inherit">
                    Login{" "}
                  </Typography>
                </CustomButton>
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
