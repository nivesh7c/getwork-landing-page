import React from "react";
import {
  Typography,
  Divider,
  Paper,
  Container,
  Button,
  Avatar,
  Grid,
  Chip,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Image from "next/image";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
    marginTop: "10px",
    marginBottom: "20px",
  },
  companydetail: {
    marginTop: "30px",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    marginBottom: "50px",
    justifyContent: "space-between",
  },
  img: {
    borderRadius: "50%",
  },
}));

export default function BlogInfo() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.header}>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "auto",
            }}
          >
            <Grid container spacing={1}>
              <Grid item xs={2} md={1}>
                <Image
                  src="/png/collegebanner.png"
                  className={classes.img}
                  height="60px"
                  width="60px"
                />
              </Grid>
              <div></div>
              <Grid item xs={6} md={2}>
                <div style={{ marginLeft: "0px" }}>
                  <Typography variant="h6">By Willie Farmer</Typography>
                  <Typography variant="body2">8 min ago</Typography>
                </div>
              </Grid>

              <Grid item xs={3} md={1}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Divider
                    orientation="vertical"
                    flexItem
                    style={{
                      backgroundColor: "black",
                      height: "50px",
                      color: "black",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    <Chip
                      label="Student"
                      style={{ backgroundColor: "black", color: "white" }}
                    />
                  </div>
                  <Divider
                    orientation="vertical"
                    flexItem
                    style={{
                      backgroundColor: "black",
                      height: "50px",
                      color: "black",
                    }}
                  />
                </div>
              </Grid>

              <Grid item xs={3} md={1}>
                <div
                  style={{
                    display: "flex",
                    // paddingLeft: "20px",
                    // paddingRight: "20px",

                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6">45</Typography>
                    <Typography variant="body2">Comments</Typography>
                  </div>
                  <Divider
                    orientation="vertical"
                    flexItem
                    style={{
                      height: "50px",
                      backgroundColor: "black",
                      color: "black",
                    }}
                  />
                </div>
              </Grid>

              <Grid item xs={3} md={1}>
                <div
                  style={{
                    display: "flex",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">45</Typography>
                  <Typography variant="body2">Share</Typography>
                </div>
              </Grid>
              <Grid item xs md={2}>
                <Paper
                  style={{
                    borderRadius: "30px",
                    boxShadow: "none",
                    width: "150px",
                    border: "solid 0.5px #e2e6ea",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <IconButton aria-label="delete">
                    <WhatsAppIcon />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <FacebookIcon />
                  </IconButton>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </>
  );
}
