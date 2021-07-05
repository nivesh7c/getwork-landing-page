import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { CustomButton } from "../InputComponent/Button/CustomButton";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  sort: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "240px",
    display: "flex",
    flexDirection: "row",
  },
  newbutton: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
  },
}));

export default function RecommendedFilter({ sortBy, setSortBy, setFilterIsApplied }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" padding="2% 0%">
        <div className={classes.sort}>
          <Typography variant="caption">Sort By</Typography>

          <CustomButton onClick={handleClick} type="button" buttonStyle="btn--primary--outline" buttonSize="btn--small" endicon="ArrowDropDownIcon">
            <Typography variant="caption" className={classes.newbutton}>
              {" "}
              {sortBy?.name}
              <ArrowDropDownIcon />
            </Typography>
          </CustomButton>

          <Menu style={{ marginTop: "50px" }} id="fade-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose} TransitionComponent={Fade}>
            <MenuItem
              onClick={() => {
                handleClose();
                setSortBy({ name: "Recommended for you", value: "recommended" });
                setFilterIsApplied(true);
              }}
            >
              Recommended for you
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                setSortBy({ name: "Latest Jobs", value: "latest" });
                setFilterIsApplied(true);
              }}
            >
              Latest Jobs
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                setSortBy({ name: "Popular Jobs", value: "popular" });
                setFilterIsApplied(true);
              }}
            >
              Popular Jobs
            </MenuItem>
          </Menu>
        </div>
      </Box>
    </>
  );
}
