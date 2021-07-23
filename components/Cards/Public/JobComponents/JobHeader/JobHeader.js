import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  ButtonBase,
  Typography,
  IconButton,
  Hidden,
} from "@material-ui/core";
import Image from "next/image";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import JobSharerButton from "../../../../Common/JobSharer/JobSharerButton";
import { jobSharerDetail } from "../../../../Common/JobSharer/jobSharerDetail";

const useStyles = makeStyles(theme => ({
  img: {
    borderRadius: "12px",
  },
}));

export default function JobHeader(props) {
  const classes = useStyles();
  const { data } = props;
  const [shareOpen, setShareOpen] = React.useState(false);
  return (
    <>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={4} md={3}>
            <ButtonBase>
              <Image
                className={classes.img}
                src={
                  data?.company[0]?.company_logo
                    ? data?.company[0]?.company_logo
                    : "/company/default.jpg"
                }
                alt="company image"
                width="100px"
                height="70px"
              />
            </ButtonBase>
          </Grid>
          <Grid item md={9} xs={8} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography gutterBottom variant="h5">
                  {data?.job_title}
                </Typography>
                <Typography variant="subtitle1" color="secondary">
                  {data?.company[0]?.company_name}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <IconButton
                aria-label="save"
                onClick={() => {
                  setShareOpen(!shareOpen);
                }}
                style={{
                  transition: "all 0.3s ease-in-out 0s",
                }}
              >
                <ShareOutlinedIcon color="secondary" />
              </IconButton>
            </Grid>
            <Grid item xs={12} md={12}>
              {shareOpen && (
                <JobSharerButton
                  detail={jobSharerDetail(data)}
                  page="ALL"
                  shareOpen={shareOpen}
                />
              )}
            </Grid>
            {/* <Hidden xsDown>
              <Grid item>
                <IconButton aria-label="share">
                  <BookmarkBorderOutlinedIcon color="secondary" />
                </IconButton>
              </Grid>
            </Hidden> */}
          </Grid>
        </Grid>
      </div>
    </>
  );
}
