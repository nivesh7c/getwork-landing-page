import {
  Drawer,
  Typography,
  IconButton,
  List,
  Button,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";
import * as React from "react";
import { useState } from "react";
//import menu_icon from "../../"
import Image from "next/image";
import DialogSearch from "../../Filter/Mobile/DialogSearch";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
  },
  img: {
    borderRadius: "50%",
  },
});

const SideDrawer = ({ navLinks }) => {
  const classes = useStyles();
  const [state, setState] = useState({ right: false });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: open });
  };

  const sideDrawerList = anchor => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div
        style={{ backgroundColor: "#007bff", display: "flex", padding: "20px" }}
      >
        <Image
          src="/png/user.png"
          height="60px"
          width="60px"
          alt="demo"
          className={classes.img}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
          }}
        >
          <Typography
            varient="h6"
            style={{ color: "white", marginLeft: "8px" }}
          >
            Hi Guest
          </Typography>
          <Link href="/">
            <Button
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              style={{ flexGox: 1 }}
            >
              <Typography varient="h6" style={{ color: "white" }}>
                Log in/Sign up
              </Typography>
            </Button>
          </Link>
        </div>
      </div>
      <List component="nav">
        {navLinks.map(({ title, path }) => (
          <a href={path} key={title} className={classes.linkText}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
      >
        <Menu fontSize="large" style={{ color: `black` }} />
      </IconButton>
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
      <IconButton style={{ padding: "0px" }} edge="start" aria-label="menu">
        {/* <Image
        src="/svg/search.svg"
        alt="Getwork"
        width="20px"
        height="20px"
      /> */}
        <DialogSearch />
      </IconButton>
      <Drawer
        anchor="left"
        open={state.right}
        onOpen={toggleDrawer("right", true)}
        onClose={toggleDrawer("right", false)}
      >
        {sideDrawerList("left")}
      </Drawer>
    </React.Fragment>
  );
};

export default SideDrawer;
