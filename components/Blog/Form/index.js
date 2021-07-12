import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    // margin: theme.spacing(1),
    width: "100%",
  },
  btn: {
    paddingLeft: "32%",
    paddingRight: "32%",
    borderRadius: "30px",
    padding: "12px",
    boxShadow: "none",
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#007bff",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#007bff",
      borderRadius: "30px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "solid 1.5px #e2e6ea",
        borderRadius: "30px",
      },
      "&:hover fieldset": {
        borderColor: "black",
        borderRadius: "30px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#007bff",
        borderRadius: "30px",
      },
    },
  },
})(TextField);

const CssTextFieldNew = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#007bff",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#007bff",
      borderRadius: "30px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "solid 1.5px #e2e6ea",
        borderRadius: "30px",
        height: "200px",
      },
      "&:hover fieldset": {
        borderColor: "black",
        borderRadius: "30px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#007bff",
        borderRadius: "30px",
      },
    },
  },
})(TextField);
export default function Form() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Paper className={classes.paper}> */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <CssTextFieldNew
            multiline
            style={{ height: "200px" }}
            className={classes.margin}
            label="Message"
            rows={9}
            variant="outlined"
            id="custom-css-outlined-input"
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <CssTextField
            className={classes.margin}
            label="Name"
            variant="outlined"
            id="custom-css-outlined-input"
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <CssTextField
            className={classes.margin}
            label="Email ID"
            variant="outlined"
            id="custom-css-outlined-input"
          />
        </Grid>

        <Grid item md={2} xs={2}>
          <div>
            <Button className={classes.btn} variant="contained" color="primary">
              <Typography variant="subtitle2">Submit</Typography>
            </Button>
          </div>
        </Grid>
      </Grid>
      {/* </Paper> */}
    </div>
  );
}
