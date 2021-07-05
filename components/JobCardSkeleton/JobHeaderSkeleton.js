import { ButtonBase, Grid, Hidden, IconButton, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  img: {
    borderRadius: "12px",
  },
  skeletonStyling: {
    borderRadius: 12,
    background: "linear-gradient(to left, #ffffff, rgba(255, 255, 255, 0.65) 0%, rgba(0, 123, 255, 0.25) 42%)",
  },
}));

export default function JobHeader(props) {
  const classes = useStyles();
  const { data } = props;

  return (
    <>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={4} md={3}>
            <ButtonBase>
              <Skeleton variant="rect" width={100} height={70} className={classes.skeletonStyling} />
            </ButtonBase>
          </Grid>
          <Grid item md={6} xs={8} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography gutterBottom variant="h5">
                  <Skeleton variant="rect" className={classes.skeletonStyling} style={{ borderRadius: 3 }} height={28} width={220} />{" "}
                </Typography>
                <Typography variant="subtitle1" color="secondary">
                  <Skeleton variant="rect" className={classes.skeletonStyling} style={{ borderRadius: 3 }} height={20} width={220} />{" "}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} md={2}>
            <Box display="flex" flexDirection="row" marginTop="0px" justifyContent="flex-end">
              <Skeleton variant="rect" className={classes.skeletonStyling} style={{ marginRight: 10, borderRadius: 2 }} height={18} width={20} />
              <Skeleton variant="rect" className={classes.skeletonStyling} style={{ borderRadius: 2 }} height={18} width={20} />
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
