import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Parallax } from 'react-parallax';
import { Container,Hidden } from '@material-ui/core';
import Flow from './Flow';
import MobileFlow from './MobileFlow';

const useStyles = makeStyles((theme) => ({
 
  header:{
    paddingLeft:"10px",
    paddingRight:"10px",
    marginTop: '20px',
  },
 
}));
export default function StepBg() {
  const classes = useStyles();
    return (
       <>      
      <Parallax bgImage="/svg/companybg.svg" strength={-200} >
        <div style={{ marginTop:"30px", marginBottom:"50px" }}>
       <Container maxWidth="lg"  className={classes.header} >
       <Hidden smDown>
       <Flow/>
       </Hidden>
       <Hidden smUp>
       <MobileFlow/>
       </Hidden>
    
        </Container>
        </div>
      </Parallax>

       </>
    )
}

