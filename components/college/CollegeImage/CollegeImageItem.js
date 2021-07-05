import React from 'react';
import { Grid, Paper, Container,Typography,Box,Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {CustomButton} from "../../InputComponent/Button/CustomButton"
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    college:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"center"
    },
    paper: {
      padding: theme.spacing(1),
      borderRadius:"15px",  
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      height:"100px",
     // boxShadow: "rgba(49, 69, 244, 0.2) 0px 8px 24px",
      border: "solid 1px #e2e6ea",
      boxShadow:"none"
    },
    paper5: {
      padding: theme.spacing(3),
      borderRadius:"15px",  
      boxShadow:"none",
      backgroundColor:"transparent"
    },
      imgs:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
      }
  }));

export default function CollegeImageItem() {
    const classes = useStyles();
  return (
      <>  
<Grid container spacing={3}>
        <Grid item xs={12}  className={classes.college} >
         <Hidden smDown>
         <Typography variant="h1" >These Colleges Already Trust Us (18000 + colleges)</Typography>
         </Hidden>
         <Hidden smUp>
         <Typography variant="h3" >These Colleges Already Trust Us (18000 + colleges)</Typography>
         </Hidden>
        </Grid>


        <Grid item xs={12} >
        <Paper className={classes.paper5} >
        <Grid container spacing={5} className={classes.imgs}>
        <Grid item xs={12}md={2}>
          <Paper className={classes.paper}><Image src="/college/co1.png" height="100%" width="90%" /></Paper>
        </Grid>
        <Grid item xs={12}md={2}>
          <Paper className={classes.paper}><Image src="/college/co2.jpg" height="100%" width="100%" /></Paper>
        </Grid>
        <Grid item xs={12}md={2}>
        <Paper className={classes.paper}><Image src="/college/co3.png" height="100%" width="80%" /></Paper>
        </Grid>
        <Grid item xs={12}md={2}>
        <Paper className={classes.paper}><Image src="/college/co4.png" height="100%" width="100%" /></Paper>
        </Grid>
        <Grid item xs={12}md={2}>
        <Paper className={classes.paper}><Image src="/college/co8.png" height="100%" width="100%" /></Paper>
        </Grid>
        

     </Grid>
     <Grid container spacing={5} className={classes.imgs}>
        <Grid item xs={12}md={2}>
        <Paper className={classes.paper}><Image src="/college/co5.png" height="100%" width="90%" /></Paper>
        </Grid>
        <Grid item xs={12}md={2}>
        <Paper className={classes.paper}><Image src="/college/co6.png" height="100%" width="80%" /></Paper>
        </Grid>
        <Grid item xs={12}md={2}>
        <Paper className={classes.paper}><Image src="/college/co7.jpg" height="100%" width="90%" /></Paper>
        </Grid>
       

       

     </Grid>
                
            </Paper>  

       </Grid>
        </Grid>


    <Grid container spacing={3}>
        <Grid item xs={12} style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"20px"}} >
        <CustomButton
        onClick={() => {
        console.log("You Clicked on Me!");
        }}
        type="button"
        buttonStyle="btn--primary--solid"
        buttonSize="btn--medium"
      ><Typography variant="body2" color="inherit">Get Started </Typography>
      </CustomButton>
        </Grid>
        </Grid>
  
    </>
  );
}
