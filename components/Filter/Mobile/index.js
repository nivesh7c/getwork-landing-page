import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Badge, Toolbar, AppBar } from "@material-ui/core";
import DialogSort from "./DialogFilter/DialogSort";
import DialogFilter from "./DialogFilter/DialogFilter";
const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "#000000",
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
}));
export default function Mobile(props) {
  const { filterData, filterObject, setFilterData, setFilterObject, setFilterIsApplied, applyButtonClicked, setApplyButtonClicked, filterIsApplied, sortBy, setSortBy } = props;

  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div style={{ display: "flex" }}>
            <Badge color="primary" variant="dot">
              <DialogFilter
                filterData={filterData}
                filterObject={filterObject}
                setFilterData={setFilterData}
                setFilterObject={setFilterObject}
                setFilterIsApplied={setFilterIsApplied}
                applyButtonClicked={applyButtonClicked}
                setApplyButtonClicked={setApplyButtonClicked}
                filterIsApplied={filterIsApplied}
              />
            </Badge>
          </div>
          <div style={{ display: "contents" }}>
            <Divider style={{ backgroundColor: "white" }} orientation="vertical" flexItem />
          </div>
          <div style={{ display: "flex" }}>
            <Badge color="primary" variant="dot">
              <DialogSort sortBy={sortBy} setSortBy={setSortBy} setFilterIsApplied={setFilterIsApplied} />
            </Badge>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
