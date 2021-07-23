import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Image from "next/image";
const useStyles = makeStyles(theme => ({
  img: {
    borderRadius: "50%",
  },
  tooltip: {
    position: "relative",
    display: "inline-block",
  },

  tooltiptext: {
    visibility: "visible",
    width: "230px",
    boxShadow: "rgba(149 157 165 0.2) 0px 8px 24px",
    backgroundColor: "white",
    color: "#000",
    textAlign: "center",
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",
    borderBottomLeftRadius: "25px",
    borderBottomRightRadius: "0px",
    padding: "5px 0",
    position: "absolute",
    zIndex: "1",
    top: "-5px",
    right: "110%",
  },
}));

export default function LeftToolTip(props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.tooltip}>
        <Image
          src="/png/men.png"
          height="60px"
          className={classes.img}
          width="60px"
        />
        <span className={classes.tooltiptext}>
          <Typography variant="subtitle2">{props.children}</Typography>
        </span>
      </div>
    </>
  );
}
