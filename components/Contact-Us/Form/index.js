import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import { Typography, Container } from "@material-ui/core";
import Form from "../../Cards/College/Form";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
    marginTop: "100px",
  },
}));

export default function FormSection() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" className={classes.header}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h2">
              Drop Your Queries like it's Hot here!
            </Typography>
            <Image src="/svg/Contact.svg" height="500px" width="500px" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
