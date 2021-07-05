import React from "react";
import { Parallax } from 'react-parallax';
import { Typography,Hidden } from '@material-ui/core';
//import "../Button/button.module.css"

const insideStyles = {
    color:"white",
    padding: 10,
    position: "relative",
    paddingtop:"20px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };

// const STYLES = [
//   "btn--primary--solid",
//   "btn--warning--solid",
//   "btn--danger--solid",
//   "btn--success--solid",
//   "btn--white--solid",
//   "btn--primary--outline",
//   "btn--warning--outline",
//   "btn--danger--outline",
//   "btn--success--outline"
// ];

// const SIZES = ["btn--small","btn--medium", "btn--large" , "btn--padding--small"];
// export const Banner = ({
//   children,
//   type,
//   onClick,
//   buttonStyle,
//   buttonSize
// }) => {
//   const checkButtonStyle = STYLES.includes(buttonStyle)
//     ? buttonStyle
//     : STYLES[0];

//   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

//   return (
//     <button
//       className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//       onClick={onClick}
//       type={type}
//     >
//       {children}
//     </button>
//   );
// };
 



function Banner(props) {
    return (
       <>
   <div style={{ textAlign: 'center' }}>   
      <Parallax bgImage="/png/studentbg.jpg" strength={500} >
        <div style={{ height: 400 }}>
        <Hidden smDown>
        <div style={insideStyles}>
        <Typography variant="h1" >Get Matched to the <br/><span style={{color:"#007bff"}}>Right Candidate </span> on Every Hire <br/>Post Your <span style={{color:"#007bff"}}>First Job </span> For <span style={{color:"#007bff"}}>Free </span></Typography>
        </div>
        </Hidden>
        <Hidden smUp>
        <div style={insideStyles}>
        <Typography variant="h2" >Get Matched to the <br/><span style={{color:"#007bff"}}>Right Candidate </span> on Every Hire <br/>Post Your <span style={{color:"#007bff"}}>First Job </span> For <span style={{color:"#007bff"}}>Free </span></Typography>
        </div>
        </Hidden>
        </div>
      </Parallax>
    </div>
       </>
    )
}

export default Banner
