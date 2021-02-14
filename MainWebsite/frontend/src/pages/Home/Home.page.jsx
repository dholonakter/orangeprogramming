import React from "react";
import Banner from "../../components/Banner/Banner.component";
import ContactSection from "../../components/ContactSection/ContactSection.component";
import Footer from "../../components/Footer/Footer.component";
import Navbar from "../../components/Navbar/Navbar.component";
import Services from "../../components/Services/Services.component";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
