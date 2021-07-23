import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useState } from "react";
import CssTextField from "../../InputComponent/CssTextField";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: "30px",
    // border: "2px solid #E6EAED",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
      //   border: "2px solid #007BFF",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(0),
      width: "auto",
    },
  },
  searchIcon: {
    paddingLeft: 0,
    marginLeft: 0,
    height: "100%",
    // position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    color: "#BABFC3",
    justifyContent: "center",
    "&:hover": {
      color: "#007BFF",
    },
  },

  inputRoot: {
    color: "inherit",
    "&:hover": {
      color: "#007BFF",
    },
  },
  //   icon: {
  //     paddingRight: 20,
  //   },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
      "&:hover": {},
    },
  },
}));
export default function CustomAutocompleteStudent(props) {
  const classes = useStyles();
  const { jobTypeData, filterObject, setFilterObject, currentSearchValue, setCurrentSearchValue } = props;
  //   const { heading, index, filterObject, setFilterObject, filterData, setFilterData, setFilterIsApplied, mobileFilter, applyButtonClicked, filterIsApplied } = props;

  return (
    <>
      {/* <div className={classes.search}> */}
      {/* <div className={classes.searchIcon}>
          <SearchIcon className={classes.icon} />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        /> */}

      <Autocomplete
        id="multiple-limit-tags"
        size="small"
        // disabled={filterIsApplied}
        style={{ borderRadius: 30, backgroundColor: "white" }}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        value={currentSearchValue}
        onChange={(event, newValue) => {
          if (newValue) {
            var arr = [];
            var temp = filterObject;
            arr = [{ id: newValue.id, name: newValue.job_role_name }];
            temp["job_role_id"] = arr;
            setFilterObject(temp);
            setCurrentSearchValue(newValue);
          } else {
            setCurrentSearchValue({});
          }
        }}
        options={jobTypeData}
        getOptionLabel={(option) => option.job_role_name}
        renderOption={(option) => {
          return <span style={{ fontSize: 14 }}>{`${option.job_role_name}`}</span>;
        }}
        renderInput={(params) => (
          <CssTextField
            {...params}
            variant="outlined"
            placeholder="Search"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <div className={classes.searchIcon}>
                    <SearchIcon className={classes.icon} />
                  </div>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
      {/* </div> */}
    </>
  );
}
