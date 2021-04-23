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
            <a href="https://facebook.com">
              <FontAwesomeIcon  icon={faFacebookF} />
            </a>
          </li>
          <li class="linkedin">
            <a href="https://linkedin.com">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li class="insta">
            <a href="https://instagram.com">
              <FontAwesomeIcon  icon={faInstagram} />
            </a>
          </li>
          <li class="twitter">
            <a href="https://twitter.com">
            <FontAwesomeIcon  icon={faTwitter} />
            </a>
          </li>
          <li class="youtube">
            <a href="https://youtube.com">
              <FontAwesomeIcon  icon={faYoutube} />
            </a>
          </li>
        </ul>
      </SocialMediaSidebarContainer>
    </>
  );
};

export default SocialMediaSidebar;
