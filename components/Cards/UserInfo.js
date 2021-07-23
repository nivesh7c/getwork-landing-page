import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { CustomButton } from "../InputComponent/Button/CustomButton";
import Progress from "./Progress";
import { checkLinking } from "../../utils/checkLinking";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // marginTop:"30px"
  },
  paper: {
    padding: theme.spacing(3),
    margin: "auto",
    borderRadius: "30px",
    marginTop: "5px",
    boxShadow: "none",

    border: "1px solid  #E2E6EA",
    backgroundColor: "#FFFFFF",
  },
  img: {
    margin: "auto",
    display: "block",
    borderRadius: "50%",
  },
  userinfo: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  newbutton: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
  },
  update: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
}));

export default function UserInfo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.userinfo}>
          <Image className={classes.img} src="/img/user.png" alt="Picture of the author" width="110px" height="110px" />
          <Grid container wrap="nowrap" direction="column" justify="center" alignItems="center">
            <Grid item xs>
              <Typography variant="h6">Demo Name</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body2"> B Tech. in Computer Science</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body2"> at Delhi Technology University</Typography>
            </Grid>
          </Grid>
        </div>
        <Progress />
        {parseFloat(localStorage.getItem("percentage_completed")) !== parseFloat(100) && (
          <div className={classes.update}>
            <Link href={checkLinking(localStorage.getItem("user_type"))}>
              <CustomButton type="button" buttonStyle="btn--primary--solid" buttonSize="btn--medium">
                <Typography variant="body2" color="inherit">
                  Update
                </Typography>
              </CustomButton>
            </Link>
          </div>
        )}
      </Paper>
    </div>
  );
}
