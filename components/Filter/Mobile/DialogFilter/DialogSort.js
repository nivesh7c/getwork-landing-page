import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Dialog, List, ListItem, ListItemText, Divider, Slide, Typography } from "@material-ui/core";
import SwapVertIcon from "@material-ui/icons/SwapVert";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    padding: "3%",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogSort(props) {
  const { sortBy, setSortBy, setFilterIsApplied } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>
        <SwapVertIcon />
        <Typography color="inherit">Sort</Typography>
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        style={{
          marginTop: "62vh",
          height: "35%",
          maxHeight: "none",
        }}
      >
        <List>
          <ListItem button>
            <Typography color="inherit" variant="body1">
              Sort By
            </Typography>
          </ListItem>
          <Divider />
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem
              button
              onClick={() => {
                setSortBy({ name: "Latest Jobs", value: "latest" });
                setFilterIsApplied(true);
              }}
            >
              <ListItemText primary="Recommended for You" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setSortBy({ name: "Latest Jobs", value: "latest" });
                setFilterIsApplied(true);
              }}
            >
              {" "}
              <ListItemText primary="Latest Jobs" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setSortBy({ name: "Latest Jobs", value: "latest" });
                setFilterIsApplied(true);
              }}
            >
              {" "}
              <ListItemText primary="Popular Jobs" />
            </ListItem>
          </List>
        </List>
      </Dialog>
    </div>
  );
}
