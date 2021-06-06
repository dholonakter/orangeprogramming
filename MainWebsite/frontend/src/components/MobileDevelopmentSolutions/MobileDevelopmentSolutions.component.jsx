import React from "react";
import { Col, Row } from "react-grid-system";
import { SmallBorderBottom } from "../../utils/constant";
import { Container } from "../../utils/container";
import { HeaderText } from "../../utils/text";
import {
  MobileDevelopmentSolutionsContainer,
  MobileDevelopmentSolutionsWrap,
  MobileSolutionCol,
} from "./MobileDevelopmentSolutions.style";
import img1 from "../../assets/images/mobile-development/img1.png";
import img2 from "../../assets/images/mobile-development/img2.png";
import Fade from "react-reveal/Fade";

function MobileDevelopmentSolutions() {
  return (
    <>
      <MobileDevelopmentSolutionsWrap>
        <Container>
          <br />
          <HeaderText>What are you looking for ?</HeaderText>
          <SmallBorderBottom />
          <MobileDevelopmentSolutionsContainer>
            <Fade bottom cascade>
              <main>
                <MobileSolutionCol xs={6}>
                  <img src={img1} alt="" />
                  <h3>Cross Platform Solution</h3>
                  <p>
                    Cross platform frameworks work hard to deliver on their main
                    promise, which is to use a single codebase in as many places
                    possible.
                    <br />
                    With the new wave of mobile frameworks, we can finally make
                    this happen, and it has proven very effective. Using a
                    single codebase for both platforms, significantly reduces
                    development time and improves app maintenance - releases can
                    be done simultaneously on iOS and Android..
                  </p>
                </MobileSolutionCol>

                <MobileSolutionCol xs={6}>
                  <img src={img2} alt="" />
                  <h3>Native Solution</h3>
                  <p>
                    When we don't want to make compromises, be it on
                    performance, security or maintenance, we can build apps
                    using native frameworks available on given platforms.
                    <br />
                    Sometimes we may be constrained to a feature-set that mostly
                    relies on native solutions, and using a cross platform
                    framework doesn't make economical sense. Native apps will
                    always be the most performant, safest, and will require much
                    less effort to maintain in the long term.
                  </p>
                </MobileSolutionCol>
              </main>
            </Fade>
          </MobileDevelopmentSolutionsContainer>
        </Container>
      </MobileDevelopmentSolutionsWrap>
    </>
  );
}

export default MobileDevelopmentSolutions;
