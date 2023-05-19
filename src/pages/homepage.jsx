import React from "react";
import Layout from "./Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Consultant from "../components/Consultant";
import Step from "../components/Step";
import Join from "../components/Join";

const homepage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Consultant />
      <Step />
      <Join />
    </Layout>
  );
};

export default homepage;
