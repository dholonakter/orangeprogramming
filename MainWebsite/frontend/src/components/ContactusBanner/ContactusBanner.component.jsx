import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PrimaryButton } from "../../utils/buttons";
import { Container } from "../../utils/container";
import {
  ContactusBannerContainer,
  ContactusBannerOverlay,
} from "./ContactusBanner.style";
const ContactusBanner = () => {
  return (
    <>
      <ContactusBannerContainer>
        <Container>
          <ContactusBannerOverlay>
            <div className="left__section">
              <h1>
                Amazing Digital <br /> Experiences Start Here
              </h1>
              <br />
              <p>
                Want to run an idea by us?
                <br />
                <br />
                Have an RFP you want to send our team? We are here to help!
              </p>
            </div>
            <div className="contact__form">
              <form>
                <input placeholder="Name *" type="text" />
                <br />
                <input placeholder="Company *" type="text" />
                <br />
                <input placeholder="Email *" type="email" />
                <br />
                <textarea placeholder="Description *" rows="3" />
                <br />

                <PrimaryButton type="submit">
                  <FontAwesomeIcon icon={faPaperPlane} /> SEND
                </PrimaryButton>
              </form>
            </div>
          </ContactusBannerOverlay>
        </Container>
      </ContactusBannerContainer>
    </>
  );
};

export default ContactusBanner;
