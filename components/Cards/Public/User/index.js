import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  paper4: {
    backgroundColor: '#CCE4FF',
    //maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    borderColor:"none",
    boxShadow:"none",
    width:"auto"
  },
 img:{
   borderRadius:"50%"
 }
}));

export default function User() {
  const classes = useStyles();

  return (
   <>
      <Paper className={classes.paper4}>
        <Grid container  spacing={1} >
        <Grid item md={12} style={{marginBottom:"25px"}}>
          <Typography>Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support.</Typography>
          </Grid>
          <Grid item md={2}>
            <Image src="/png/men.png" className={classes.img} height="50px" width="50px" alt="demo" />
          </Grid>
          <Grid item md={10}>
            <Typography>Benedikt Safiyulin</Typography>
            <Typography variant="body2">Benedikt Safiyulin</Typography>
          </Grid>
        </Grid>
        </Paper>
     </>
  );
}
