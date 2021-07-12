import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Divider } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles(theme => ({
  comment: {
    marginBottom: "30px",
  },
  img: {
    borderRadius: "50%",
  },
}));

export default function CommentItem() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.comment}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Image
              src="/png/collegebanner.png"
              className={classes.img}
              height="70px"
              width="70px"
            />
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h6">Julie Gomez</Typography>
            <br />
            <Typography variant="body2">4th November</Typography>
            <br />
            <Typography variant="body2">
              SyntSynth polaroid bitters chillwave pickled. Vegan disrupt
              tousled, Portland keffiyeh aesthetic food truck sriracha cornhole
              single-origin coffee church-key roof party.h polaroid bitters
              chillwave pickled. Vegan disrupt tousled, Portland keffiyeh
              aesthetic food truck sriracha cornhole single-origin coffee
              church-key roof party.
            </Typography>
            <br />
            <Divider />
          </Grid>
          <Grid item xs={2}>
            <Typography color="primary" variant="body2">
              Reply
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
