import React from "react";
import AboutComponent from "../../components/About/About.component";
import Navbar from "../../components/Navbar/Navbar.component";
import OurStory from "../../components/OueStory/OurStory.component";
import OurTeam from "../../components/OurTeam/OurTeam.component";

const Aboutus = () => {
  return (
    <>
      <Navbar noBg="noBg" />
      <AboutComponent />
      <OurStory />
      <OurTeam />
    </>
  );
};

export default Aboutus;
