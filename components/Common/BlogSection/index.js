import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography,Avatar } from '@material-ui/core';
import Blog from '../../Cards/Public/Blog';
import Company from '../../Cards/Public/Company';

const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
  heading:{
    display:"flex", 
    justifyContent:"center"
  }
}));

export default function BlogSection() {
  const classes = useStyles();

  return (
   <>
    <Grid container spacing={5}>
        <Grid item xs={12}>
          <div className={classes.heading}>
          <Typography variant="h1" >Blog</Typography>
          </div>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <Blog/>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <Blog/>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <Blog/>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
         <Blog/>
        </Grid>
        
    </Grid>
   </>
  );
}
