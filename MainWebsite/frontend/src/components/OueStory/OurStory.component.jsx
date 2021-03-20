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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            facere similique praesentium quod accusamus quae nam! Reprehenderit
            dolor a quas, deserunt eum culpa porro nemo officia temporibus at
            dolorem! Sunt eum quos qui dolorum illum blanditiis excepturi unde
            atque? A aliquid necessitatibus provident ex repellat. Ducimus unde
            repellendus aliquid a consectetur! Eius fuga doloribus quo
            consectetur, a assumenda odit numquam maiores debitis, incidunt,
            delectus porro amet voluptatum dolorum alias ipsam tempore impedit
            consequatur ducimus ex maxime quasi facere similique? Facere
            reprehenderit natus optio tenetur est, velit cumque repellendus
            architecto cupiditate aliquid? Est consequuntur accusamus expedita!
            Veniam modi consequatur obcaecati eum veritatis deleniti vitae eius
            nam, deserunt amet placeat autem praesentium dolorem earum sunt
            doloribus exercitationem quis dolorum?
          </p>
          {/* <img src={logoImg} alt="" /> */}
        </OurstoryContainer>
        <TeamPhoto src={teamImg} />
      </Container>
    </>
  );
};

export default OurStory;
