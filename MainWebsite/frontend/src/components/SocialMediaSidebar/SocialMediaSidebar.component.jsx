import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SocialMediaSidebarContainer } from "./SocialMediaSidebar.style";

const SocialMediaSidebar = () => {
  return (
    <>
      <SocialMediaSidebarContainer>
        <ul class="social">
          <li class="fb">
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li class="linkedin">
            <a href="#">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li class="insta">
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li class="twitter">
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li class="youtube">
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
        </ul>
      </SocialMediaSidebarContainer>
    </>
  );
};

export default SocialMediaSidebar;
