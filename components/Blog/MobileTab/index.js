import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ChipBlogCard from "../BlogGrid/ChipBlogCard";
import BlogPaper from "../BlogGrid/BlogPaper";
import { useRouter } from "next/router";
import college from "../../../public/svg/college.svg";
import graduated from "../../../public/svg/graduated.svg";
import officebuilding from "../../../public/svg/office-building.svg";
import Blog from "../../Cards/Public/Blog";
import Link from "next/link";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`full-width-tabpanel-${index}`} aria-labelledby={`full-width-tab-${index}`} {...other}>
      {value === index && (
        <Box p={1.2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "70px",
    width: "auto",
    boxShadow: "none",
    border: "none",
  },
}));

export default function MobileTab({ data }) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const Data = [
    {
      img: graduated,
      title: "All Blogs",
      link: "all",
      as: "/blog",
      href: "/blog",
      selected: router.query.category !== "students" && router.query.category !== "company" && router.query.category !== "college" ? true : false,
    },
    {
      img: graduated,
      title: "Students",
      link: "student",
      as: "/blogs/students",
      href: "/blogs/[category]",
      selected: router.query.category === "students" ? true : false,
    },
    {
      img: college,
      title: "Colleges",
      link: "college",
      as: "/blogs/college",
      href: "/blogs/[category]",
      selected: router.query.category === "college" ? true : false,
    },
    {
      img: officebuilding,
      title: "Companies",
      link: "company",
      as: "/blogs/company",
      href: "/blogs/[category]",
      selected: router.query.category === "company" ? true : false,
    },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const checkValue = () => {
    var value = 0;
    if (router.query.category === "students") value = 1;
    else if (router.query.category === "college") value = 2;
    else if (router.query.category === "company") value = 3;
    else value = 0;

    return value;
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" style={{ boxShadow: "none" }}>
        <Tabs value={checkValue()} indicatorColor="primary" textColor="primary" variant="fullWidth" aria-label="full width tabs example">
          {Data.map((item, index) => (
            <Link as={item.as} href={item.href}>
              <Tab label={item.title} {...a11yProps(index)} />
            </Link>
          ))}
        </Tabs>
      </AppBar>
      {/* <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={handleChangeIndex}> */}
      {data.map((item, index) => (
        <>
          <TabPanel dir={theme.direction}>
            {/* <ChipBlogCard item={item} /> */}
            <Blog item={item} />
            {/* <BlogPaper /> */}
          </TabPanel>
        </>
      ))}
      {/* </SwipeableViews> */}
    </div>
  );
}
