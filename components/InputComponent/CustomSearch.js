import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({

  search: {
    position: 'relative',
    borderRadius: "30px",
    border:"2px solid #E6EAED",
    backgroundColor: "white",
    '&:hover': {
      backgroundColor: "white",
      border:"2px solid #007BFF"
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginRight:0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    color:"#BABFC3",
    justifyContent: 'center',
    '&:hover': {
      color: "#007BFF",
   },
  },

  inputRoot: {
    color: 'inherit',
    '&:hover': {
      color: "#007BFF",
   },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
      '&:hover':{

      }
    },
  },
  
}));
export default function CustomSearch() {
  const classes = useStyles();
  
  return (
       <>
       <div className={classes.search}>
        <div className={classes.searchIcon}>
            <SearchIcon className={classes.icon}/>
        </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
        </div>
        </>
  );
}