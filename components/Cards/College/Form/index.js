
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';
  import InputBase from '@material-ui/core/InputBase';
  import InputLabel from '@material-ui/core/InputLabel';
  import TextField from '@material-ui/core/TextField';
  import FormControl from '@material-ui/core/FormControl';
  import { green } from '@material-ui/core/colors';
  import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
     padding: theme.spacing(5),
    margin: 'auto',
    //maxWidth: 500,
   // width:"60%",
    borderRadius:"25px",
    border: "solid 1.5px #e2e6ea",
    boxShadow:"none",
    display:'flex', 
    flexDirection:"row", 
    justifyContent:"center"
  },
  image: {
    width: 128,
    height: 128,
    
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  margin: {
   // margin: theme.spacing(1),
    width:"100%"
  },
  btn:{
    paddingLeft:"32%",
    paddingRight:"32%",
    borderRadius:"30px",
    boxShadow:"none"
  }
}));

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#007bff',
       
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#007bff',
        borderRadius:"30px"
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          border: "solid 1.5px #e2e6ea",
          borderRadius:"30px",
        
        },
        '&:hover fieldset': {
          borderColor: "black",
          borderRadius:"30px"
        },
        '&.Mui-focused fieldset': {
          borderColor: '#007bff',
          borderRadius:"30px"
        },
      },
    },
  })(TextField);
export default function Form() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
        <CssTextField
        className={classes.margin}
        label="Full Name"
        variant="outlined"
        id="custom-css-outlined-input"
      />
      
        </Grid>
        <Grid item xs={12} md={12}>
        <CssTextField
        className={classes.margin}
        label="College Name"
        variant="outlined"
        id="custom-css-outlined-input"
      />
      
      
      
        </Grid>
        <Grid item xs={12} md={12}>
        <CssTextField
        className={classes.margin}
        label="Phone Number"
        variant="outlined"
        id="custom-css-outlined-input"
      />

      
      
        </Grid>
        <Grid item xs={12} md={12}>
        <CssTextField
        className={classes.margin}
        label="Official Email ID*"
        variant="outlined"
        id="custom-css-outlined-input"
      />

      
      
        </Grid>


        <Grid item md={12} xs={12} >
          <div style={{display:'flex', flexDirection:"row", justifyContent:"center" }}>
      <Button className={classes.btn} variant="contained" color="primary"   >
       <Typography variant="h6" >  Post a Jobs </Typography> 
      </Button>
       </div>
      
      
        </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
