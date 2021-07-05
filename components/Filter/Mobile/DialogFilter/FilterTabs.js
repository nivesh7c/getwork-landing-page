import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Divider, FormControlLabel, Checkbox } from "@material-ui/core";
import FilterAmount from "../../FilterAmount";
import ListData from "../../ListData";
import CustomAutoComplete from "../../../InputComponent/CustomAutoComplete";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
      {value === index && (
        <Box style={{ paddingLeft: "8px" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    color: "black",
    display: "flex",
    height: "auto",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: "120px",
  },
}));

export default function NewDemo(props) {
  const { filterData, filterObject, setFilterData, setFilterObject, setFilterIsApplied, applyButtonClicked, filterIsApplied } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange} aria-label="Vertical tabs example" className={classes.tabs}>
        {Object.keys(filterData).map((heading, index) => (
          <Tab label={filterData[heading].heading} {...a11yProps(index)} />
        ))}

        <Divider />
      </Tabs>

      {Object.keys(filterData).map((heading, index) => (
        <TabPanel value={value} index={index}>
          <CustomAutoComplete
            heading={heading}
            index={index}
            filterObject={filterObject}
            setFilterObject={setFilterObject}
            filterData={filterData}
            setFilterData={setFilterData}
            setFilterIsApplied={setFilterIsApplied}
            mobileFilter={true}
            applyButtonClicked={applyButtonClicked}
            filterIsApplied={filterIsApplied}
          />
          <ListData
            heading={heading}
            index={index}
            filterObject={filterObject}
            setFilterObject={setFilterObject}
            filterData={filterData}
            setFilterData={setFilterData}
            setFilterIsApplied={setFilterIsApplied}
            mobileFilter={true}
            applyButtonClicked={applyButtonClicked}
            filterIsApplied={filterIsApplied}
          />
        </TabPanel>
      ))}

      {/* <TabPanel value={value} index={5}>
         
      <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Yes"
          labelPlacement="end"
        />
          <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="No"
          labelPlacement="end"
        />
      </TabPanel>
      <TabPanel value={value} index={6}>
      <FilterAmount/>
      </TabPanel>       */}
    </div>
  );
}
