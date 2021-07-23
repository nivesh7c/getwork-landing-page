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
  const {
    filterData,
    filterObject,
    setFilterData,
    setFilterObject,
    setFilterIsApplied,
    applyButtonClicked,
    setApplyButtonClicked,
    filterIsApplied,
    sortBy,
    setSortBy,
    salary,
    setSalary,
    ppo,
    setPPO,
    listData,
    setListData,
  } = props;

  const classes = useStyles();

  const checkFilterNumber = () => {
    var count = 0;
    Object.keys(filterObject).map((item) => {
      if (filterObject[item].length > 0) count = count + 1;
    });
    if (ppo) count = count + 1;
    if (salary && salary !== 0) count = count + 1;

    return count;
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div style={{ display: "flex" }}>
            <Badge color="primary" badgeContent={checkFilterNumber()}>
              <DialogFilter
                filterData={filterData}
                filterObject={filterObject}
                setFilterData={setFilterData}
                setFilterObject={setFilterObject}
                setFilterIsApplied={setFilterIsApplied}
                applyButtonClicked={applyButtonClicked}
                setApplyButtonClicked={setApplyButtonClicked}
                filterIsApplied={filterIsApplied}
                setPPO={setPPO}
                ppo={ppo}
                salary={salary}
                setSalary={setSalary}
                listData={listData}
                setListData={setListData}
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
