import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useEffect, useState } from "react";
import CssTextField from "./CssTextField";

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
export default function CustomAutoComplete(props) {
  const classes = useStyles();
  const { heading, index, filterObject, setFilterObject, filterData, setFilterData, setFilterIsApplied, mobileFilter, applyButtonClicked, filterIsApplied, listData, setListData } =
    props;
  const [currentSearchValue, setCurrentSearchValue] = useState({});
  useEffect(() => {
    console.log("new", listData);
  }, [listData]);
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
        disabled={filterIsApplied}
        style={{ borderRadius: 30 }}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        value={currentSearchValue}
        onChange={(event, newValue) => {
          if (newValue) {
            var arr = filterObject[filterData[heading].param_name];
            var arr_list = [...listData[heading]];
            var temp = filterObject;
            var temp_new = listData;
            arr.push(newValue);
            arr_list.push({ id: newValue.id, name: newValue.name, isChecked: true });
            temp[filterData[heading].param_name] = arr;
            temp_new[heading] = arr_list;
            setFilterObject(temp);
            setListData(temp_new);
            if (!mobileFilter) setFilterIsApplied(true);
          }
        }}
        options={filterData[heading].data.slice(5, filterData[heading].data.length)}
        getOptionLabel={(option) => option.name}
        renderOption={(option) => {
          return <span style={{ fontSize: 14 }}>{`${option.name}`}</span>;
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
