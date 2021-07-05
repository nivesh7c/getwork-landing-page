import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
    color: theme.palette.primary.main,
    backgroundColor: "#e8f3ff",
    boxShadow: "0 1px 2px 0 rgba(44, 39, 56, 0.08)",
    border: "solid 0.5px #007bff",
    // border:"1px solid #007bff"
  },
}));
export default function CustomChip({ item, index }) {
  const classes = useStyles();

  return (
    <>
      <Chip size="small" key={index} label={item} className={classes.chip} />
    </>
  );
}
