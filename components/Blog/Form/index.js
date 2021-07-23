import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, CircularProgress } from "@material-ui/core";
import { emailRegex } from "../../../utils/extra";

const useStyles = makeStyles((theme) => ({
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
export default function Form({ idBlog, singleBlogData, setSingleBlogData, name, setName, email, setEmail, loader, message, setMessage, addComment }) {
  const classes = useStyles();
  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [messageError, setMessageError] = useState();

  const validate = () => {
    if (!message) {
      setMessageError("PLease enter your comment");
      return;
    }
    if (!name) {
      setNameError("Please Enter your name!");
      return;
    }
    if (!email) {
      setEmailError("Please Enter your email!");
      return;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Please Enter correct email!");
      return;
    }

    addComment();
  };

  return (
    <div className={classes.root}>
      {/* <Paper className={classes.paper}> */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <CssTextFieldNew
            error={messageError ? true : false}
            helperText={<span>{messageError}</span>}
            multiline
            style={{ height: "200px" }}
            className={classes.margin}
            label="Message"
            rows={5}
            variant="outlined"
            id="custom-css-outlined-input"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setMessageError();
            }}
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <CssTextField
            error={nameError ? true : false}
            helperText={<span>{nameError}</span>}
            className={classes.margin}
            label="Name"
            variant="outlined"
            id="custom-css-outlined-input"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError();
            }}
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <CssTextField
            error={emailError ? true : false}
            helperText={<span>{emailError}</span>}
            className={classes.margin}
            label="Email ID"
            variant="outlined"
            id="custom-css-outlined-input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError();
            }}
          />
        </Grid>

        <Grid item md={2} xs={2}>
          <div>
            <Button className={classes.btn} variant="contained" color="primary" onClick={() => validate()}>
              {loader ? <CircularProgress style={{ color: "#fff" }} size={25} /> : <Typography variant="subtitle2"> Submit </Typography>}
            </Button>
          </div>
        </Grid>
      </Grid>
      {/* </Paper> */}
    </div>
  );
}
