import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid, Button, Container } from "@material-ui/core";
import CustomSearch from "../../InputComponent/CustomSearch";
import CompanyItem from "../../Cards/Public/CompanyItem";
import CompanyItemdata from "./CompanyItemdata";
import CustomAutocompleteStudent from "./CustomAutocompleteStudent";
import CustomAutoLocation from "./CustomAutoLocation";
import { useState } from "react";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.common.white,
    borderRadius: "5px",
    backgroundColor: theme.palette.common.black,
    position: "relative",
    marginTop: "-100px",
  },
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
    marginTop: "20px",
  },
  text: {
    display: "flex",
    flexDirection: "column",
  },
  companydetail: {
    marginTop: "30px",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    marginBottom: "50px",
  },
}));

export default function SearchSection(props) {
  const {
    jobTypeData,
    locations,
    filterObject,
    setFilterObject,
    setFilterIsApplied,
  } = props;
  const classes = useStyles();
  const [currentSearchValue, setCurrentSearchValue] = useState({});
  const [currentSearchValueJob, setCurrentSearchValueJob] = useState({});

  const [boole, setBoole] = React.useState(true);

  useEffect(() => {
    console.log(currentSearchValue);
    if (
      Object.keys(currentSearchValue).length > 0 ||
      Object.keys(currentSearchValueJob).length > 0
    )
      setBoole(false);
    else setBoole(true);
  }, [currentSearchValueJob, currentSearchValue]);

  return (
    <>
      <Container maxWidth="lg" className={classes.header}>
        <Paper className={classes.paper}>
          <Grid container spacing={3} style={{ padding: "4%" }}>
            <Grid item xs={12} sm={3} md={4}>
              <div className={classes.text}>
                <div style={{ display: "flex" }}>
                  <Typography variant="h4">Where</Typography>
                </div>
                <br />
                <CustomAutoLocation
                  locations={locations}
                  filterObject={filterObject}
                  setFilterObject={setFilterObject}
                  currentSearchValue={currentSearchValue}
                  setCurrentSearchValue={setCurrentSearchValue}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={4}>
              <div className={classes.text}>
                <div style={{ display: "flex" }}>
                  <Typography variant="h4">Job / Internship</Typography>
                </div>
                <br />
                <CustomAutocompleteStudent
                  jobTypeData={jobTypeData}
                  filterObject={filterObject}
                  setFilterObject={setFilterObject}
                  currentSearchValue={currentSearchValueJob}
                  setCurrentSearchValue={setCurrentSearchValueJob}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "22px",
                }}
              >
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  style={{ borderRadius: "30px", padding: "8px" }}
                  onClick={() => setFilterIsApplied(true)}
                  disabled={boole}
                >
                  <Typography variant="body1" color="inherit">
                    Search for New Opportunities
                  </Typography>
                </Button>
              </div>
            </Grid>
          </Grid>
        </Paper>

        <Grid container spacing={3} className={classes.companydetail}>
          {CompanyItemdata.map((val, ind) => (
            <Grid item xs={12} md={3}>
              <CompanyItem
                key={ind}
                img={val.img}
                title={val.title}
                intro={val.intro}
                content={val.content}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
