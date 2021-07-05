import React from 'react'
import { Parallax } from 'react-parallax';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Student from './Student';

const useStyles = makeStyles((theme) => ({
 
  header:{
    paddingLeft:"10px",
    paddingRight:"10px",
    marginTop: '20px',
  },
 
}));

function StudentBg() {
  const classes = useStyles();
    return (
       <>      
      <Parallax bgImage="/png/bg-panal.png" strength={-200} >
        <div style={{ marginTop:"30px", marginBottom:"50px" }}>
       <Container maxWidth="lg" className={classes.header} >
       <Student/>
        </Container>
        </div>
      </Parallax>

       </>
    )
}

export default StudentBg


