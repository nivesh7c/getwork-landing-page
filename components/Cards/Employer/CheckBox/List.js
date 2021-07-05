import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Paper,Hidden } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import Image from 'next/image';
import { CustomButton } from '../../../InputComponent/Button/CustomButton';

const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(5),
   // textAlign: 'center',
    color: theme.palette.common.black,
    height:"90%",
    width:"100%",

    //maxWidth:"80%",
    // minWidth:"100%",
    borderRadius:"15px",
  //  marginTop:"50px",
    //backgroundColor:theme.palette.common.white,
    //border: "solid 1px #007bff",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    backgroundColor: '#ffffff',
  },
  detail:{
      marginBottom:"20px"
  }
}));


export default function List() {
  const classes = useStyles();

  return (
    <>
  
        <Paper className={classes.paper}>
        <Grid container spacing={3}>
        <Grid item xs={2} sm={3} md={1} >
       <Typography variant="h6" color="primary" > 1. </Typography>
        </Grid>
        <Grid item xs={10} sm={3} md={11} style={{paddingLeft:"10px"}}>
        <Typography variant="h6" >
        Register your Students
        </Typography>
        </Grid>
        <Grid item xs={2} sm={3} md={1} >
        <Typography variant="h6" color="primary" > 2. </Typography>
        </Grid>
        <Grid item xs={10} sm={3} md={11} style={{paddingLeft:"10px"}}>
        <Typography variant="h6" >
        Invite Companies
        </Typography>
        </Grid>
        <Grid item xs={2} sm={3} md={1} >
        <Typography variant="h6" color="primary" > 3. </Typography>
        </Grid>
        <Grid item xs={10} sm={3} md={11} style={{paddingLeft:"10px"}}>
        <Typography variant="h6" >
        Track Placement
        </Typography>
        </Grid>
        <Grid item xs={2} sm={3} md={1} >
        <Typography variant="h6" color="primary" > 4. </Typography>
        </Grid>
        <Grid item xs={10} sm={3} md={11} style={{paddingLeft:"10px"}}>
        <Typography variant="h6" >
        Rank Up Your College
        </Typography>
        
        <div style={{marginTop:"20px", marginBottom:"20px"}}>
        {/* <Hidden smDown> */}
        <CustomButton
            onClick={() => {
            console.log("You Clicked on Me!");
                    }}
            type="button"
            buttonStyle="btn--primary--solid"
            buttonSize="btn--medium"
            >
         <Typography variant="body2" color="inherit">
            Get Started Now
         </Typography>
        </CustomButton>
        {/* </Hidden> */}
        </div>

        </Grid>
        </Grid>
        </Paper>
    </>
  );
}