import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PrimaryButton } from "../../utils/buttons";
import { Container } from "../../utils/container";
import {
  ContactusBannerContainer,
  ContactusBannerOverlay,
} from "./ContactusBanner.style";
import emailjs from "emailjs-com";
import { useAlert } from "react-alert";

const ContactusBanner = () => {
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
          console.log(result);
        },
        (error) => {
          alert.error("Error! Try again.");
          console.log(error.text);
        }
      );
  }

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
                  rows="4"
                  name="message"
                  required
                />
                <br />

                <PrimaryButton type="submit">
                  <FontAwesomeIcon icon={faPaperPlane} /> SEND
                </PrimaryButton>
              </form>{" "}
            </div>
          </ContactusBannerOverlay>
        </Container>
      </ContactusBannerContainer>
    </>
  );
};

export default ContactusBanner;
