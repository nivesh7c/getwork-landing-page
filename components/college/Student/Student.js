import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography,Paper,Hidden } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import Image from 'next/image';
import { CustomButton } from '../../InputComponent/Button/CustomButton';
import CheckBox from '../../Cards/Employer/CheckBox';

const useStyles = makeStyles((theme) => ({
  header:{
    paddingLeft:"10px",
    paddingRight:"10px",
    marginTop: '20px',
  },
img:{
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  marginTop: '0px',
},
imgmobile:{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
},
btnmobile:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '0px',
   // marginBottom:"40px"
  }
}));


export default function Student() {
  const classes = useStyles();

  return (
    <>
        <Grid container spacing={4} justify="space-evenly">
        <Grid item xs={12} sm={12} md={5} >
        <CheckBox/>
        
       </Grid>
        <Grid item xs={12} sm={12} md={7} >
            <div className={classes.imgmobile}>
            <Image src="/svg/Joboffers-rafiki.svg" height="500px" width="500px" />
            </div>
         <br/>
         <div className={classes.btnmobile}>
         <Hidden smUp>
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
   

    </>
  );
}