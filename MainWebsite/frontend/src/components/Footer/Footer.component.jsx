import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";
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
import { Grid, useMediaQuery } from "@material-ui/core";

const Footer = () => {
  const matchesMd = useMediaQuery("(max-width:960px)");
  const history = useHistory();
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
          {/* <FooterWrapContainer> */}
          <Grid
            container
            spacing={matchesMd ? 3 : 5}
            component={FooterWrapContainer}
          >
            <Grid item xs={12} sm={6} md={2} component={FooterContentWrap}>
              <img src={logo} alt="logo" />
            </Grid>
            <Grid item xs={6} sm={2} md={3} component={FooterContentWrap}>
              <h4>Services</h4>
              <p onClick={() => history.push("/web-development")}>
                Web Application
              </p>
              <p onClick={() => history.push("/mobile-developments")}>
                Mobile Developments
              </p>
              <p onClick={() => history.push("/ai")}>
                Predictable Artificial Intelligence
              </p>
              <p onClick={() => history.push("/windows-application")}>
                Windows Application
              </p>
            </Grid>
            <Grid item xs={6} sm={2} md={2} component={FooterContentWrap}>
              {" "}
              <h4>Technologies</h4>
              <p onClick={() => goTo("https://reactjs.org")}>React Js</p>
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
                Dot Net
              </p>
            </Grid>
            <Grid item xs={12} sm={2} md={2} component={FooterContentWrap}>
              <h4>Platforms</h4>
              <p onClick={() => history.push("/android")}>Android</p>
              <p onClick={() => history.push("/ios")}>iOS</p>
              <p onClick={() => history.push("/web-development")}>Web</p>
              <p onClick={() => history.push("/windows")}>Windows</p>
            </Grid>
            <Grid item xs={12} sm={6} md={3} component={FooterContentWrap}>
              <Newslatter>
                <form action="">
                  <h4>Newsletter</h4>

                  <p>Subscribe to our newsletter to get instant news.</p>
                  <input type="text" placeholder="email" />
                  <button>Signup</button>
                </form>
              </Newslatter>
            </Grid>

            <hr />

            <Grid item xs={6} sm={3} md={2} component={FooterContentWrap}>
              <h4
                style={{
                  height: `${matchesMd ? "20px" : "40px"}`,
                  color: "#F0671F",
                }}
              >
                Contacts
              </h4>

              <p>Elgarstraat 22 5653AH Eindhoven, Netherlands.</p>
            </Grid>
            <Grid item xs={6} sm={3} md={6} component={FooterContentWrap}>
              <h4 style={{ height: `${matchesMd ? "20px" : "40px"}` }}></h4>
              <p>+31634509831</p>
              <p style={{ wordWrap: "break-word" }}>
                orangeprogrammingnl@gmail.com
              </p>
            </Grid>

            <Grid item xs={12} sm={6} md={4} component={FooterContentWrap}>
              <h4>Follow us</h4>
              <FooterIconContainer>
                <FooterIconWrap>
                  <FontAwesomeIcon
                    onClick={() =>
                      goTo("https://facebook.com/OrangeProgramming")
                    }
                    icon={faFacebookF}
                    size="2x"
                  />
                </FooterIconWrap>

                <FooterIconWrap>
                  <FontAwesomeIcon
                    onClick={() =>
                      goTo(
                        "https://www.linkedin.com/company/orangeprogramming/"
                      )
                    }
                    icon={faLinkedin}
                    size="2x"
                  />
                </FooterIconWrap>

                <FooterIconWrap>
                  <FontAwesomeIcon
                    onClick={() =>
                      goTo("https://instagram.com/orangeprogramming")
                    }
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
                    onClick={() =>
                      goTo(
                        "https://youtube.com/channel/UCR8NSx0UtM0Yxp1H1sL6kpg"
                      )
                    }
                    icon={faYoutube}
                    size="2x"
                  />
                </FooterIconWrap>
              </FooterIconContainer>
            </Grid>
          </Grid>

          <hr />
          <small>
            Copyright © Orange-Programming 2021. All Rights Reserved
          </small>
        </Container>
      </FooterContainerWrap>
    </>
  );
};

export default Footer;
