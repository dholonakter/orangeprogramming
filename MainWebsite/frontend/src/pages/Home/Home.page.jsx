import React, { useRef } from "react";
import Banner from "../../components/Banner/Banner.component";
import ContactSection from "../../components/ContactSection/ContactSection.component";
import ProcessPlan from "../../components/ProcessPlan/ProcessPlan.component";
import Projects from "../../components/Projects/Projects.component";
import Services from "../../components/Services/Services.component";
import Technologies from "../../components/Technologies/Technologies.component";
import { useLocation } from "react-router";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <ProcessPlan />
      <Projects />
      <Technologies />
      <ContactSection />
    </div>
  );
};

export default Home;
