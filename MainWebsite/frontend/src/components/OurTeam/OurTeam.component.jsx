import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "../../utils/container";
import React from "react";
import { SmallBorderBottom } from "../../utils/constant";
import { HeaderText } from "../../utils/text";
import { TeamMember, TeamMemberConatiner } from "./OurTeam.style";

const OurTeam = () => {
  return (
    <>
      <br />

      <Container>
        <HeaderText>Meet our team</HeaderText>
        <SmallBorderBottom />
        <TeamMemberConatiner>
          <TeamMember>
            <img
              src="https://serving.photos.photobox.com/53464066dc132288128cb11531bb767f0082dcde75f3b845cd905d38c4223e95e0dc7bc9.jpg"
              alt=""
            />

            <p>Dholon</p>
            <h6>Software Engineer</h6>
            <div>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </TeamMember>
          <TeamMember>
            <img
              src="https://serving.photos.photobox.com/80553616a29779bd113f7a340b9b1eae3636dd38534c57877597a17b7131be741c67b3ae.jpg"
              alt=""
            />

            <p>Nick</p>
            <h6>Software Engineer</h6>
            <div>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </TeamMember>
          <TeamMember>
            <img
              src="https://serving.photos.photobox.com/80553616a29779bd113f7a340b9b1eae3636dd38534c57877597a17b7131be741c67b3ae.jpg"
              alt=""
            />

            <p>Tareque</p>
            <h6>Software Engineer</h6>
            <div>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </TeamMember>
          <TeamMember>
            <img
              src="https://serving.photos.photobox.com/80553616a29779bd113f7a340b9b1eae3636dd38534c57877597a17b7131be741c67b3ae.jpg"
              alt=""
            />

            <p>Himel</p>
            <h6>Software Engineer</h6>
            <div>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </TeamMember>
        </TeamMemberConatiner>
      </Container>
    </>
  );
};

export default OurTeam;
