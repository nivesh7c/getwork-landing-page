import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid, Button, Container } from '@material-ui/core';
import CompanyItem from  '../Cards/Public/CompanyItem/index'
import CompanyItemdata from '../Student/SearchSection/CompanyItemdata';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

export default function BannerCards() {
  const classes = useStyles();

  return (
<>
<Container maxWidth="lg"  className={classes.header}>
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
