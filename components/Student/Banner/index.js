import React from 'react'
import { Parallax } from 'react-parallax';

function Banner() {
    return (
       <>
   <div style={{ textAlign: 'center' }}>   
      <Parallax bgImage="/png/studentbg.jpg" strength={-80} >
        <div style={{ height: 400 }}>
        </div>
      </Parallax>
    </div>
       </>
    )
}

export default Banner
