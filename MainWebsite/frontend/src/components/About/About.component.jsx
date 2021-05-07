import { Container } from "../../utils/container";
import React from "react";
import quoteImg from "../../assets/images/about-us-bannner-img.png";
import {
  AboutComponentContainer,
  AboutContent,
  CheckBoxItems,
} from "./About.style";
import checkbox from "../../assets/images/icons/checkox.png";
const AboutComponent = () => {
  return (
    <>
      <AboutComponentContainer>
        <Container>
          <AboutContent>
            <div>
              {/* <h1>
                <span>ORANGE</span> <br />
                PROGRAMMING
              </h1> */}
              <br />
              <CheckBoxItems>
                <img src={checkbox} alt="" />
                <p>
                  We help clients accelerate digital transformation by closing
                  the gap between strategy and execution.
                </p>
              </CheckBoxItems>
              <br/>
              <CheckBoxItems>
                <img src={checkbox} alt="" />
                <p>
                  Under our leadership guidance, we've built a culture designed
                  to bring the best out of our people and deliver impactful
                  solutions for our clients.
                </p>
              </CheckBoxItems>
              <br/>
              <CheckBoxItems>
                <img src={checkbox} alt="" />
                <p>
                  We provide our client with full access and visibility to every
                  stage of the solution development process, discovery,
                  strategy, pricing, scheduling, coding, testing, and delivery.
                </p>
              </CheckBoxItems>
              <br/>
              <CheckBoxItems>
                <img src={checkbox} alt="" />
                <p>
                  We work closely with our clients, leveraging technologies to
                  achieve solutions that exceed expectations and deliver
                  excellence in each user experience.
                </p>
              </CheckBoxItems>
            </div>

            <div className="img__container">
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
