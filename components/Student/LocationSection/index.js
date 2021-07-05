import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Hidden, Typography } from '@material-ui/core';
import User from '../../Cards/Public/User';
import LocationItem from '../../Cards/Public/Location';
import LocationData from '../../Cards/Public/Location/LocationData';
import { CustomButton } from '../../InputComponent/Button/CustomButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper4: {
    backgroundColor: '#CCE4FF',
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    borderColor:"none",
    boxShadow:"none"
  },
 img:{
   borderRadius:"50%"
 },
 heading:{
  display:"flex", 
 },
 button:{
  display:"flex",
  justifyContent: 'flex-end',
  alignItems: 'center',
},
buttonmobile:{
  display:"flex",
  justifyContent: 'center',
  alignItems: 'center',
}
}));

export default function LocationSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
      <Grid item xs={12} sm={6}>
      <Hidden smDown>
        <Typography variant="h1">Popular Location</Typography>
        </Hidden>
        <Hidden smUp>
          <div className={classes.buttonmobile}>
        <Typography variant="h2" >Popular Location</Typography>
        </div>
        </Hidden>
        </Grid>
     
        <Grid item xs={12} sm={6} className={classes.button} >
        <Hidden xsDown>
        <CustomButton
        onClick={() => {
        console.log("You Clicked on Me!");
        }}
        type="button"
        buttonStyle="btn--primary--outline"
        buttonSize="btn--medium"
      ><Typography variant="body2" color="primary">View All</Typography>
      </CustomButton>
      </Hidden>
        </Grid>
        
        { LocationData.map((val,ind)=>(
     <Grid item xs={6} sm={3} md={2} >
     
     <LocationItem
     key={ind}
     img={val.img}
     title={val.title}
     />
    
      </Grid>
        ))}
          <Hidden smUp>
        <Grid item xs={12}  className={classes.buttonmobile}>
        <CustomButton
        onClick={() => {
        console.log("You Clicked on Me!");
        }}
        type="button"
        buttonStyle="btn--primary--outline"
        buttonSize="btn--medium"
      ><Typography variant="body2" color="primary">View All</Typography>
      </CustomButton>

        </Grid>
        </Hidden>
    </Grid>
    </div>
  );
}
