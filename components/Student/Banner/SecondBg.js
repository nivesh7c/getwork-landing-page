import React from 'react'
import { Parallax } from 'react-parallax';
import { Container } from '@material-ui/core';
import SecondSection from '../SecondSection';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header:{
   paddingLeft:"10px",
   paddingRight:"10px",
   marginTop: '20px',
 },
}));

function SecondBg() {
  const classes = useStyles();
    return (
       <>       
      <Parallax bgImage="/png/bg-panal.png" strength={-200} >
        <div style={{ height: 350 }}>
       <Container maxWidth="lg" className={classes.header}>
        <SecondSection/>
        </Container>
        </div>
      </Parallax>
       </>
    )
}
export default SecondBg 
