import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid, Chip } from "@material-ui/core";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import { STRAPI_API } from "../../../constant";

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    boxShadow: "none",
    height: "350px",
    borderRadius: "25px",
    backgroundPosition: "center",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.02)",
      transition: "transform 0.2s",
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    borderRadius: "25px",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    color: "white",
    width: "auto",
    // marginTop:"195px",
    // backgroundColor:"white",
    height: "200px",
    borderRadius: "12px",
    boxShadow: "none",
    border: "none",
    color: "black",
    padding: theme.spacing(5),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(5),
      // paddingRight: 0,
    },
  },
}));
export default function FeaturedCard({ item }) {
  const classes = useStyles();
  return (
    <>
      <div>
        <Link
          as={`/blog/${item?.Title.split(" ").join("_")}=${item?.id}`}
          href="/blog/[slug]"
        >
          <Paper
            className={classes.mainFeaturedPost}
            style={{
              backgroundImage: `url(${STRAPI_API}${item.Banner.formats.thumbnail.url})`,
            }}
          >
            {
              // <img
              //   style={{ display: "none" }}
              //   src="/png/studentbg.png"
              //   alt="de"
              // />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography variant="h3" style={{ color: "white" }}>
                    {item.Title}{" "}
                  </Typography>
                  <Typography variant="overline" style={{ color: "white" }}>
                    {moment(item.created_at).format("DD MMMM YYYY")}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Link>
      </div>
    </>
  );
}
