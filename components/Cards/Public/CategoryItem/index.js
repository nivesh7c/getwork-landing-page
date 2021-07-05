import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid,Hidden } from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
   // textAlign: 'center',
    color: theme.palette.common.black,
    height:"95%",
    borderRadius:"5px",
    //backgroundColor:theme.palette.common.white,
    //border: "solid 1px #007bff",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    backgroundColor: '#ffffff',
  },
  img:{
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detail:{
    display: 'flex',
    flexDirection: 'column',
alignItems: 'flex-start',

  },
  detail1:{
    textAlign:"center"
    
      }
}));

export default function CategoryItem(props) {
  const classes = useStyles();

  return (
<>

    <Paper className={classes.paper}>
        <Grid container spacing={3}>
            <Grid item xs={12} md={4} className={classes.img}>    
            <Image src={props.img} height="50px" width="50px" alt="new"/>
             
            </Grid>
           
        <Grid item xs={12} md={8} >
          <Hidden smDown>
          <div className={classes.detail}>
        <Typography variant="h6" color="primary" gutterBottom >
        {props.title}
        </Typography>
       
        <Typography variant="body2" gutterBottom>
        {props.content}
        </Typography>
  
        </div>
        </Hidden>
        <Hidden smUp>
        <div className={classes.detail1}>
        <Typography variant="h6" color="primary" gutterBottom  >
        {props.title}
        </Typography>
        </div>
        </Hidden>
        </Grid>
      </Grid>
    </Paper>
      
    </>
  );
}
