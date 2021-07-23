import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Box, Container, Paper, Grid, Hidden } from "@material-ui/core";
import CustomSearch from "../InputComponent/CustomSearch";
import RecommendedFilter from "../Filter/RecommendedFilter";
import CloseIcon from "@material-ui/icons/Close";
import CommonChip from "../InputComponent/CommonChip";
import CustomAutocompleteNavbar from "./CustomAutocompleteNavbar";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    // textAlign: "center",
    color: theme.palette.text.secondary,
  },
  action: {
    paddingRight: "10px",
    paddingLeft: "10px",
  },
  search: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  recommended: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
}));

function ActionBar(props) {
  const { filterObject, setFilterObject, filterData, setFilterData, setFilterIsApplied, jobRoleList, sortBy, setSortBy, setListData, listData } = props;
  const classes = useStyles();

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
      if (param_name !== "job_role_id") handleToggle(key, found);
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
    console.log("hello", temp);
    var temp2 = { ...filterData };
    var temp_new = { ...listData };
    temp_new[heading] = temp.slice(0, 5);
    temp2[heading].data = temp;

    setFilterData(temp2);
    setListData(temp_new);
  };

  return (
    <>
      <Hidden smDown>
        <Box style={{ borderBottom: "1px solid #e2e6ea", backgroundColor: "white", position: "fixed", zIndex: 100, width: "100%" }} p={1}>
          <Container maxWidth="lg" className={classes.action}>
            <Grid container spacing={3}>
              <Grid item xs md={3} xs={3} className={classes.search}>
                <CustomAutocompleteNavbar jobRoleList={jobRoleList} filterObject={filterObject} setFilterObject={setFilterObject} setFilterIsApplied={setFilterIsApplied} />
              </Grid>
              <Grid item xs={6} md={6}>
                <Box className={classes.paper}>
                  {" "}
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
              </Grid>
              <Grid item xs={6} md={3}>
                <div className={classes.recommended}>
                  <RecommendedFilter sortBy={sortBy} setSortBy={setSortBy} setFilterIsApplied={setFilterIsApplied} />
                </div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Hidden>
    </>
  );
}

export default ActionBar;
