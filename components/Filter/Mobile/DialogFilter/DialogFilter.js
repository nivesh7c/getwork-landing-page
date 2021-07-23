import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Dialog, Box, DialogActions, AppBar, Toolbar, Divider, Slide, Typography } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import FilterTabs from "./FilterTabs";
import Image from "next/image";
import CommonChip from "../../../InputComponent/CommonChip";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "white",
    boxShadow: "none",
    border: "solid 1px #e5e9ec;",
  },
  filter_btn: {
    display: "flex",
    padding: "20px",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogFilter(props) {
  const {
    filterData,
    filterObject,
    setFilterData,
    setFilterObject,
    setFilterIsApplied,
    applyButtonClicked,
    setApplyButtonClicked,
    filterIsApplied,
    salary,
    setSalary,
    ppo,
    setPPO,
    listData,
    setListData,
  } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteJS = (key, arr, param_name) => {
    let sampleArr = [...arr];
    const index = sampleArr.indexOf(key);
    var temp = { ...filterObject };
    if (index > -1) {
      sampleArr.splice(index, 1);
      temp[param_name] = sampleArr;
      setFilterObject(temp);
      console.log(temp);

      var found = Object.keys(filterData).find((element) => filterData[element].param_name === param_name);
      handleToggle(key, found);
      setFilterIsApplied(true);
    }
  };

  const handleToggle = (item, heading) => {
    var temp = [...filterData[heading].data];

    item.isChecked = false;
    var index;
    filterData[heading].data.forEach((item1) => {
      if (item1.id === item.id) index = filterData[heading].data.indexOf(item1);
    });
    temp.splice(index, 1, item);
    var temp2 = { ...filterData };
    temp2[heading].data = temp;
    var temp_new = { ...listData };
    temp_new[heading] = temp.slice(0, 5);
    setFilterData(temp2);
    setListData(temp_new);
  };

  const handleClearAll = () => {
    var temp = { ...filterObject };
    var dict = { ...filterData };
    Object.keys(temp).map((item) => {
      temp[item] = [];
    });
    Object.keys(dict).map((item) => {
      dict[item].data.map((in_item) => {
        in_item.isChecked = false;
      });
    });
    setFilterObject(temp);
    setFilterData(dict);
    setSalary();
    setPPO(false);
    setApplyButtonClicked(true);
    handleClose();
  };

  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>
        <FilterListIcon />
        <Typography color="inherit">Filter</Typography>
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <div className={classes.filter_btn}>
          <Box display="flex" padding="3% 0%">
            <Image src="/svg/filter.svg" height="15px" width="15px" alt="filter_icon" />
            <Typography variant="body2" color="textSecondary" style={{ marginLeft: "20px" }}>
              {" "}
              Filter By
            </Typography>
          </Box>
          <Button color="primary" onClick={() => handleClearAll()}>
            <Typography color="primary" variant="body1">
              Clear All
            </Typography>
          </Button>
        </div>
        <Box style={{ marginLeft: "13px" }}>
          {filterObject &&
            Object.keys(filterObject).map((item) =>
              filterObject[item].map((value) => (
                <CommonChip
                  label={value.name}
                  onDelete={() => handleDeleteJS(value, filterObject[item], item)}
                  deleteIcon={<CloseIcon fontSize="small" />}
                  style={{
                    marginRight: "8px",
                    marginBottom: "8px",
                  }}
                />
              ))
            )}
        </Box>

        <Divider />
        <FilterTabs
          filterData={filterData}
          filterObject={filterObject}
          setFilterData={setFilterData}
          setFilterObject={setFilterObject}
          setFilterIsApplied={setFilterIsApplied}
          applyButtonClicked={applyButtonClicked}
          filterIsApplied={filterIsApplied}
          setPPO={setPPO}
          ppo={ppo}
          salary={salary}
          setSalary={setSalary}
          listData={listData}
          setListData={setListData}
        />
        <Divider />

        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <div style={{ display: "flex" }}>
              <Button color="inherit" onClick={handleClose}>
                <Typography variant="body2" color="textPrimary">
                  Close Filter
                </Typography>
              </Button>
            </div>
            <div style={{ display: "contents" }}>
              <Divider style={{ backgroundColor: "#e5e9ec" }} orientation="vertical" flexItem />
            </div>
            <div style={{ display: "flex" }}>
              <Button
                color="primary"
                onClick={() => {
                  handleClose();
                  setApplyButtonClicked(true);
                }}
              >
                <Typography variant="body2" color="primary">
                  Apply Filter
                </Typography>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Dialog>
    </div>
  );
}
