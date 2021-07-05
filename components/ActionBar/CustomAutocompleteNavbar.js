import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete, { createFilterOptions } from "@material-ui/lab/Autocomplete";
import React, { useEffect, useState } from "react";
import CssTextField from "../InputComponent/CssTextField";

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
  const { jobRoleList, filterObject, setFilterObject, setFilterIsApplied } = props;
  const [currentSearchValue, setCurrentSearchValue] = useState({});
  const filterOptions = createFilterOptions({
    matchFrom: "any",
    limit: 500,
  });
  const [currentJobRole, setCurrentJobRole] = useState();

  useEffect(() => {
    if (currentJobRole) {
      var arr = filterObject["job_role"];
      var temp = filterObject;

      arr.push({ id: currentJobRole.id, name: currentJobRole.job_role_name });
      temp["job_role"] = arr;
      setFilterObject(temp);
      console.log(temp);
      setFilterIsApplied(true);
    }
  }, [currentJobRole]);
  return (
    <>
      <Autocomplete
        id="multiple-limit-tags"
        size="small"
        filterOptions={filterOptions}
        // disabled={filterIsApplied}
        style={{ borderRadius: 30 }}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        value={currentJobRole}
        onChange={(event, newValue) => {
          if (newValue) {
            setCurrentJobRole(newValue);
            // if (!mobileFilter) setFilterIsApplied(true);
          } else setCurrentJobRole({});
        }}
        options={jobRoleList}
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
