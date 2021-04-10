import {
  faEnvelope,
  faMapMarkerAlt,
  faPaperPlane,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
import { useAlert } from "react-alert";
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
  const alert = useAlert();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_w6hpkxh",
        e.target,
        "user_0KcnZYUta7s6d2oURxvzW"
      )
      .then(
        (result) => {
          alert.success("Message sent!");
          e.target.reset();
        },
        (error) => {
          alert.error("Error! Try again.");
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <ContactSectionWrap>
        <Container>
          <HeaderText>Get in touch</HeaderText>
          <SmallBorderBottom />
          <ContactSectionContainer>
            <div className="left">
              <h1>
                Send us details about <br /> your project !
              </h1>
              <br />
              <h4 white>We’d Love To Hear From You</h4>
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
              <form onSubmit={sendEmail}>
                <input placeholder="Name *" type="text" name="name" required />
                <br />
                <input
                  placeholder="Company *"
                  type="text"
                  name="company"
                  required
                />
                <br />
                <input
                  placeholder="Email *"
                  type="email"
                  name="email"
                  required
                />
                <br />

                <input
                  placeholder="Subject *"
                  type="text"
                  name="subject"
                  required
                />
                <br />
                <textarea
                  placeholder="Description *"
                  rows="3"
                  name="message"
                  required
                />
                <br />

                <PrimaryButton type="submit">
                  <FontAwesomeIcon icon={faPaperPlane} /> SEND
                </PrimaryButton>
              </form>{" "}
            </div>
          </ContactSectionContainer>
        </Container>
      </ContactSectionWrap>
    </>
  );
};

export default ContactSection;
