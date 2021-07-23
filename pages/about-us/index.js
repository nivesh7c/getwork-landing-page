import React from "react";
import Banner from "../../components/About/Banner";
import CompanyDetail from "../../components/About/CompanyDetail";
import Team from "../../components/About/Team";
import BlueBg from "../../components/About/Banner/BlueBg";
import History from "../../components/About/Stepper/History";
import Achievements from "../../components/About/Achievements";
import Press from "../../components/About/Press";
import Work from "../../components/About/Work";

function about() {
  return (
    <>
      <Banner />
      <CompanyDetail />
      <BlueBg />
      <History />
      <Team />
      <Achievements />
      <Press />
      <Work />
    </>
  );
}

export default about;
