import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, Button, Hidden } from "@material-ui/core";
import ToolTip from "./ToolTip";
import LeftToolTip from "./LeftToolTip";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  desktoptooltip: {
    height: "254px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  lefttoptooltip: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  lefttooltip: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  expert: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function Help() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden smUp>
        <ToolTip />
      </Hidden>
      <Grid container spacing={3}>
        <Grid item xs>
          <Hidden smDown>
            <div className={classes.desktoptooltip}>
              <div>
                <ToolTip />
              </div>
              <div className={classes.lefttoptooltip}>
                <LeftToolTip />
              </div>
            </div>
          </Hidden>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.expert}>
            <Typography variant="h2">Need help in Job Application?</Typography>
            <br />
            <Typography variant="body2">
              {" "}
              Whatever settling goodness too and honoured she building answered
              her. Strongly thoughts
            </Typography>
            <br />
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ boxShadow: "none", padding: "10px" }}
            >
              <Typography variant="h6" color="inherit">
                {" "}
                Contact our expert
              </Typography>
            </Button>
          </div>
        </Grid>
        <Grid item xs>
          <Hidden smDown>
            <div className={classes.desktoptooltip}>
              <div className={classes.lefttoptooltip}>
                <LeftToolTip />
              </div>
              <div className={classes.lefttooltip}>
                <ToolTip />
              </div>
            </div>
          </Hidden>
        </Grid>
      </Grid>
      <div
        style={{
          marginTop: "15px",
        }}
      >
        <Hidden smUp>
          <ToolTip />
        </Hidden>
      </div>
      <Hidden smUp>
        <div
          className={classes.lefttoptooltip}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <LeftToolTip />
        </div>
      </Hidden>
    </div>
  );
}
