import React from 'react'
import { Parallax } from 'react-parallax';
import { Container } from '@material-ui/core';
import FormItem from './FormItem';

export default function FormBg() {
    return (
       <>      
      <Parallax bgImage="svg/companybg.svg" strength={-200} >
        <div style={{ marginTop:"30px", marginBottom:"50px" }}>
       <Container maxWidth="lg" >
     <FormItem/>
        </Container>
        </div>
      </Parallax>

       </>
    )
}



