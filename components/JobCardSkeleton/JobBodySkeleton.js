import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoitem: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-around",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  info_icon: {
    color: "#6c757d",
    height: "18px",
  },
  detail: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    alignContent: "center",
  },
  location: {
    color: "#6c757d",
    marginTop: "10px",
  },
  skill: {
    marginTop: "15px",
    color: "#6c757d",
  },
  btn: {
    marginTop: "15px",
  },
  skeletonStyling: {
    borderRadius: 12,
    background: "linear-gradient(to left, #ffffff, rgba(255, 255, 255, 0.65) 0%, rgba(0, 123, 255, 0.25) 42%)",
  },
}));
function JobBody(props) {
  const { data } = props;

  const classes = useStyles();
  return (
    <>
      <Box display="flex" flexDirection="row" justifyContent="space-between" width="80%">
        <Skeleton variant="rect" className={classes.skeletonStyling} width={68} height={26} style={{ borderRadius: 2 }} />
        <Skeleton variant="rect" className={classes.skeletonStyling} width={68} height={26} style={{ borderRadius: 2 }} />
        <Skeleton variant="rect" className={classes.skeletonStyling} width={68} height={26} style={{ borderRadius: 2 }} />
        <Skeleton variant="rect" className={classes.skeletonStyling} width={68} height={26} style={{ borderRadius: 2 }} />
        <Skeleton variant="rect" className={classes.skeletonStyling} width={68} height={26} style={{ borderRadius: 2 }} />
      </Box>
      <div className={classes.location}>
        <Box style={{ display: "flex", marginBottom: 10 }}>
          <Typography variant="body2" color="textSecondary">
            <Skeleton variant="rect" className={classes.skeletonStyling} width={104} height={9.5} style={{ borderRadius: 1 }} />
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row">
          <Skeleton variant="rect" className={classes.skeletonStyling} width={82} height={24} style={{ marginRight: 10 }} />
          <Skeleton variant="rect" className={classes.skeletonStyling} width={82} height={24} style={{ marginRight: 10 }} />
          <Skeleton variant="rect" className={classes.skeletonStyling} width={82} height={24} style={{ marginRight: 10 }} />
        </Box>{" "}
      </div>

      <div className={classes.skill}>
        <Box style={{ display: "flex", marginBottom: 10 }}>
          <Skeleton variant="rect" className={classes.skeletonStyling} width={104} height={9.5} style={{ borderRadius: 1 }} />{" "}
        </Box>
        <Box display="flex" flexDirection="row">
          <Skeleton variant="rect" className={classes.skeletonStyling} width={82} height={24} style={{ marginRight: 10 }} />
          <Skeleton variant="rect" className={classes.skeletonStyling} width={82} height={24} style={{ marginRight: 10 }} />
          <Skeleton variant="rect" className={classes.skeletonStyling} width={82} height={24} style={{ marginRight: 10 }} />
        </Box>
      </div>
    </>
  );
}
export default JobBody;
