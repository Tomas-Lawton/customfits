import React, { FC } from "react";
import Examples from "../components/Examples";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Output from "../components/Output";
import Modal from "../components/Modal";
import Popular from "../components/Popular";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Landing: FC = () => {
  return (
    <section className="block font-open-sans">
      <Nav />
      <Hero />
      <Examples />
      <Modal />
      <Output />
      <Popular />
      <Services />
      <Footer />
    </section>
  );
};

export default Landing;
