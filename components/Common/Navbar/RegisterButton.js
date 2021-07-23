import { Divider, Menu, MenuItem, Typography } from "@material-ui/core";
import Link from "next/link";
import { useState } from "react";
import { CustomButton } from "../../InputComponent/Button/CustomButton";

export default function RegisterButton() {
  //   const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <CustomButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} type="button" buttonStyle="btn--primary--solid" buttonSize="btn--medium">
        <Typography variant="body2" color="inherit">
          Register{" "}
        </Typography>
      </CustomButton>

      <Menu
        style={{ marginTop: "6px", marginLeft: "80px", borderRadius: 12 }}
        id=""
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Link href="https://app.getwork.org/signup/student">
          <MenuItem onClick={handleClose}>as Student</MenuItem>
        </Link>

        <Divider />
        <Link href="https://app.getwork.org/signup/company">
          <MenuItem onClick={handleClose}>as Company </MenuItem>
        </Link>
      </Menu>
    </>
  );
}
