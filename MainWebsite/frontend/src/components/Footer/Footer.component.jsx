import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  FooterContainerWrap,
  FooterContentWrap,
  FooterIconContainer,
  FooterIconWrap,
  FooterWrapContainer,
  Newslatter,
} from "./Footer.style";
import logo from "../../assets/images/logo-color.png";
import {
  faInstagram,
  faTwitter,
  faYoutube,
  faFacebookF,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Container } from "../../utils/container";
import { useLocation } from "react-router";

const Footer = () => {
  const goTo = (link) => {
    window.open(link);
  };

  const { pathname } = useLocation();
  var style = {
    textDecoration: "none",
    color: "#fff",
    cursor: "pointer",
  };
  return pathname === "/under-construction" ? null : (
    <>
      <FooterContainerWrap>
        <Container>
          <FooterWrapContainer>
            <img src={logo} alt="logo" />

            <FooterContentWrap>
              <h4>Services</h4>
              <p>
                <Link style={style} to="/web-development">
                  Web Application
                </Link>
              </p>
              <p>
                <Link style={style} to="/mobile-developments">
                  Mobile Developments
                </Link>
              </p>
              <p>
                <Link style={style} to="/ai">
                  Predictable Artificial Intelligence
                </Link>
              </p>
              <p>
                <Link style={style} to="/windows-application">
                  Windows Application
                </Link>
              </p>
            </FooterContentWrap>

            <FooterContentWrap>
              <h4>Technologies</h4>

              <p style={style} onClick={() => goTo("https://reactjs.org")}>
                React Js
              </p>
              <p style={style} onClick={() => goTo("https://nodejs.org")}>
                {" "}
                Node Js
              </p>
              <p style={style} onClick={() => goTo("https://php.net")}>
                PHP
              </p>
              <p style={style} onClick={() => goTo("https://laravel.com")}>
                {" "}
                Laravel
              </p>
              <p
                style={style}
                onClick={() => goTo("https://dotnet.microsoft.com")}
              >
                {" "}
                Dot Net
              </p>
            </FooterContentWrap>

            <FooterContentWrap>
              <h4>Platforms</h4>
              <p>
                <Link style={style} to="/android">
                  Android
                </Link>
              </p>
              <p>
                <Link style={style} to="/ios">
                  iOS
                </Link>
              </p>
              <p>
                <Link style={style} to="/web-development">
                  Web
                </Link>
              </p>
              <p>
                <Link style={style} to="/windows">
                  Windows
                </Link>
              </p>
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
                  <FontAwesomeIcon
                    onClick={() => goTo("https://facebook.com")}
                    icon={faFacebookF}
                    size="2x"
                  />
                </FooterIconWrap>

                <FooterIconWrap>
                  <FontAwesomeIcon
                    onClick={() => goTo("https://linkedin.com")}
                    icon={faLinkedin}
                    size="2x"
                  />
                </FooterIconWrap>

                <FooterIconWrap>
                  <FontAwesomeIcon
                    onClick={() => goTo("https://instagram.com")}
                    icon={faInstagram}
                    size="2x"
                  />
                </FooterIconWrap>

                <FooterIconWrap>
                  <FontAwesomeIcon
                    onClick={() => goTo("https://twitter.com")}
                    icon={faTwitter}
                    size="2x"
                  />
                </FooterIconWrap>
                <FooterIconWrap>
                  <FontAwesomeIcon
                    onClick={() => goTo("https://youtube.com")}
                    icon={faYoutube}
                    size="2x"
                  />
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
