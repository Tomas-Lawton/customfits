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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        console.log("Escape key pressed");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleOnClick = () => {
    console.log("clicked");
    setIsOpen(true);
  };

  return (
    <section className="block font-open-sans">
      {/* <Nav /> */}
      <Hero />
      <Examples />
      {/* Refactor for dispatch */}
      <Output clickCallback={handleOnClick} />
      <Popular />
      <Services />
      {/* <Footer /> */}
      <CustomModal />
    </section>
  );
};

export default Landing;
