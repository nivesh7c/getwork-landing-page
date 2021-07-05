import React from 'react'
import { Parallax } from 'react-parallax';
import { Container } from '@material-ui/core';
import CollegeImageItem from "../CollegeImage/CollegeImageItem"
import CollegeImageMobile from './CollegeImageMobile';
import { Hidden } from '@material-ui/core';

export default function CompanyImageBg() {
    return (
       <>      
      <Parallax bgImage="/svg/companybg.svg" strength={-200} >
        <div style={{ marginTop:"100px", marginBottom:"50px" }}>
       <Container maxWidth="lg">
        <Hidden smDown>
        <CollegeImageItem/>
        </Hidden>
        <Hidden smUp>
        <CollegeImageMobile/>
        </Hidden>
        </Container>
        </div>
      </Parallax>

       </>
    )
}

