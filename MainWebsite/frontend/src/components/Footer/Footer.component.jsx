import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FooterContainerWrap,
  FooterContentWrap,
  FooterIconContainer,
  FooterIconWrap,
  FooterWrapContainer,
  Newslatter,
} from "./Footer.style";
import logo from "../../assets/images/logo.png";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faLinkedin,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Container } from "../../utils/container";

const Footer = () => {
  return (
    <>
      <FooterContainerWrap>
        <Container>
          <FooterWrapContainer>
            <img src={logo} alt="" />
            <FooterContentWrap>
              <h4>Service</h4>
              <p>Web Application</p>
              <p>Android / IOS</p>
              <p>Artificial Intelligence</p>
              <p>Cloud Service</p>
            </FooterContentWrap>
            <FooterContentWrap>
              <h4>Technology</h4>
              <p>React Js</p>
              <p>Node Js</p>
              <p>PHP</p>
              <p>Laravel</p>
              <p>Dot net</p>
            </FooterContentWrap>
            <FooterContentWrap>
              <h4>Platforms</h4>
              <p>Android</p>
              <p>ISO</p>
              <p>Web</p>
            </FooterContentWrap>
            <Newslatter>
              <form action="">
                <h4>Newsletter</h4>
                <p>Subscribe to our newsletter to get instant news.</p>
                <input type="text" placeholder="email" />
                <button>Signup</button>
              </form>
              <FooterIconContainer>
                <FooterIconWrap>
                  <FontAwesomeIcon icon={faFacebookF} size="2x" />
                </FooterIconWrap>
                <FooterIconWrap>
                  <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                </FooterIconWrap>
                <FooterIconWrap>
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </FooterIconWrap>
                <FooterIconWrap>
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </FooterIconWrap>
                <FooterIconWrap>
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </FooterIconWrap>
              </FooterIconContainer>
            </Newslatter>
          </FooterWrapContainer>
          <br />
          <br />
          <hr />
          <small>Copyright © Orange-Programming. All Rights Reserved</small>
        </Container>
      </FooterContainerWrap>
    </>
  );
};

export default Footer;
