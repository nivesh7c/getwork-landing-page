import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid, Chip } from "@material-ui/core";
import Image from "next/image";
import moment from "moment";
import college from "../../../public/png/college.png";
import { useTheme } from "@material-ui/core";
import Link from "next/link";
import { STRAPI_API } from "../../../constant";

const useStyles = makeStyles((theme) => ({
  // img: {
  //   display: "flex",
  //   flexDirection: "row",
  //   alignContent: "center",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  mainFeaturedPost: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "200px",
    borderRadius: "25px",
    backgroundPosition: "center",
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
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
    backgroundColor: "rgba(0,0,0,.1)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(5),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(2),
      paddingRight: 0,
    },
  },
  chip: {
    color: "white",
    paddingLeft: "10px",
    paddingRight: "10px",
    backgroundColor: "black",
  },
}));
export default function ChipBlogCard({ item, fromSlug, fetchData, setButtonClicked }) {
  const classes = useStyles();
  const theme = useTheme();
  console.log(item);
  return (
    <>
      <div>
        <Link as={`/blog/${item?.Title.split(" ").join("_")}=${item?.id}`} href="/blog/[slug]">
          <Paper
            className={classes.mainFeaturedPost}
            style={{
              backgroundImage: `url(${STRAPI_API}${item.Banner.formats.thumbnail.url})`,
            }}
            onClick={() => {
              if (fromSlug) {
                setButtonClicked(true);
                fetchData(item?.id);
              }
            }}
          >
            {/* {
            <img
              style={{ display: "none" }}
              src="/png/collegebanner.png"
              alt="de"
            />
          } */}
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Chip size="small" label="Job" className={classes.chip} />
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Link>

        <Typography variant="h6" color="inherit" paragraph>
          {item.Title}{" "}
        </Typography>

        <Typography variant="body2" color="inherit" paragraph>
          {moment(item.created_at).format("DD MMMM YYYY")}
        </Typography>
      </div>
    </>
  );
}
