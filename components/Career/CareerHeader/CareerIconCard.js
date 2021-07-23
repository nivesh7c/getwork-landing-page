import React from "react";
import Image from "next/image";
import { Typography } from "@material-ui/core";

function CareerIconCard(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
      <Image src={props.img} height="100px" width="100px" alt="getworkicon" />
      <Typography variant="h6">{props.title}</Typography>
    </div>
  );
}

export default CareerIconCard;
