import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, List, ListItem, Collapse,ListItemText } from "@material-ui/core";
import ListData from "../Filter/ListData";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  list: {
    marginLeft: "-15px",
  },
}));
export default function FilterItem(props) {
  const { heading, index, filterObject, setFilterObject, filterData, setFilterData, setFilterIsApplied, filterIsApplied, fixInSide } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(fixInSide ? false : true);
  const handleClick = () => {
    setOpen(!open);
  };

  // const [open, setOpen] = React.useState(true);

  // const handleClick = () => {
  //   setOpen(!open);
  // };
  return (
    <>
      <List component="nav" aria-labelledby="nested-list-subheader" className={classes.list}>
        <ListItem button onClick={handleClick}>
          <ListItemText> 
            <Typography variant="subtitle2" color="textSecondary"> 
             {filterData[heading].heading}
            </Typography> 
          </ListItemText>  
          {open ? <ExpandLess color="primary" /> : <ExpandMore color="primary" />}
        </ListItem>
        
        <Collapse in={open} timeout="auto" unmountOnExit>
          <ListData
            heading={heading}
            index={index}
            filterObject={filterObject}
            setFilterObject={setFilterObject}
            filterData={filterData}
            setFilterData={setFilterData}
            setFilterIsApplied={setFilterIsApplied}
            filterIsApplied={filterIsApplied}
          />
        </Collapse>
        
      </List>
    </>
  );
}
