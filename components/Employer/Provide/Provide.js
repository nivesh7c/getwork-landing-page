
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Hidden, Typography } from '@material-ui/core';
import Extra from '../../Cards/Employer/Extra';
import Data from './Data';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
heading:{
  display:"flex",
  flexDirection:"row",
  justifyContent: 'center',
  alignItems: 'center',
}
}));

export default function Provide() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
      <Grid item xs={12} sm={6} md={12}>
      <Hidden smDown >
      <div >
        <Typography variant="h1">Why Choose Us? What Getwork is providing.</Typography>
        </div>
        </Hidden>
        <Hidden smUp>
          <div className={classes.heading}>
        <Typography variant="h3" >Why Choose Us? What Getwork is providing.</Typography>
        </div>
        </Hidden>
        </Grid>
        { Data.map((val,ind)=>(
     <Grid item xs={6} sm={3} md={3} >
         <Extra
      key={ind}
      img={val.img}
      title={val.title}
      content={val.content}
     />
      </Grid>
      ))}
    </Grid>
    </div>
  );
}
