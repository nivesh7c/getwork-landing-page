import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
     padding: theme.spacing(1),
    margin: 'auto',
    //maxWidth: 500,
   // width:"60%",
    borderRadius:"12px",
    boxShadow: 'none',
    border:"none"
  },
  image: {
    width: "auto",
    height: "auto",
    
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    padding:"5px"
  },
}));

export default function Extra(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
        <Hidden smDown>
          <Grid item xs={4} style={{backgroundColor:"#007bff",borderTopLeftRadius:"12px",}}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={props.img} />
            </ButtonBase>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid item xs={4} style={{backgroundColor:"#007bff",borderTopLeftRadius:"12px", borderBottomLeftRadius:"12px"}}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={props.img} />
            </ButtonBase>
          </Grid>
        </Hidden>
         <Hidden smDown>
          <Grid item xs={8} sm container style={{backgroundColor:"#f3f7ff",borderTopRightRadius:"12px",display: 'flex',borderTopRightRadius: '12px',flexDirection: 'row',justifyContent: 'center',alignItems: 'center',}}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs={12}>
                <div style={{display: 'flex',flexDirection: 'row',justifyContent: 'center',}}>
                <Typography variant="h6">
                   {props.title}
                </Typography>
                </div>
              </Grid>
            </Grid>
            </Grid>
           </Hidden>
           <Hidden smUp>
            <Grid item xs={8} sm container style={{backgroundColor:"#f3f7ff",borderTopRightRadius:"12px",display: 'flex',borderTopRightRadius: '12px', borderBottomRightRadius:"12px", flexDirection: 'row',justifyContent: 'center',alignItems: 'center',}}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs={12}>
                <div style={{display: 'flex',flexDirection: 'row',justifyContent: 'center',}}>
                <Typography variant="body2">
                {props.title}
                </Typography>
                </div>
              </Grid>
            </Grid>
           </Grid>
           </Hidden>
        
          <Hidden mdDown>
          <Grid item style={{height:"180px"}}>
              <Typography variant="subtitle1">{props.content}</Typography>
            </Grid>
            </Hidden>
        </Grid>
      </Paper>
    </div>
  );
}
