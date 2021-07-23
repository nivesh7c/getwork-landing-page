import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DropDownList from "./DropDownList";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  dropdownitem: {
    boxShadow: "none",
    border: "none",
    top: "none",
    "&.MuiAccordion-root:before": {
      backgroundColor: "white",
    },
  },
}));

export default function SubList({ type }) {
  const classes = useStyles();
  var link_head;

  const data = [
    {
      title: "Location",
      sub_title: [
        { heading: "Delhi", link: `/${type}-in-delhi` },
        { heading: "Bangalore", link: `/${type}-in-bangalore` },
      ],
    },
    { title: "Category", sub_title: [{ heading: "Communication", link: `/${type}-in-communications-field` }] },
  ];

  return (
    <div className={classes.root}>
      {data.map((item) => (
        <Accordion className={classes.dropdownitem}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography className={classes.heading}>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ padding: "0px" }}>
            <DropDownList array={item.sub_title} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
