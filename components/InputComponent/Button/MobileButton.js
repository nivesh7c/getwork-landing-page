import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  main:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: '43px',
    justifyContent: 'center',
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor:"#007bff",
    width:"100%",
    marginTop:"100px",
    position:"fixed"
  },
  toolbar:{
    display:"flex", 
    flexDirection:"row", 
    justifyContent:"space-evenly"
  },
}));
export default function MobileButton() {
  const classes = useStyles();

  return (
   <>
   <div className={classes.main}>
      <div position="fixed"  className={classes.appBar}>
        <Toolbar  className={classes.toolbar}>
              <Typography variant="body2" style={{color:"#ffffff"}}>Apply Now</Typography>
        </Toolbar>
      </div>
      </div>
 </>
  );
}
