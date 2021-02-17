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
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </div>
        </TopContactBarContainer>
      </TopContactBarContainerWrap>
    </>
  );
};

export default TopContactBar;
