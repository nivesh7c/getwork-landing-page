import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid, Button, Container } from '@material-ui/core';
import CustomSearch from '../../InputComponent/CustomSearch';
import CompanyItem from '../../Cards/Public/CompanyItem';
import CompanyItemdata from './CompanyItemdata';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.common.white,
    borderRadius:"5px",
    backgroundColor:theme.palette.common.black,
    position:"relative",
    marginTop:"-100px"
  },
  header:{
    paddingLeft:"10px",
    paddingRight:"10px",
    marginTop: '20px',
  },
  text:{
    display:"flex",
    flexDirection:"column"
  },
  companydetail:{
    marginTop:"30px",
    display:"flex",
    alignItems:"center",
    alignContent:"center",
    marginBottom:"50px"
  }
  

}));

export default function SearchSection() {
  const classes = useStyles();

  return (
<>
<Container maxWidth="lg"  className={classes.header}>
    <Paper className={classes.paper}>
    <Grid container spacing={3} style={{padding:"4%"}}>
        <Grid item xs={12} sm={3} md={4}>
            <div className={classes.text}>
            <div style={{display:"flex",}}>
                <Typography variant="h4">
                 Where
                </Typography>
                </div>
                <br/>
                <CustomSearch/>
            </div>
        </Grid>
        <Grid item xs={12} sm={3} md={4}>
        <div className={classes.text}>
            <div style={{display:"flex", }}>
                <Typography variant="h4">
                Jobs and Internship
                </Typography>
                </div>
                <br/>
                <CustomSearch/>
            </div>
        </Grid>
        <Grid item xs={12} sm={3} md={4}>
        <div style={{display:"flex", flexDirection:"column",marginTop:"22px" }}>
          <br/>
               <Button variant="contained" color="primary"  style={{borderRadius:"30px",padding:"8px"}}>
               <Typography variant="body1" color="inherit">
               Search for New Opportunities
               </Typography>
               </Button>
            </div>
        </Grid>
      </Grid>
   </Paper>

   <Grid container spacing={3} className={classes.companydetail}>
        {CompanyItemdata.map((val,ind) => (
        <Grid item xs={12} md={3} >
        <CompanyItem
                      key={ind}
                      img={val.img}
                      title={val.title}
                      intro={val.intro}
                      content={val.content}                    
                      />
        </Grid>
        ))}
      </Grid>
      </Container>
    </>
  );
}
