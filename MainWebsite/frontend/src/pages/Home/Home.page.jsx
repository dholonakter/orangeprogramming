import React from "react";
import Banner from "../../components/Banner/Banner.component";
import ContactSection from "../../components/ContactSection/ContactSection.component";
import ProcessPlan from "../../components/ProcessPlan/ProcessPlan.component";
import Projects from "../../components/Projects/Projects.component";
import Services from "../../components/Services/Services.component";
import SocialMediaSidebar from "../../components/SocialMediaSidebar/SocialMediaSidebar.component";
import Technologies from "../../components/Technologies/Technologies.component";

const Home = () => {
  return (
    <>
      {/* <SocialMediaSidebar /> */}
      <Banner />
      <Services />
      <ProcessPlan />
      <Projects />
      <Technologies />
      <ContactSection />
    </>
  );
};

export default Home;
