import React from 'react'
import { Parallax } from 'react-parallax';
import { Container } from '@material-ui/core';
import CompanyImageItem from "../CompanyImage/CompanyImageItem"


export default function CompanyImageBg() {
    return (
       <>      
      <Parallax bgImage="/svg/companybg.svg" strength={-200} >
        <div style={{ marginTop:"100px", marginBottom:"50px" }}>
       <Container maxWidth="lg" >
        <CompanyImageItem/>
        </Container>
        </div>
      </Parallax>

       </>
    )
}

