import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography,Container,Hidden } from '@material-ui/core';
import { CustomButton } from '../../InputComponent/Button/CustomButton';
import Form from '../../Cards/Employer/Form';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:"100px"
  },
 heading:{
  display:"flex", 
  flexDirection:"row",
  justifyContent:"center",
  marginTop:"60px"
 
 },
 button:{
  display:"flex",
  justifyContent: 'flex-end',
  alignItems: 'center',
},
header:{
  //paddingLeft:"10px",
 // paddingRight:"10px",
  marginTop: '20px',
  marginBottom:"30px"
},
buttonmobile:{
  display:"flex",
  justifyContent: 'center',
  alignItems: 'center',
}
}));

export default function FormItem() {
  const classes = useStyles();

  return (
    
      <Grid container spacing={5}>
           <Grid item xs={12} sm={6} md={12}>
     {/* <Image src="/svg/at-work.svg/" height="300px" width="300px"/> */}
     <div className={classes.heading}>
    <Hidden smDown>
    <Typography variant="h1" >Post a Job on GetWork</Typography>
    </Hidden>
    <Hidden smUp>
    <Typography variant="h2" >Post a Job on GetWork</Typography>
    </Hidden>
    </div>
        </Grid>
      <Grid item xs={12} sm={6}>
     {/* <Image src="/svg/at-work.svg/" height="300px" width="300px"/> */}
     <Image src="/svg/at-work.svg" height="500px" width="500px" />
        </Grid>
     
        <Grid item xs={12} sm={6} >
            <Form/>

       </Grid>
      </Grid>
 
  );
}
