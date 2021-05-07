import React from "react";
import handShake from "../../assets/images/icons/OurValues-Icons/hand-shake.png";
import puzzle from "../../assets/images/icons/OurValues-Icons/puzzle.png";
import search from "../../assets/images/icons/OurValues-Icons/search.png";
import teamComunication from "../../assets/images/icons/OurValues-Icons/team-communication.png";
import teamIdea from "../../assets/images/icons/OurValues-Icons/team-idea.png";
import thumb from "../../assets/images/icons/OurValues-Icons/thumb.png";
import { SmallBorderBottom } from "../../utils/constant";
import { Container } from "../../utils/container";
import { HeaderText } from "../../utils/text";
import { OurstoryContainer } from "../OueStory/OurStory.style";
import { OurValuesContainer, OurValuesContent, SmallText } from "./OurValues.style";
const OurValues = () => {
  return (
    <>
      <Container>
        <HeaderText>Our Values</HeaderText>
        <SmallBorderBottom />
        <SmallText>
          <small>
            Our values represent what we stand for as a business partner and an
            employer.
          </small>
        </SmallText>
        
        <OurValuesContainer>

        <OurValuesContent>
            <img src={thumb} alt="" />
            <div className="our__values_text">
              <h3>WE DO THE RIGHT THING</h3>
              <small>
                If something doesn’t feel right, we pay attention and
                re-evaluate. When necessary, we talk it through with each other
                and our clients.
              </small>
            </div>
          </OurValuesContent>

          

          <OurValuesContent>
            <img src={puzzle} alt="" />
            <div className="our__values_text">
              <h3>WE'RE EXCITED TO TAKE ON BIG PROBLEMS</h3>
              <small>
                We’re not afraid to take on a major challenge. It’s what we live
                for.
              </small>
            </div>
          </OurValuesContent>

          <OurValuesContent>
            <img src={search} alt="" />
            <div className="our__values_text">
              <h3>WE GO DEEP AND DON'T GIVE UP</h3>
              <small>
                Some might call it OCD, but we don’t stop until we get to the
                bottom of an issue and identify the best solution.
              </small>
            </div>
          </OurValuesContent>

          <OurValuesContent>
            <img src={teamIdea} alt="" />
            <div className="our__values_text">
              <h3>WE'RE CONFIDENT TO GET YOUR JOB DONE</h3>
              <small>
                Teams pulling together in the same direction accomplish much
                more than out-of-sync individuals.
              </small>
            </div>
          </OurValuesContent>

          <OurValuesContent>
            <img src={handShake} alt="" />
            <div className="our__values_text">
              <h3>WE MAKE OUR CLIENTS' BUSINESS OUR BUSINESS</h3>
              <small>
                Nothing is more important to success than truly understanding
                what motivates our clients and their customers. We always put
                ourselves in their shoes.
              </small>
            </div>
          </OurValuesContent>

          <OurValuesContent>
            <img src={teamComunication} alt="" />
            <div className="our__values_text">
              <h3>WE ARE TRANSPARENT AND FORTHRIGHT</h3>
              <small>
                Open and honest communication is vital. It makes fulfilling all
                of our other values possible.
              </small>
            </div>
          </OurValuesContent>
        </OurValuesContainer>
      </Container>
    </>
  );
};

export default OurValues;
