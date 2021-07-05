import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    border: "solid 0.5px #b0b6ba",
    boxShadow: "none",
  },
});

export default function Blog() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia component="img" alt="Contemplative Reptile" height="140" image="/png/up.jpg" title="Contemplative Reptile" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            By <span style={{ fontSize: "18px", color: "black" }}> Abdullah</span> | 03 March 2019
          </Typography>
          <Typography gutterBottom variant="h6">
            Increasing Prosperity With Positive Thinking
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
