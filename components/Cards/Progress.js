import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    marginTop:"10px",
    marginBottom:"10px",
    height: 10,
    borderRadius: 5,
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3)
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const useStyles = makeStyles({
  userprogress: {
    flexGrow: 1,
    marginTop:"20px"
  },
});

export default function CustomizedProgressBars() {
  const classes = useStyles();

  return (
      <>
    <div className={classes.userprogress}>
        <Grid container wrap="nowrap" spacing={2} direction="row" justify="space-between" alignItems="center">
          <Grid item>
          <Typography variant="caption" color="primary"> Profile Completeness</Typography>
          </Grid>
          <Grid item>
          <Typography variant="subtitle2" color="primary">50%</Typography>
          </Grid>
        </Grid>
      <BorderLinearProgress variant="determinate" value={50} />
      <Grid container wrap="nowrap" spacing={2} direction="row" justify="space-between" alignItems="center">
          <Grid item>
          <Typography variant="caption" color="inherit">5 Details Missing</Typography>
          </Grid>
          <Grid item>
          <Button size="small" color="primary"> <Typography variant="caption" color="primary">Add Details</Typography></Button>
          </Grid>
        </Grid>
    </div>
    </>
  );
}
