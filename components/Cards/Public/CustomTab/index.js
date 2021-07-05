import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography color="inherit">{children}</Typography>
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
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    color:"white",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CustomTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary"  style={{backgroundColor:"#007BFF", color:"white", border:"none", boxShadow:"none"}}>
        <Tabs
          style={{color: 'white'}}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="secondary"
          aria-label="scrollable force tabs example"
        >
          <Tab  label={<span style={{ color: '#ffffff' }}>Job Applying</span>} {...a11yProps(0)} />
          <Tab  label={<span style={{ color: '#ffffff' }}>Application Management</span>}  {...a11yProps(1)} />
          <Tab  label={<span style={{ color: '#ffffff' }}>Application Tracking</span>} {...a11yProps(2)} />

        </Tabs>
      </AppBar>
      <TabPanel style={{backgroundColor:"#007BFF",color:"white"}} value={value} index={0}>
      Silent sir say desire fat him letter. Whatever settling goodness too and honoured she building answered her. Strongly thoughts remember mr to do consider.
      </TabPanel>
      <TabPanel style={{backgroundColor:"#007BFF",color:"white"}} value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel style={{backgroundColor:"#007BFF",color:"white"}} value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
