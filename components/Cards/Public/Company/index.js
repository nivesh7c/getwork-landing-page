import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid,Button } from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  paper1: {
    padding: theme.spacing(2),
    //textAlign: 'center',
    color: theme.palette.common.black,
    borderRadius:"25px",
    backgroundColor:theme.palette.common.white,
    border: "solid 0.5px #e2e6ea",
    boxShadow:"none",
    width:"auto"
  },
  img:{
      borderRadius:"20px"
    // display: 'flex',
    // flexDirection: 'row',
    // alignContent: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
  }
}));

export default function Company() {
  const classes = useStyles();

  return (
<>

    <Paper className={classes.paper1}>
        <Grid container spacing={3}>
            <Grid item xs={12} className={classes.img}>    
            <div style={{borderRadius:"30px"}}>
            <Image src="/png/up.jpg"className={classes.img} height="100px" width="240px" alt="new" />
            </div>
            </Grid>
        <Grid item xs={12} >
        <Typography variant="h6" color="inherit">
        Global Logics
        </Typography>
        <Typography variant="body2" color="inherit">
        Find all jobs available with Global Logics
        </Typography>
        </Grid>

        <Grid item xs={12} >
        <Button variant="outlined" color="primary"  style={{border:"solid 0.5px #e2e6ea", paddingLeft:"60px",paddingRight:"60px" }}>
           <Typography variant="h6" color="primary">  View Vacancies</Typography> 
           </Button>
        </Grid>
      </Grid>
    </Paper>
      
    </>
  );
}
