import React from "react";
import { Parallax } from "react-parallax";
import { Container } from "@material-ui/core";
import Help from "../Help";

function Jobbg() {
  return (
    <>
      <Parallax bgImage="/svg/Oval.svg" strength={10}>
        <div style={{ height: 500, marginTop: "130px", marginBottom: "35px" }}>
          <Container maxWidth="lg">
            <Help />
          </Container>
        </div>
      </Parallax>
    </>
  );
}

export default Jobbg;
