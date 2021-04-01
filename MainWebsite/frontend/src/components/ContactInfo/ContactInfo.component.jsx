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
const ContactInfo = () => {
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
              <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp;&nbsp; Elgarstraat
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
        <SocialMediaContainer>
          <h2>Find us on socila media</h2>
          <div>
            <img src={fb} alt="" />
            <img src={tweeter} alt="" />
            <img src={linkedin} alt="" />
            <img src={youtube} alt="" />
            <img src={mail} alt="" />
            <img src={snapChat} alt="" />
          </div>
        </SocialMediaContainer>
      </Container>
    </>
  );
};

export default ContactInfo;
