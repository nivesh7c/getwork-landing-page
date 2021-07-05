import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image';
import Box from "@material-ui/core/Box" ;
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  
  root: {
    flexGrow: 1,
    marginTop:"30px"
  },
  paper: {
    padding: theme.spacing(2),
  //  margin: 'auto',
   // maxWidth: 500,
    borderRadius:"20px",
    marginTop:"20px",
    borderColor:"300px solid black",
    //backdropFilter: "blur(30px)",
    boxShadow: "none",
    border: "1px solid  #E2E6EA",
    backgroundColor: "#FFFFFF"
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    marginTop:"20px",
    borderRadius:"15px",
    border:"1px solid black",
  },
  // paperimg:{
  //      borderRadius:"20px",
  //      boxShadow: "none",
  //      width:"120px",
  //      height:"80px",
  //      backgroundColor: "#FFFFFF"
  // },
  short:{
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '240px',
    display: 'flex',
    flexDirection: 'row',
  },
  newbutton:{
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
  }
}));

export default function CompanyCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      <Box display="flex"
         justifyContent="center"
         alignItems="center"
         padding="2% 0%"
        >
     <div className={classes.short}>
    <Typography variant="caption">Featured Companies</Typography>   
 
   </div>
   </Box>
   <div style={{marginBottom:"20px"}}>  <Divider/></div>

   <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
         {/* <Paper className={classes.paperimg}> */}
          <Image
               className={classes.img}
               src="/img/facebook.jpg"
               alt="Picture of the company"
               width="150px"
               height="100px"
              />
        {/* </Paper> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Image
               className={classes.img}
               src="/img/facebook.jpg"
               alt="Picture of the company"
               width="150px"
               height="100px"
              />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Image
               className={classes.img}
               src="/img/facebook.jpg"
               alt="Picture of the company"
               width="150px"
               height="100px"
              />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Image
               className={classes.img}
               src="/img/facebook.jpg"
               alt="Picture of the company"
               width="150px"
               height="100px"
              />
        </Grid>
      </Grid>
      </Paper>
    </div>
  );
}