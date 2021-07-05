import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: "360px"
  },
  nested: {
    paddingLeft: theme.spacing(4),
    cursor: "pointer"
  },
  cursorPointer: {
    cursor: "pointer"
  }
}));

export default function FilterList({filterData, setFilters, appliedFilters}) {
  const classes = useStyles();
  const [openDict, setOpenDict] = useState([]);
  let initialState = [];
  
  const handleClick = (index) => {
    let newList = [...openDict];
    // if (!openDict[index])
    newList[index] = !openDict[index];
    setOpenDict(newList);
  };

  useEffect(() => {
      if (filterData){
        Object.keys(filterData).map((_, __) =>  {
            initialState.push(true);
        })
        setOpenDict(initialState);
      }
  }, [filterData])

  return (
    <List>
      {filterData && Object.keys(filterData).map((key, index) => (
      <>
      <ListItem className={classes.cursorPointer} key={"heading-" + key + '-' + index} onClick={() => {handleClick(index)}}>
        <ListItemIcon>
        <img 
        style={{marginLeft:"-10px"}}
        src={job_segment}
        height="40px"
        />
        </ListItemIcon>
        <ListItemText primary={filterData[key]?.heading} />
        {openDict[index] ? <ExpandLess /> : <ExpandMore />}
       </ListItem>

       <Collapse in={openDict[index]} timeout="auto" unmountOnExit>
           <Job_List data={filterData[key]?.data} param={filterData[key]?.param_name} setFilters={setFilters} appliedFilters={appliedFilters} />
      </Collapse>
      </>   
      ))}
    </List>
  );
}
