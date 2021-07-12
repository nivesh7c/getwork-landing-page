import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography, Divider } from "@material-ui/core";
import FeaturedCard from "../BlogGrid/FeaturedCard";
import Form from "../Form";
import CommentItem from "./Commentitem";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    //   marginTop: '100px',
  },
  companydetail: {
    marginTop: "30px",
    display: "flex",
    // alignItems: "center",
    alignContent: "center",
    marginBottom: "50px",
    justifyContent: "space-between",
  },
  img: {
    borderRadius: "50%",
  },
}));

export default function Comment() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.header}>
        <Typography variant="h6" color="inherit">
          {" "}
          25 Comments
        </Typography>
        <Divider />

        <Grid container spacing={3} className={classes.companydetail}>
          <Grid item xs={12} md={8}>
            <CommentItem />
            <CommentItem />
            <Form />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeaturedCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
