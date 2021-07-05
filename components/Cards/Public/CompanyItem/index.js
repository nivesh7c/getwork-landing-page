import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid } from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.common.black,
    borderRadius:"15px",
    backgroundColor:theme.palette.common.white,
    border: "solid 1px #007bff",
    boxShadow:"none"
  },
  img:{
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
cd:{
  color:"red",
}
}));
export default function CompanyItem(props) {
  const classes = useStyles();
  return (
<>
    <Paper className={classes.paper}>
        <Grid container spacing={3}>
            <Grid item xs={4} className={classes.img}>    
            <Image src={props.img} className={classes.cd} height="70px" width="70px" alt="icons"/>
            </Grid>
        <Grid item xs={8}>
        <Typography variant="h5">
        {props.title}
        </Typography>
        <Typography variant="h5" color="primary">
        {props.intro}
        </Typography>
        <Typography variant="body1">
        {props.content}
        </Typography>
        </Grid>
      </Grid>
    </Paper>
      
    </>
  );
}
