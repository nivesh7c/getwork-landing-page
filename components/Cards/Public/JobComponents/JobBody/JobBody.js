import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, ButtonBase, Typography, Box } from "@material-ui/core";
import PlayCircleFilledWhiteOutlinedIcon from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import HourglassEmptyOutlinedIcon from "@material-ui/icons/HourglassEmptyOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import SubjectIcon from "@material-ui/icons/Subject";
import CustomChip from "../../../CustomChip";
import moment from "moment";

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
}));
function JobBody(props) {
  const { data } = props;

  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={12} container className={classes.info} direction="row" justify="flex-start" alignItems="flex-start" spacing={1}>
          <Grid item xs={6} md={2}>
            <div className={classes.infoitem} style={{}}>
              <PlayCircleFilledWhiteOutlinedIcon className={classes.info_icon} />
              <div className={classes.detail}>
                <Typography variant="body2" color="textSecondary">
                  StartDate
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {moment(data?.job_duration_start).format("DD MMM YY")}
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} md={2}>
            <div className={classes.infoitem}>
              <ButtonBase className={classes.info_icon}>
                <DateRangeOutlinedIcon className={classes.info_icon} />
              </ButtonBase>
              <div className={classes.detail}>
                <Typography variant="body2" color="textSecondary">
                  Duration
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  6 Months
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} md={2}>
            <div className={classes.infoitem}>
              <AccountBalanceWalletOutlinedIcon className={classes.info_icon} />
              <div className={classes.detail}>
                <Typography variant="body2" color="textSecondary">
                  Stipend
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  10000
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} md={2}>
            <div className={classes.infoitem}>
              <HourglassEmptyOutlinedIcon className={classes.info_icon} />
              <div className={classes.detail}>
                <Typography variant="body2" color="textSecondary">
                  Apply By
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {moment(data?.apply_end_date).format("DD MMM YY")}
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} md={2}>
            <div className={classes.infoitem}>
              <WorkOutlineOutlinedIcon className={classes.info_icon} />
              <div className={classes.detail}>
                <Typography variant="body2" color="textSecondary">
                  Job Type
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Internship
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      {data?.job_location?.length > 0 && (
        <div className={classes.location}>
          <Box style={{ display: "flex" }}>
            <RoomOutlinedIcon />
            <Typography variant="body2" color="textSecondary">
              Location
            </Typography>
          </Box>
          {data?.job_location?.map((item, index) => (
            <CustomChip item={item.city} index={index} />
          ))}
        </div>
      )}
      {data?.eligibility_criteria?.skills?.length > 0 && (
        <div className={classes.skill}>
          <Box style={{ display: "flex" }}>
            <SubjectIcon />
            <Typography variant="body2" color="textSecondary">
              Skills
            </Typography>
          </Box>
          {data?.eligibility_criteria?.skills?.map((item, index) => (
            <CustomChip item={item.skill_name} index={index} />
          ))}
        </div>
      )}
    </>
  );
}
export default JobBody;
