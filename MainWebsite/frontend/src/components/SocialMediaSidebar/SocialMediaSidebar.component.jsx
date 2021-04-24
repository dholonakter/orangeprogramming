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
       
              <FontAwesomeIcon  icon={faFacebookF} />
      
          </li>
          <li class="linkedin">
         
              <FontAwesomeIcon icon={faLinkedinIn} />
         
          </li>
          <li class="insta">
           
              <FontAwesomeIcon  icon={faInstagram} />
        
          </li>
          <li class="twitter">
           
            <FontAwesomeIcon  icon={faTwitter} />
           
          </li>
          <li class="youtube">
          
              <FontAwesomeIcon  icon={faYoutube} />
     
          </li>
        </ul>
      </SocialMediaSidebarContainer>
    </>
  );
};

export default SocialMediaSidebar;
