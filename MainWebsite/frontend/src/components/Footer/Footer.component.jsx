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
import { Link } from "react-router-dom";

const Footer = () => {
  var style={
    textDecoration: 'none',
    color: '#fff'
  }
  return (
    <>
      <FooterContainerWrap>
        <Container>
          <FooterWrapContainer>
            {/* <Link style={{float:'left'}} to="/"> */}
              <img  src={logo} alt="logo" />
            {/* </Link> */}
           
            
            <FooterContentWrap>
              <h4>Service</h4>
              <p><Link style={style} to='/web-deveopment'>Web Application</Link></p>
              <p><Link style={style} to='/android'>Android</Link></p>
              <p><Link style={style} to='/ios'>iOS</Link></p>
              <p><Link style={style} to='/ai'>Artificial Intelligence</Link></p>
              <p><Link style={style} to='/blockchain'>Blockchain</Link></p>
            </FooterContentWrap>
            <FooterContentWrap>
              <h4>Technology</h4>
              <p><a style={style} target="_blank" href="https://reactjs.org" >React Js</a></p>
              <p><a style={style} target="_blank" href="https://nodejs.org">Node Js</a></p>
              <p><a style={style} target="_blank" href="https://php.net" >PHP</a></p>
              <p><a style={style} target="_blank" href="https://laravel.com" >Laravel</a></p>
              <p><a style={style} target="_blank" href="https://dotnet.microsoft.com" >Dot net</a></p>
            </FooterContentWrap>
            <FooterContentWrap>
              <h4>Platforms</h4>
              <p><Link style={style} to='/android'>Android</Link></p>
              <p><Link style={style} to='/ios'>iOS</Link></p>
              <p><Link style={style} to='/web-deveopment'>Web</Link></p>
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
