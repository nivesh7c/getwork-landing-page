import React from 'react';
import {withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({

  margin: {
    height: theme.spacing(3),
  },
}));
const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';
const marks = [
  {
    value: 0,
    label:'0'
  },
  {
    value: 20,
    label: '2k',
  },
  {
    value: 40,
    label: '4k',
  },
  {
    value: 60,
    label: '6k',
  },
  {
    value: 80,
    label: '8k',
  },
  {
    value: 100,
    label: '',
  },
 
];


const IOSSlider = withStyles({
  root: {
    color: '#3880ff',
    height: 2,
    padding: '15px 0',
    
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -8,
    marginLeft: -8,
    '&:focus, &:hover, &$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
   track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#b0b6ba',
  },
  mark: {
    backgroundColor: '#b0b6ba',
    height: 2,
    opacity: 0.5,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);


function valuetext(value) {
  return `${value}°C`;
}

export default function FilterAmount() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-always" variant="subtitle2" color='textSecondary' gutterBottom>
      Desired minimum monthly stipend
      </Typography>
       <IOSSlider aria-label="ios slider" defaultValue={60} marks={marks} valueLabelDisplay="auto" />
    </div>
  );
}
