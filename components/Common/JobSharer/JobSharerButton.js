import React, { useState, useEffect } from "react";
import ShareIcon from "@material-ui/icons/Share";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
} from "react-share";

import { makeStyles, createStyles, Box } from "@material-ui/core";
import { APP_ENDPOINT } from "../../../constant";
import { job_sharer_content } from "./JobSharerContentUtility";

function JobSharerButton({ detail, page, shareOpen }) {
  const classes = useStyles();
  const [data, setData] = useState({});
  useEffect(() => {
    const user = localStorage.getItem("user_type");
    const aa = job_sharer_content(page, user ? user.toUpperCase() : "", detail);
    setData(aa);
  }, []);
  return data?.url ? (
    <Box
      className={classes.BoxStyle}
      onClick={e => e.stopPropagation()}
      style={{ transition: "all 0.3s ease-in-out 0s", float: "right" }}
    >
      {/* <ShareIcon className={classes.shareIconColor} /> */}
      <div className={classes.socialIconStyle}>
        <WhatsappShareButton
          style={{ outline: "none" }}
          url={data.url}
          title={data.whatsapp.title}
          separator=" : "
        >
          <WhatsappIcon round={true} size={32} />
        </WhatsappShareButton>
      </div>

      <div className={classes.socialIconStyle}>
        <FacebookShareButton
          style={{ outline: "none" }}
          url={data.url}
          hashtag={data.facebook.hashtag}
        >
          <FacebookIcon round={true} size={32} />
        </FacebookShareButton>
      </div>

      <div className={classes.socialIconStyle}>
        <LinkedinShareButton
          style={{ outline: "none" }}
          url={data.url}
          title={data.linkedin.title}
          summary={data.linkedin.summary}
          source={APP_ENDPOINT}
        >
          <LinkedinIcon round={true} size={32} />
        </LinkedinShareButton>
      </div>
      <div className={classes.socialIconStyle}>
        <EmailShareButton
          style={{ outline: "none" }}
          url={data.url}
          subject={data.email.subject}
          body={data.email.body}
        >
          <EmailIcon round={true} size={32} />
        </EmailShareButton>
      </div>
      <div className={classes.socialIconStyle}>
        <TelegramShareButton
          style={{ outline: "none" }}
          url={data.url}
          title={data.telegram.title}
        >
          <TelegramIcon round={true} size={32} />
        </TelegramShareButton>
      </div>
    </Box>
  ) : null;
}

const useStyles = makeStyles(() =>
  createStyles({
    BoxStyle: {
      display: "flex",
      alignItems: "center",
      justifyItems: "space-between",
    },

    shareIconColor: {
      fill: "#3282C4",
    },
    socialIconStyle: {
      paddingLeft: "3px",
      paddingRight: "3px",
    },
  })
);

export default JobSharerButton;
