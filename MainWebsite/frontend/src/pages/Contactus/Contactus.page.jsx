import React from "react";
import ContactInfo from "../../components/ContactInfo/ContactInfo.component";
import { ContactInfoContainer } from "../../components/ContactInfo/ContactInfo.style";
import ContactusBanner from "../../components/ContactusBanner/ContactusBanner.component";
import Footer from "../../components/Footer/Footer.component";

const Contactus = () => {
  return (
    <>
      <ContactusBanner />
      <ContactInfo />
    </>
  );
};

export default Contactus;
