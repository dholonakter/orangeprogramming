import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "../../utils/container";
import {
  TopContactBarContainer,
  TopContactBarContainerWrap,
} from "./TopContactBar.style";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";

const TopContactBar = () => {
  const goTo = (link) =>{
    window.open(link);
  }
  var style={
    textDecoration: 'none',
    color: '#fff',
    cursor: 'pointer'
  }
  return (
    <>
      <TopContactBarContainerWrap>
        <TopContactBarContainer>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <span>info@orange-programming.com</span>{" "}
          </p>
          <p>
            <FontAwesomeIcon icon={faPhoneSquare} /> <span>+31 6 87258021</span>
          </p>
          <div>
          <FontAwesomeIcon style={style} onClick={()=>goTo("https://facebook.com")} icon={faFacebook} size="2x" />
          <FontAwesomeIcon style={style} onClick={()=>goTo("https://linkedin.com")} icon={faLinkedin} size="2x" />
          <FontAwesomeIcon  style={style} onClick={()=>goTo("https://instagram.com")} icon={faInstagram} size="2x" />
          <FontAwesomeIcon  style={style} onClick={()=>goTo("https://twitter.com")} icon={faTwitter} size="2x" />
          <FontAwesomeIcon style={style} onClick={()=>goTo("https://youtube.com")} icon={faYoutube} size="2x" />
                 
          
          </div>
        </TopContactBarContainer>
      </TopContactBarContainerWrap>
    </>
  );
};

export default TopContactBar;
