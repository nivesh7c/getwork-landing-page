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
    height:"80%",
    width:"100%",

    //maxWidth:"80%",
    // minWidth:"100%",
    borderRadius:"15px",
    marginTop:"50px",
    //backgroundColor:theme.palette.common.white,
    //border: "solid 1px #007bff",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    backgroundColor: '#ffffff',
  },
  detail:{
      marginBottom:"20px"
  }
}));


export default function CheckBox() {
  const classes = useStyles();

  return (
    <>
  
        <Paper className={classes.paper}>
        <div className={classes.detail}>
            <Typography variant="h2" color="inherit">
             Pay-As-You-Use
            </Typography>
        </div>

        <Grid container spacing={3}>
        <Grid item xs={2} sm={3} md={1} >
        <DoneIcon color="primary" />
        </Grid>
        <Grid item xs={10} sm={3} md={11} style={{paddingLeft:"10px"}}>
        <Typography variant="h6" >
        College get Inbound Jobs
        </Typography>
        </Grid>
        <Grid item xs={2} sm={3} md={1} >
        <DoneIcon color="primary" />
        </Grid>
        <Grid item xs={10} sm={3} md={11} style={{paddingLeft:"10px"}}>
        <Typography variant="h6" >
        College get Inbound Jobs
        </Typography>
        </Grid>
        <Grid item xs={2} sm={3} md={1} >
        <DoneIcon color="primary" />
        </Grid>
        <Grid item xs={10} sm={3} md={11} style={{paddingLeft:"10px"}}>
        <Typography variant="h6" >
        College get Inbound Jobs
        </Typography>
        </Grid>
        <Grid item xs={2} sm={3} md={1} >
        <DoneIcon color="primary" />
        </Grid>
        <Grid item xs={10} sm={3} md={11} style={{paddingLeft:"10px"}}>
        <Typography variant="h6" >
        College get Inbound Jobs
        </Typography>
        
        <div style={{marginTop:"20px", marginBottom:"20px"}}>
        <Hidden smDown>
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
        </Hidden>
        </div>

        </Grid>
        </Grid>
        </Paper>
    </>
  );
}