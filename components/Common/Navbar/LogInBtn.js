import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { CustomButton } from "../../InputComponent/Button/CustomButton";
import { Typography } from "@material-ui/core";

const StyledMenu = withStyles({
  paper: {
    border: ".5px solid #d3d4d5",
    borderRadius: "10px",
  },
})(props => (
  <Menu
    style={{ top: "14px" }}
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
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function LogInBtn() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CustomButton
        type="button"
        buttonStyle="btn--primary--outline"
        buttonSize="btn--medium"
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Typography variant="body2" color="inherit">
          Login{" "}
        </Typography>
      </CustomButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText primary="Student" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="College" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Company" />
        </StyledMenuItem>
      </StyledMenu>
    </>
  );
}
