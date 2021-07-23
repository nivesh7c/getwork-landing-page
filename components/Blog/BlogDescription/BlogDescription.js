import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import Image from "next/image";
import Bloger from "../Bloger/index";
import Link from "next/link";
import { STRAPI_API } from "../../../constant";
import Breadcrumbs from "nextjs-breadcrumbs";

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
    marginTop: "100px",
  },
  companydetail: {
    marginTop: "30px",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    marginBottom: "50px",
    justifyContent: "space-between",
  },
  btnItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },
  btn: {
    backgroundColor: "#e2e6ea",
    color: "black",
    borderRadius: "30px",
    paddingRight: "20px",
    paddingLeft: "20px",
  },
}));

export default function BlogDescription({
  data,
  categoryData,
  currentIndex,
  showNext,
  showPrev,
  setButtonClickedNext,
  setButtonClickedPrev,
  currentIndexSet,
}) {
  const classes = useStyles();

  useEffect(() => {
    console.log(categoryData[parseInt(currentIndex - 1)]);
  }, [data]);

  return (
    <>
      <Container maxWidth="lg" className={classes.header}>
        <Typography variant="h6">All Blogs/ {data?.category?.Title}</Typography>
        <Typography variant="h2">{data?.Title}</Typography>
        <br />
        <Bloger data={data} />
        <div>
          <img
            src={`${STRAPI_API}${data.Banner.url}`}
            height="100%"
            width="100%"
          />
        </div>
        <Typography variant="subtitle1">{data?.Description}</Typography>
        <br />
        <br />
        <Typography variant="h5">
          “ You love having a second home but the mortgage is putting a crater
          in your wallet. Many second home owners turn to renting their property
          as a vacation rental “
        </Typography>
        <br />
        <br />
        {currentIndexSet && (
          <div className={classes.btnItem}>
            {showPrev && (
              <Link
                as={`/blog/${categoryData[
                  parseInt(currentIndex - 1)
                ].Title.split(" ").join("_")}=${
                  categoryData[parseInt(currentIndex - 1)].id
                }`}
                href="/blog/[slug]"
              >
                <Button
                  className={classes.btn}
                  onClick={() => {
                    setButtonClickedPrev(true);
                  }}
                >
                  <Typography variant="body2">Previous</Typography>
                </Button>
              </Link>
            )}
            <div
              style={{ backgroundColor: "black", height: "1px", width: "100%" }}
            ></div>
            {showNext && (
              <Link
                as={`/blog/${categoryData[
                  parseInt(currentIndex + 1)
                ].Title.split(" ").join("_")}=${
                  categoryData[parseInt(currentIndex + 1)].id
                }`}
                href="/blog/[slug]"
              >
                <Button
                  className={classes.btn}
                  onClick={() => {
                    setButtonClickedNext(true);
                  }}
                >
                  <Typography variant="body2">Next</Typography>
                </Button>
              </Link>
            )}
          </div>
        )}
      </Container>
    </>
  );
}
