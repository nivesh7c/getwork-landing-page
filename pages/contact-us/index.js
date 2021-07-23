import React from "react";
import Head from "next/head";
import FormSection from "../../components/Contact-Us/Form/index";
import CardGrid from "../../components/Contact-Us/CardGrid";
import Location from "../../components/Contact-Us/Loaction";

function contact() {
  return (
    <>
      <FormSection />
      <CardGrid />
      <Location />
    </>
  );
}

export default contact;
