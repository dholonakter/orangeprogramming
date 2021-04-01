import { Container } from "../../utils/container";
import React from "react";
import quoteImg from "../../assets/images/about-us-bannner-img.png";
import { AboutComponentContainer, AboutContent } from "./About.style";

const AboutComponent = () => {
  return (
    <>
      <AboutComponentContainer>
        <Container>
          <AboutContent>
            <div>
              <h1>
                <span>ORANGE</span> <br />
                PROGRAMMING
              </h1>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur non quam quibusdam eum, temporibus exercitationem
                necessitatibus modi suscipit consectetur unde sapiente a
                voluptatibus! Blanditiis, maiores nisi rem doloremque illo nihil
                commodi ipsam id expedita beatae, perferendis dignissimos
                numquam debitis. Quo!
              </p>
            </div>

            <div className="img-container">
              <img src={quoteImg} alt="" />
            </div>
          </AboutContent>
        </Container>
        {/* <Container>
          <div>
            <h1>
              <span>ORANGE</span> <br />
              PROGRAMMING
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur non quam quibusdam eum, temporibus exercitationem
              necessitatibus modi suscipit consectetur unde sapiente a
              voluptatibus! Blanditiis, maiores nisi rem doloremque illo nihil
              commodi ipsam id expedita beatae, perferendis dignissimos numquam
              debitis. Quo!
            </p>
          </div>
          <img src={quoteImg} alt="" />
        </Container> */}
      </AboutComponentContainer>
    </>
  );
};

export default AboutComponent;
