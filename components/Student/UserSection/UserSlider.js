import React from "react";
import Carousel,{ consts }  from "react-elastic-carousel";
import Item from "./Item";
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Hidden, Container } from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import User from "../../Cards/Public/User/index"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button:{
    display:"flex",
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  heading:{
    marginTop:"30px",
    display:"flex", 
    justifyContent:"center"
  },
  sliderbutton:{
    border:"none", 
    backgroundColor:"transparent",
    padding:"0" 
  }
}));

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];

function UserSlider() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.header}>
      <Grid container spacing={1}>     
      <Grid item xs={12} sm={12} md={12}>
      <Hidden mdDown>
      <div className={classes.heading}>
        <Typography variant="h1">Hear From Our Users</Typography>
        </div>
        </Hidden>
        <Hidden smUp>
          <div className={classes.heading}>
        <Typography variant="h2" >Hear From Our Users</Typography>
        </div>
        </Hidden>
        </Grid>
      </Grid>
      <br/>
      
        <Carousel breakPoints={breakPoints}   renderArrow={({ type, onClick }) => {
          const pointer = type === consts.PREV ? <ArrowBackIosIcon/> : <ArrowForwardIosIcon/>
          return <button className={classes.sliderbutton} onClick={onClick}>{pointer}</button>
        }} itemPadding={[1, 1]}>
          <Item ><User/></Item>
          <Item ><User/></Item>
          <Item ><User/></Item>
          
        </Carousel>
      </Container>
    </>
  );
}

export default UserSlider
