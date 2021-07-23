import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import Link from "next/link";
import { ListSubheader } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function DropDownList({ array, heading, handleClose }) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      {/* <Divider /> */}

      <List
        component="nav"
        aria-label="secondary mailbox folder"
        style={{ padding: "0px" }}
        // subheader={
        //   <ListSubheader component="div" id="nested-list-subheader">
        //     {heading}
        //   </ListSubheader>
        // }
      >
        {/* <Divider /> */}
        {array.map((item) =>
          !item.color ? (
            <Link href={item.link}>
              <ListItem button onClick={() => handleClose()}>
                <ListItemText secondary={item.heading} />
              </ListItem>
            </Link>
          ) : (
            <Link href={item.link}>
              <ListItem button onClick={() => handleClose()}>
                <span style={{ color: "#007bff", fontSize: 14 }}>{item.heading}&nbsp;</span>
                <ArrowRightAltIcon style={{ color: "#007bff" }} />
              </ListItem>
            </Link>
          )
        )}
      </List>
    </div>
  );
}
