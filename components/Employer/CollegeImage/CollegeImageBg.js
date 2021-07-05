import React from 'react'
import { Parallax } from 'react-parallax';
import { Container } from '@material-ui/core';
import CollegeImageItem from "../CollegeImage/CollegeImageItem"


export default function CompanyImageBg() {
    return (
       <>      
      <Parallax bgImage="/svg/companybg.svg" strength={-200} >
        <div style={{ marginTop:"100px", marginBottom:"50px" }}>
       <Container maxWidth="lg" >
        <CollegeImageItem/>
        </Container>
        </div>
      </Parallax>

       </>
    )
}

