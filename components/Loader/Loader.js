import React from "react";
import lottie from "lottie-web";
import animationData from "../../public/loader/data.json";
import { Box, Hidden } from "@material-ui/core";
let animObj = null;

class Loader extends React.Component {
  componentDidMount() {
    //call the loadAnimation to start the animation
    animObj = lottie.loadAnimation({
      container: this.animBox, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData, // the path to the animation json
    });
  }
  handleStop = () => {
    animObj.stop();
  };
  handlePlay() {
    animObj.play();
  }
  render() {
    return (
      <div
        className="loader-container flex justify-content-center"
        style={{
          marginTop: "10%",
          // backgroundColor: "#f2f2f2",
        }}
      >
        <Hidden smDown>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <img src="/loader/loopingcircles-3.gif" alt="Loading..." />
          </Box>
        </Hidden>
        <Hidden smUp>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <img src="/loader/loopingcircles-3.gif" alt="Loading..." width="100%" height="auto" />
          </Box>
        </Hidden>
      </div>
    );
  }
}

export default Loader;
