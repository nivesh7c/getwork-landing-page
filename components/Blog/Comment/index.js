import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography, Divider } from "@material-ui/core";
import FeaturedCard from "../BlogGrid/FeaturedCard";
import Form from "../Form";
import CommentItem from "./CommentItem";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
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

export default function Comment({
  comments,
  idBlog,
  singleBlogData,
  setSingleBlogData,
  name,
  setName,
  email,
  setEmail,
  loader,
  message,
  setMessage,
  addComment,
  featured_blog,
}) {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.header}>
        <Typography variant="h6" color="inherit">
          {" "}
          {comments?.length} Comments
        </Typography>
        <Divider />

        <Grid container spacing={3} className={classes.companydetail}>
          <Grid item xs={12} md={8}>
            {comments?.map((item, value) => (
              <CommentItem item={item} />
            ))}
            <Form
              idBlog={idBlog}
              setSingleBlogData={setSingleBlogData}
              singleBlogData={singleBlogData}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              loader={loader}
              message={message}
              setMessage={setMessage}
              addComment={addComment}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeaturedCard item={featured_blog} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
