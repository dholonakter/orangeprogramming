import React from "react";
import { ProcessPlanContainerWrap } from "./ProcessPlan.style";
import img from "../../assets/images/process-plan-img.png";
import { PrimaryButton } from "../../utils/buttons";
import { Container } from "../../utils/container";
import { HeaderText } from "../../utils/text";
import { SmallBorderBottom } from "../../utils/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faLaptopCode,
  faLightbulb,
  faSwatchbook,
  faTasks,
  faVials,
} from "@fortawesome/free-solid-svg-icons";

const ProcessPlan = () => {
  return (
    <>
      <br />
      <br />

      <Container>
        <HeaderText>Our Process Plan</HeaderText>
        <SmallBorderBottom />
      </Container>
      <ProcessPlanContainerWrap>
        <div className="left">
          <div>
            <p>
              <FontAwesomeIcon icon={faLightbulb} /> &nbsp;Discovery Workshop
            </p>
            <p>
              <FontAwesomeIcon icon={faTasks} /> Planning
            </p>
            <p>
              <FontAwesomeIcon icon={faSwatchbook} /> Design
            </p>
            <p>
              <FontAwesomeIcon icon={faLaptopCode} /> Developement
            </p>
            <p>
              <FontAwesomeIcon icon={faVials} /> Testing
            </p>
            <p>
              <FontAwesomeIcon icon={faCogs} /> Maintence
            </p>
          </div>
        </div>
        <div className="right">
          <img src={img} alt="" />
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              illum minus tempora eaque, sed et accusamus maiores soluta,
              deleniti, quae aliquam ipsum facilis sequi quas praesentium odio.
              Saepe delectus voluptate sequi libero veritatis iste? Architecto
              deleniti neque veniam ea, error consequuntur pariatur nulla
              cumque, velit, vitae libero et?
            </p>
            <PrimaryButton>Learn More...</PrimaryButton>
          </div>
        </div>
      </ProcessPlanContainerWrap>
      <br />
      <br />
   
    </>
  );
};

export default ProcessPlan;
