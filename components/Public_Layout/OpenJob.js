import React, { useEffect } from "react";
import { Grid, Container } from "@material-ui/core";
import Filter from "../Filter/Filter";
import RegisterCard from "../Cards/RegisterCard";
import Jobs from "../Cards/Public/Jobs/Jobs";
import CompanyCard from "../Cards/CompanyCard";
import UserInfo from "../Cards/UserInfo";
import { makeStyles, Hidden } from "@material-ui/core";
import ActionBar from "../ActionBar";
import Mobile from "../Filter/Mobile";
import JobCardSkeleton from "../JobCardSkeleton/JobCardSkeleton";
import StickyFilter from "../Filter/StickyFilter";
const useStyles = makeStyles(theme => ({
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
    marginTop: "20px",
  },
  content: {
    flexGrow: 1,
    overflow: "auto",
    marginTop: "30px",
  },
}));

export default function OpenJob(props) {
  const {
    data,
    setPaginationButtonClicked,
    paginationButtonClicked,
    end,
    filterData,
    filterObject,
    setFilterData,
    setFilterObject,
    setFilterIsApplied,
    filterIsApplied,
    applyButtonClicked,
    setApplyButtonClicked,
    openFixFilter,
    setOpenFixFilter,
    jobRoleList,
    sortBy,
    setSortBy,
    setPPO,
    ppo,
    salary,
    setSalary,
    listData,
    setListData,
  } = props;
  const classes = useStyles();

  useEffect(() => {
    console.log(data);
  }, [data]);
  var localStorage = require("localStorage");

  return (
    <>
      <ActionBar
        filterObject={filterObject}
        setFilterObject={setFilterObject}
        filterData={filterData}
        setFilterData={setFilterData}
        setFilterIsApplied={setFilterIsApplied}
        jobRoleList={jobRoleList}
        sortBy={sortBy}
        setSortBy={setSortBy}
        setListData={setListData}
        listData={listData}
      />

      <Container maxWidth="lg" component="main" className={classes.header}>
        {/* <main className={classes.content}> */}
        <Grid container spacing={3} style={{ paddingTop: "7%" }}>
          <Grid item md={3}>
            <Hidden only={["sm", "xs"]}>
              <Filter
                filterData={filterData}
                filterObject={filterObject}
                setFilterData={setFilterData}
                setFilterObject={setFilterObject}
                setFilterIsApplied={setFilterIsApplied}
                filterIsApplied={filterIsApplied}
                setPPO={setPPO}
                ppo={ppo}
                salary={salary}
                setSalary={setSalary}
                listData={listData}
                setListData={setListData}
              />
              {openFixFilter && (
                <StickyFilter
                  filterData={filterData}
                  filterObject={filterObject}
                  setFilterData={setFilterData}
                  setFilterObject={setFilterObject}
                  setFilterIsApplied={setFilterIsApplied}
                  filterIsApplied={filterIsApplied}
                  setPPO={setPPO}
                  ppo={ppo}
                  salary={salary}
                  setSalary={setSalary}
                  listData={listData}
                  setListData={setListData}
                />
              )}
            </Hidden>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div style={{ padding: "1%" }}>
              <Jobs
                data={data}
                setPaginationButtonClicked={setPaginationButtonClicked}
                paginationButtonClicked={paginationButtonClicked}
                end={end}
                filterIsApplied={filterIsApplied}
              />
              {/* <JobCardSkeleton /> */}
            </div>
          </Grid>
          <Grid item md={3}>
            <Hidden only={["sm", "xs"]}>
              {/* <UserInfo /> */}
              {!localStorage.getItem("gw_token") ? (
                <RegisterCard />
              ) : (
                <>
                  <UserInfo />

                  {localStorage.getItem("user_type") === "College" && (
                    <CompanyCard />
                  )}
                </>
              )}{" "}
            </Hidden>
            {/* <CompanyCard/> */}
          </Grid>
        </Grid>

        {/* </main> */}
      </Container>

      <Hidden mdUp>
        <Mobile
          filterData={filterData}
          filterObject={filterObject}
          setFilterData={setFilterData}
          setFilterObject={setFilterObject}
          setFilterIsApplied={setFilterIsApplied}
          applyButtonClicked={applyButtonClicked}
          setApplyButtonClicked={setApplyButtonClicked}
          filterIsApplied={filterIsApplied}
          sortBy={sortBy}
          setSortBy={setSortBy}
          setPPO={setPPO}
          ppo={ppo}
          salary={salary}
          setSalary={setSalary}
          listData={listData}
          setListData={setListData}
        />
      </Hidden>
    </>
  );
}
