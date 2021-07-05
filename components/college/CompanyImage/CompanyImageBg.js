import React from 'react'
import { Parallax } from 'react-parallax';
import { Container } from '@material-ui/core';
import CompanyImageItem from "../CompanyImage/CompanyImageItem"
import { Hidden } from '@material-ui/core';
import CompanyImageMobile from './CompanyImageMobile';

export default function CompanyImageBg() {
    return (
       <>      
      <Parallax bgImage="/svg/companybg.svg" strength={-200} >
        <div style={{ marginTop:"80px", marginBottom:"50px" }}>
       <Container maxWidth="lg" >
       <Hidden smDown>
        <CompanyImageItem/>
        </Hidden>
        <Hidden smUp>
        <CompanyImageMobile/>
        </Hidden>
        </Container>
        </div>
      </Parallax>

       </>
    )
}

