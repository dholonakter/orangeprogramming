import React from "react";
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
          <ContactSectionContainer>
            <div className="left">
              <HeaderText white>Send us details about your project</HeaderText>
              <TitleText white>We’d Love To Hear From You</TitleText>
            </div>
            <div className="right"></div>
          </ContactSectionContainer>
        </Container>
      </ContactSectionWrap>
    </>
  );
};

export default ContactSection;
