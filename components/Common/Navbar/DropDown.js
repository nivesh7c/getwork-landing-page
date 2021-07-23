import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import { CustomButton } from "../../InputComponent/Button/CustomButton";
import {
  Typography,
  Button,
  Grid,
  Paper,
  Divider,
  Menu,
  MenuItem,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "next/link";
import SubList from "./SubList";
import DropDownList from "./DropDownList";

const useStyles = makeStyles({
  btn: {
    "&:hover": {
      color: "#007bff",
    },
    padding: "10px",
  },
  tab: {
    borderRadius: "30px",
  },
  paper: {
    padding: 10,
    //textAlign: "center",

    boxShadow: "none",

    width: "300px",
  },
  drop: {
    marginLeft: "16px",
    color: "#007bff",
  },
});

const StyledMenu = withStyles({
  paper: {
    border: ".5px solid #d3d4d5",
    borderRadius: "12px",
  },
})(props => (
  <Menu
    style={{ top: "7px" }}
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  //   root: {
  //     "&:focus": {
  //       //   backgroundColor: theme.palette.primary.main,
  //       "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
  //         color: theme.palette.common.white,
  //       },
  //     },
  //   },
}))(MenuItem);

export default function DropDown() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const data = [
    {
      title: "Internships",
      sub_title: [
        {
          heading: "Location",
          data: [
            { heading: "Internships in Delhi", link: `/internships-in-delhi` },
            {
              heading: "Internships in Bangalore",
              link: `/internships-in-bangalore`,
            },
          ],
        },
        {
          heading: "Categories",
          data: [
            {
              heading: "Communications Internship",
              link: `/internships-in-communications-field`,
            },
          ],
        },
        {
          heading: "",
          data: [
            {
              heading: "View all internships",
              link: `/internships`,
              color: true,
            },
          ],
        },
      ],
    },
    {
      title: "Full Time Job",
      sub_title: [
        {
          heading: "Location",
          data: [
            { heading: "Jobs in Delhi", link: `/full-time-jobs-in-delhi` },
            {
              heading: "Jobs in Bangalore",
              link: `/full-time-jobs-in-bangalore`,
            },
          ],
        },
        {
          heading: "Categories",
          data: [
            {
              heading: "Communications Full time Job",
              link: `/full-time-jobs-in-communications-field`,
            },
          ],
        },
        {
          heading: "",
          data: [
            {
              heading: "View all Full time Jobs",
              link: `/full-time-jobs`,
              color: true,
            },
          ],
        },
      ],
    },
    {
      title: "Category",
      sub_title: [
        {
          heading: "",
          data: [
            { heading: "Communications", link: `/communications-job` },
            {
              heading: "Agriculture Food & Horticulture",
              link: `/agriculture-food-and-horticulture-job`,
            },
            { heading: "Arts & Design", link: `/arts-&-design-job` },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Button
        color="primary"
        className={classes.tab}
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Typography variant="body2" className={classes.btn}>
          Opurtunities
        </Typography>
        <ExpandMoreIcon style={{ color: "black", marginLeft: "-5px" }} />
      </Button>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {" "}
        <Grid container spacing={3}>
          {data.map(item => (
            <Grid item xs={4} sm={4}>
              <Paper className={classes.paper}>
                {" "}
                <Typography className={classes.drop} variant="h6">
                  {item.title}
                </Typography>
                {/* <SubList type={"internships"} /> */}
                {item.sub_title.map((item2, index) => (
                  <>
                    <DropDownList
                      array={item2.data}
                      heading={item2.heading}
                      handleClose={handleClose}
                    />
                    {(index === 0 || index === 1) &&
                      item.title !== "Category" && <Divider />}
                  </>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </StyledMenu>
    </>
  );
}
