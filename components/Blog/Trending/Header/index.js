import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import Image from "next/image";
import FeaturedCard from "../../BlogGrid/FeaturedCard";
import BlogInfo from "../../BlogInfo";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    paddingLeft: "10px",
    paddingRight: "10px",
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
}));

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.header}>
        <Typography variant="h6">All Blogs/ Students</Typography>
        <br />
        <Typography variant="h2">
          Hot Looks: A Fun, Random Beauty Report Straight From The Closet
        </Typography>
        <br />
        <BlogInfo />
        <div>
          <img src="/png/collegebanner.png" height="100%" width="100%" />
        </div>

        <Typography variant="subtitle1">
          You love having a second home but the mortgage is putting a crater in
          your wallet. Many second home owners turn to renting their property as
          a vacation rental to help defray the costs of ownership. How do you
          price a vacation home rental without overcharging but making enough to
          cover your costs? Do your research.
          <br />
          <br />
          Find out what other owners of, similar sized homes in the area are
          charging. You can ask a local real estate agent for a price range,
          scan local papers or go online. There are also vacation rental sites
          like eVaca.com. These types of sites have advertisements from owners
          around the world and weekly rates for the properties are listed.
          <br />
          <br />
          You also want to figure out what lengths you want to rent your
          property for. A Florida property in July near the beach will go for
          top dollar for a week. However, that same property in January you
          might attract the snowbirds who want to rent at a lower price and rent
          it out on a monthly basis. You have to answer questions like, “do I
          want to mess around with weekend or nightly rentals” and “is it worth
          the hassle”.
          <br />
          <br />
          You love having a second home but the mortgage is putting a crater in
          your wallet. Many second home owners turn to renting their property as
          a vacation rental to help defray the costs of ownership. How do you
          price a vacation home rental without overcharging but making enough to
          cover your costs? Do your research.
          <br />
          <br />
          Find out what other owners of, similar sized homes in the area are
          charging. You can ask a local real estate agent for a price range,
          scan local papers or go online. There are also vacation rental sites
          like eVaca.com. These types of sites have advertisements from owners
          around the world and weekly rates for the properties are listed.
          <br />
          <br />
          You also want to figure out what lengths you want to rent your
          property for. A Florida property in July near the beach will go for
          top dollar for a week. However, that same property in January you
          might attract the snowbirds who want to rent at a lower price and rent
          it out on a monthly basis. You have to answer questions like, “do I
          want to mess around with weekend or nightly rentals” and “is it worth
          the hassle”.
        </Typography>
        <br />
        <br />
        <Typography variant="h5">
          “ You love having a second home but the mortgage is putting a crater
          in your wallet. Many second home owners turn to renting their property
          as a vacation rental “
        </Typography>
        <br />
        <br />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              backgroundColor: "#e2e6ea",
              color: "black",
              borderRadius: "30px",
              paddingRight: "30px",
              paddingLeft: "30px",
            }}
          >
            <Typography variant="body2">Preview</Typography>
          </Button>

          <div
            style={{ backgroundColor: "black", height: "1px", width: "100%" }}
          ></div>
          <Button
            style={{
              backgroundColor: "#e2e6ea",
              color: "black",
              borderRadius: "30px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <Typography variant="body2">Next</Typography>
          </Button>
        </div>
        <br />
        <br />

        {/* <div style={{width:"100px",height:"5px", backgroundColor:"#007bff", borderRadius:"30px" }} ></div> */}
      </Container>
    </>
  );
}
