import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import Link from "next/link";
import { STRAPI_API } from "../../../../constant";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    border: "solid 0.5px #f1f1f1",
    boxShadow: "none",
    borderRadius: 10,
  },
});

export default function Blog({ item, fromSlug, fetchData, setButtonClicked }) {
  const classes = useStyles();

  return (
    <Link as={`/blog/${item?.Title.split(" ").join("_")}=${item?.id}`} href="/blog/[slug]">
      <Card
        className={classes.root}
        onClick={() => {
          if (fromSlug) {
            setButtonClicked(true);
            fetchData(item?.id);
          }
        }}
      >
        <CardActionArea>
          <CardMedia component="img" alt="Contemplative Reptile" height="140" image={`${STRAPI_API}${item.Banner.formats.thumbnail.url}`} title="Contemplative Reptile" />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              By <span style={{ fontSize: "18px", color: "black" }}> {item?.author?.FirstName + " " + item?.author?.LastName}</span> |{" "}
              {moment(item.created_at).format("DD MMMM YYYY")}
            </Typography>
            <Typography gutterBottom variant="h6">
              {item.Title}{" "}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
