import React from "react";
import { Container } from "../../utils/container";
import {
  ContactInfoContainer,
  SocialMediaContainer,
} from "./ContactInfo.style";
import mapImg from "../../assets/images/map-1.png";
import { HeaderText } from "../../utils/text";
import { SmallBorderBottom } from "../../utils/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import fb from "../../assets/images/icons/facebook.png";
import tweeter from "../../assets/images/icons/twitter.png";
import linkedin from "../../assets/images/icons/linkedin.webp";
import youtube from "../../assets/images/icons/youtube.png";
import mail from "../../assets/images/icons/mail.png";
import snapChat from "../../assets/images/icons/snap-chat.png";
import Iframe from 'react-iframe';
import { useLocation } from "react-router";






const ContactInfo = () => {



  const { pathName } = useLocation();



  // const goTo = (l) =>{
  //   window.open(l)
  // }

  return (
    <>
      <Container>
        <ContactInfoContainer>
          <div className="img">
            <img src={mapImg} alt="" />



          </div>
          <div className="info">
            <HeaderText>Contact info</HeaderText>
            <SmallBorderBottom />
            <p>
              <FontAwesomeIcon  icon={faMapMarkerAlt} /> &nbsp;&nbsp; Elgarstraat
              22 5653AH Eindhoven, Netherlands.
            </p>
            <p>
              <FontAwesomeIcon icon={faPhoneSquare} />
              &nbsp;&nbsp; +31 6 87258021
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              &nbsp;&nbsp;orangeprogramming123@gmail.com
            </p>
          </div>
        </ContactInfoContainer>
        {/* <SocialMediaContainer>
          <h2>Find us on socila media</h2>
          <div>
            <img onClick={()=>goTo("https://facebook.com")} src={fb} alt="" />
            <img  onClick={()=>goTo("https://twitter.com")} src={tweeter} alt="" />
            <img  onClick={()=>goTo("https://linkedin.com")} src={linkedin} alt="" />
            <img  onClick={()=>goTo("https://youtube.com")} src={youtube} alt="" />
            <img  onClick={()=>goTo("https://email.com")} src={mail} alt="" />
            <img  onClick={()=>goTo("https://snapchat.com")} src={snapChat} alt="" />
          </div>
        </SocialMediaContainer> */}
      </Container>
    </>
  );
};

export default ContactInfo;
