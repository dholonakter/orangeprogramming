import {
  faEnvelope,
  faMapMarkerAlt,
  faPaperPlane,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PrimaryButton } from "../../utils/buttons";
import { SmallBorderBottom } from "../../utils/constant";
import { Container } from "../../utils/container";
import { HeaderText, TitleText } from "../../utils/text";
import {
  ContactSectionContainer,
  ContactSectionWrap,
} from "./ContactSection.style";

const ContactSection = () => {
  return (
    <>
      <ContactSectionWrap>
        <Container>
          <HeaderText>Get in touch</HeaderText>
          <SmallBorderBottom />
          <ContactSectionContainer>
            <div className="left">
              <HeaderText white>
                Send us details about <br /> your project !
              </HeaderText>
              <br />
              <TitleText white>We’d Love To Hear From You</TitleText>
              <br />
              <p>
                Get Custom Solutions, Recommendations, Resumes, or, Estimates.
                Confidentiality & Same Day Response Guaranteed!
              </p>
              <hr />
              <p>
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                orangeprogramming123@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhoneSquare} /> +31 6 87258021
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Elgarstraat 22 5653AH
                Eindhoven, Netherlands.
              </p>
            </div>

            <div className="right">
              <form>
                <input placeholder="Name *" type="text" />
                <br />
                <input placeholder="Company *" type="text" />
                <br />
                <input placeholder="Email *" type="password" />
                <br />
                <textarea placeholder="Description *" rows="3" />
                <br />
                <br />
                <br/>
                <PrimaryButton type="submit"><FontAwesomeIcon icon={faPaperPlane} /> SEND</PrimaryButton>
              </form>{" "}
            </div>
          </ContactSectionContainer>
        </Container>
      </ContactSectionWrap>
    </>
  );
};

export default ContactSection;
