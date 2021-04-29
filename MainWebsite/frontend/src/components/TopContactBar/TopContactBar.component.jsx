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
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";

const TopContactBar = () => {
  const goTo = (link) => {
    window.open(link);
  };
  var style = {
    textDecoration: "none",
    color: "#fff",
    cursor: "pointer",
  };
  return (
    <>
      <TopContactBarContainerWrap>
        <TopContactBarContainer>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <span>orangeprogrammingnl@gmail.com</span>{" "}
          </p>
          <p>
            <FontAwesomeIcon icon={faPhoneSquare} /> <span>+31634509831</span>
          </p>
          <div>
            <FontAwesomeIcon
              style={style}
              onClick={() => goTo("https://facebook.com/OrangeProgramming")}
              icon={faFacebook}
              size="2x"
            />
            <FontAwesomeIcon
              style={style}
              onClick={() =>
                goTo("https://www.linkedin.com/company/orangeprogramming")
              }
              icon={faLinkedin}
              size="2x"
            />
            <FontAwesomeIcon
              style={style}
              onClick={() => goTo("https://instagram.com/orangeprogramming")}
              icon={faInstagram}
              size="2x"
            />
            <FontAwesomeIcon
              style={style}
              onClick={() => goTo("https://twitter.com")}
              icon={faTwitter}
              size="2x"
            />
            <FontAwesomeIcon
              style={style}
              onClick={() =>
                goTo("https://youtube.com/channel/UCR8NSx0UtM0Yxp1H1sL6kpg")
              }
              icon={faYoutube}
              size="2x"
            />
          </div>
        </TopContactBarContainer>
      </TopContactBarContainerWrap>
    </>
  );
};

export default TopContactBar;
