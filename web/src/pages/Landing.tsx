import React, { useState, useEffect } from "react";
import Examples from "../components/Examples";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Output from "../components/Output";
import Popular from "../components/Popular";
import Services from "../components/Services";
import Footer from "../components/Footer";
import CustomModal from "../components/CustomModal";

const Landing: React.FC = () => {
  return (
    <section className="block font-open-sans">
      <Hero />
      <Nav />
      <Examples />
      {/* Refactor for dispatch */}
      <Output />
      <Popular />
      <Services />
      <Footer />
      <CustomModal />
    </section>
  );
};

export default Landing;
