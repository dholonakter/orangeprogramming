import React from "react";
import AboutComponent from "../../components/About/About.component";
import OurStory from "../../components/OueStory/OurStory.component";
import OurTeam from "../../components/OurTeam/OurTeam.component";
import OurValues from "../../components/OurValues/OurValues.component";

const Aboutus = () => {
  return (
    <>
      <AboutComponent />
      <OurValues />
      <OurStory />
      <OurTeam />
    </>
  );
};

export default Aboutus;
