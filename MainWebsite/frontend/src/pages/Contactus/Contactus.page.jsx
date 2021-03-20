import React from "react";
import ContactInfo from "../../components/ContactInfo/ContactInfo.component";
import { ContactInfoContainer } from "../../components/ContactInfo/ContactInfo.style";
import ContactusBanner from "../../components/ContactusBanner/ContactusBanner.component";
import Footer from "../../components/Footer/Footer.component";
import Navbar from "../../components/Navbar/Navbar.component";

const Contactus = () => {
  return (
    <>
      <Navbar />
      <ContactusBanner />
      <ContactInfo />
    </>
  );
};

export default Contactus;
