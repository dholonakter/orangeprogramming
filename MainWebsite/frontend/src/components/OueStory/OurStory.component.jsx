import { Container } from "../../utils/container";
import React from "react";
import { OurstoryContainer, TeamPhoto } from "./OurStory.style";
import teamImg from "../../assets/images/team-img.png";
import { HeaderText } from "../../utils/text";
import { SmallBorderBottom } from "../../utils/constant";
import logoImg from "../../assets/images/our-story-logo.jpg";
const OurStory = () => {
  return (
    <>
      <Container>
        <HeaderText>Our Story</HeaderText>
        <SmallBorderBottom />
        <OurstoryContainer>
          <p>
          Orange Programming is a mobile and web development company creating solutions for mobile and web applications. It was established in December 2020 in the Netherlands with young professional software engineers. We help our clients rapidly implement digital transformation strategies that achieve optimal results with less risk through deep technical and business expertise with custom methodology processes.           </p>
          {/* <img src={logoImg} alt="" /> */}
        </OurstoryContainer>
      </Container>
    </>
  );
};

export default OurStory;
