import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography } from "@material-ui/core";
import FeaturedCard from "../BlogGrid/FeaturedCard";

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
    // paddingRight: 0,
    // paddingLeft: "10px",
    // paddingRight: "10px",
    //  marginTop: '100px',
  },
  companydetail: {
    marginTop: "30px",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    marginBottom: "50px",
    justifyContent: "space-between",
  },
}));

export default function Featured({ featured }) {
  const classes = useStyles();
  console.log(featured);
  return (
    <>
      <Container maxWidth="lg" className={classes.header}>
        <Typography variant="h2">Featured</Typography>
        <Grid container spacing={3} className={classes.companydetail}>
          {featured.map((item, index) => (
            <>
              <>
                {(index + 2) % 2 === 0 ? (
                  <Grid item xs={12} md={4}>
                    <FeaturedCard item={item} />
                  </Grid>
                ) : (
                  <Grid item xs={12} md={8}>
                    <FeaturedCard item={item} />
                  </Grid>
                )}
              </>
            </>
          ))}
        </Grid>
      </Container>
    </>
  );
}
