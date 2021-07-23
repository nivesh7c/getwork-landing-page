import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid, Chip } from "@material-ui/core";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import { STRAPI_API } from "../../../constant";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "200px",
    borderRadius: "25px",
    backgroundPosition: "center",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.02)",
      transition: "transform 0.2s",
    },
  },
}));
export default function TrendingCard({ item }) {
  const classes = useStyles();
  return (
    <>
      <Link as={`/blog/${item?.Title.split(" ").join("_")}=${item?.id}`} href="/blog/[slug]">
        <>
          <Paper
            className={classes.mainFeaturedPost}
            style={{
              backgroundImage: `url(${STRAPI_API}${item.Banner.formats.thumbnail.url})`,
            }}
          ></Paper>
          <Typography variant="h6" color="inherit" paragraph>
            {item.Title}{" "}
          </Typography>

          <Typography variant="body2" color="inherit" paragraph>
            {moment(item.created_at).format("DD MMMM YYYY")}
          </Typography>
        </>
      </Link>
    </>
  );
}
