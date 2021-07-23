import React from "react";
import Image from "next/image";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  img: {
    borderRadius: "50%",
  },
}));

function TeamMember(props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.card}>
        <Image
          src={props.img}
          height="200px"
          width="200px"
          className={classes.img}
        />
        <br />
        <Typography variant="h6">{props.name} </Typography>
        <Typography variant="body2">{props.content}</Typography>
      </div>
    </>
  );
}

export default TeamMember;
