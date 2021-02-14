import React from "react";
import { Container } from "../../utils/container";
import {
  FooterContainerWrap,
  FooterContentWrap,
  FooterWrapContainer,
} from "./Footer.style";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <FooterContainerWrap>
        <Container>
          <FooterWrapContainer>
            <FooterContentWrap>
              <img src={logo} alt="" />
            </FooterContentWrap>
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
            <FooterContentWrap>
              <h4>Contact</h4>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
              <p>Linked</p>
            </FooterContentWrap>
          </FooterWrapContainer>
        </Container>
        <small>Copyright © Orange-Programming. All Rights Reserved</small>
      </FooterContainerWrap>
    </>
  );
};

export default Footer;
