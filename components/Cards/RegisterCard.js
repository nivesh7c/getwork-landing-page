import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Image from "next/image";
import { CustomButton } from "../InputComponent/Button/CustomButton";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "30px",
  },
  paper: {
    padding: theme.spacing(3),
    margin: "auto",
    // maxWidth: 500,
    borderRadius: "30px",
    marginTop: "30px",
    //backdropFilter: "blur(30px)",
    boxShadow: "none",

    border: "1px solid  #E2E6EA",
    backgroundColor: "#FFFFFF",
  },
  paper1: {
    padding: theme.spacing(3),
    margin: "auto",
    borderRadius: "30px",
    boxShadow: "none",

    border: "1px solid  #E2E6EA",
    backgroundColor: "#FFFFFF",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function RegisterCard() {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    <>
      <Paper className={!localStorage.getItem("gw_token") ? classes.paper1 : classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5"> Get Personaliized Job Recommendations</Typography>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="body2" color="textSecondary">
                  Registering gives you the benefit to browse & apply variety of Internships and Jobs based on your preferences{" "}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <ButtonBase className={classes.image}>
              <Image className={classes.img} src="/img/Job.svg" alt="Picture of the author" width="110px" height="110px" />
            </ButtonBase>
          </Grid>
        </Grid>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", justifyContent: "center" }}>
          <Link href="https://app.getwork.org/signup/student">
            <CustomButton type="button" buttonStyle="btn--primary--solid" buttonSize="btn--medium">
              <Typography variant="body2" color="inherit">
                {" "}
                Register Now
              </Typography>
            </CustomButton>
          </Link>
        </div>
      </Paper>
      {/* </div> */}
    </>
  );
}
