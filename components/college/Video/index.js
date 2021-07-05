import React from 'react'
import { Container, Typography,Hidden,Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from "react-player"
import List from "../../Cards/Employer/CheckBox/List"
const useStyles = makeStyles((theme) => ({
  heading:{
    display:"flex", 
    flexDirection:"row", 
    justifyContent:"center",
    paddingTop:"30px",  
    marginBottom:"40px"
  }
}
))

export default function Video() {
  const classes = useStyles();
    return (
       <>            
        <div style={{ backgroundColor:"white", paddingBottom:"50px" }}>
       <Container maxWidth="lg" >
       <div  className={classes.heading} >
       <Hidden smDown>
       <Typography variant="h1" color="initial">How GetWork Works?</Typography>
       </Hidden>
       <Hidden smUp>
       <Typography variant="h3" color="initial">How GetWork Works?</Typography>
       </Hidden>
       </div>
       <Grid container spacing={3}>
       <Grid item xs={12} md={8}>
       <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}} >
      <ReactPlayer url="https://www.youtube.com/watch?v=36rC_8eXmIc" controls={true} />
      </div>   
        </Grid>
        <Grid item xs={12} md={4}>
        <List/>
          </Grid>
      </Grid>
   
        </Container>
        </div>
       </>
    )
}



