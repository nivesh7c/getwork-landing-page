import React from 'react'
import { Parallax } from 'react-parallax';

function MockUpBanner() {
    return (
       <>

  <div style={{ textAlign: 'center' }}>
      <Parallax bgImage="/png/mockupbg.png" strength={-200} >
        <div style={{ height: 620 }}>
        </div>
      </Parallax>
  </div>
       </>
    )
}

export default MockUpBanner
