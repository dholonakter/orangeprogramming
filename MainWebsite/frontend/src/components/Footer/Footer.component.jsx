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
import logo from "../../assets/images/logo.png";
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
  const { pathname } = useLocation();
  var style={
    textDecoration: 'none',
    color: '#fff'
  }
  return pathname === "/under-construction" ? null : (
    <>
      <FooterContainerWrap>
        <Container>
          <FooterWrapContainer>
            <img onClick={()=>window.location.href = "/"} src={logo} alt="logo" />

            <FooterContentWrap>
              <h4>Service</h4>
              <p><Link style={style} to='/web-development'>Web Application</Link></p>
              <p><Link style={style} to='/mobile-developments'>Mobile Developments</Link></p>
              <p><Link style={style} to='/ai'>Predictable Artificial Intelligence</Link></p>
              <p><Link style={style} to='/windows-application'>Windows Application</Link></p>
            </FooterContentWrap>

            <FooterContentWrap>
              <h4>Technology</h4>
              <p><a style={style} target="_blank" href="https://reactjs.org" >React Js</a></p>
              <p><a style={style} target="_blank" href="https://nodejs.org">Node Js</a></p>
              <p><a style={style} target="_blank" href="https://php.net" >PHP</a></p>
              <p><a style={style} target="_blank" href="https://laravel.com" >Laravel</a></p>
              <p><a style={style} target="_blank" href="https://dotnet.microsoft.com" >Dot Net</a></p>
            </FooterContentWrap>
            

            <FooterContentWrap>
              <h4>Platforms</h4>
              <p><Link style={style} to='/android'>Android</Link></p>
              <p><Link style={style} to='/ios'>iOS</Link></p>
              <p><Link style={style} to='/web-development'>Web</Link></p>
              <p><Link style={style} to='/windows'>Windows</Link></p>
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
                <a style={style} target="_blank" href="https://facebook.com"><FontAwesomeIcon icon={faFacebookF} size="2x" /></a>
                  
                </FooterIconWrap>

                <FooterIconWrap>
                <a style={style} target="_blank" href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                 
                </FooterIconWrap>

                <FooterIconWrap>
                <a style={style} target="_blank" href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                
                </FooterIconWrap>

                <FooterIconWrap>
                <a style={style} target="_blank" href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                  
                </FooterIconWrap>
                <FooterIconWrap>
                <a style={style} target="_blank" href="https://youtube.com"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>

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

