import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Divider, Typography, Paper } from "@material-ui/core";
import clsx from "clsx";
import FilterAmount from "./FilterAmount";
import Image from "next/image";
import CustomSwitch from "../InputComponent/CustomSwitch";
import CustomSearch from "../InputComponent/CustomSearch";
import FilterItem from "./FilterItem";
import CustomAutoComplete from "../InputComponent/CustomAutoComplete";
const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    overflow: "auto",
    marginTop: "47px",
  },
  container: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },

  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    // maxWidth: 500,
    borderRadius: "30px",
    marginTop: "46px",
    //backdropFilter: "blur(30px)",
    boxShadow: "none",
    border: "1px solid  #E2E6EA",
    backgroundColor: "#FFFFFF",
    height: "580px",
    overflowY: "scroll",
  },
  fixedHeight: {
    maxWidth: "20%",

    backdropFilter: "blur(30px)",
    borderRadius: "20px",
    border: "solid 0.5px #e2e6ea",
    flexDirection: "column",
    height: "580px",
    backgroundColor: "#FFFFFF",
    position: "fixed",
    top: 160,
    overflowY: "scroll",
    "& webkit-scrollbar": {
      display: "hidden",
      width: 0,
    },
  },

  "@media only screen and (max-width: 1900px)": {
    fixedHeight: {
      maxWidth: "16%",
    },
  },

  "@media only screen and (max-width: 1700px)": {
    fixedHeight: {
      maxWidth: "18%",
    },
  },
  "@media only screen and (max-width: 1600px)": {
    fixedHeight: {
      maxWidth: "20%",
    },
  },
}));
export default function StickyFilter(props) {
  const { filterData, filterObject, setFilterData, setFilterObject, setFilterIsApplied, filterIsApplied } = props;
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.container, classes.fixedHeight);
  const [currentSearchValue, setCurrentSearchValue] = useState({});
  return (
    // <main className={classes.content}>
    <Container className={fixedHeightPaper}>
      <Box display="flex" padding="2% 0%">
        <Image src="/svg/filter.svg" height="15px" width="15px" alt="filter_icon" />
        <Typography variant="body2" color="textSecondary" style={{ marginLeft: "20px" }}>
          {" "}
          Filter By
        </Typography>
      </Box>

      <Divider />
      {Object.keys(filterData).map((heading, index) => (
        <>
          <FilterItem
            heading={heading}
            index={index}
            filterObject={filterObject}
            setFilterObject={setFilterObject}
            filterData={filterData}
            setFilterData={setFilterData}
            setFilterIsApplied={setFilterIsApplied}
            filterIsApplied={filterIsApplied}
            fixInSide={true}
          />
          <CustomAutoComplete
            heading={heading}
            index={index}
            filterObject={filterObject}
            setFilterObject={setFilterObject}
            filterData={filterData}
            setFilterData={setFilterData}
            setFilterIsApplied={setFilterIsApplied}
            filterIsApplied={filterIsApplied}
          />
        </>
      ))}
      <CustomSwitch />
      <FilterAmount />
    </Container>
    // </main>
  );
}
