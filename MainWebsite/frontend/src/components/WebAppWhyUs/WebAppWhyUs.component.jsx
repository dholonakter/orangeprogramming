import React from "react";
import { Container } from "../../utils/container";
import { Row, Col } from "react-grid-system";
import { HeaderText } from "../../utils/text";
import { SmallBorderBottom } from "../../utils/constant";
import { WebAppCol } from "../WebAppContent/WebAppContent.style";
import img from "../../assets/images/web-app-why-us.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { WhyUsContainer, WhyUsWrapper } from "./WebAppWhyUs.style";

function WebAppWhyUs() {
  return (
    <>
      <Container>
        <Row gutterWidth={20}>
          <Col md={7}>
            <HeaderText>Why us ?</HeaderText>
            <SmallBorderBottom />
            <WhyUsContainer>
              <WhyUsWrapper>
                <FontAwesomeIcon icon={faCheckSquare} />
                <p>Carefully curated Agile Teams</p>
              </WhyUsWrapper>
              <WhyUsWrapper>
                <FontAwesomeIcon icon={faCheckSquare} />
                <p>Remote network of Developers</p>
              </WhyUsWrapper>
              <WhyUsWrapper>
                <FontAwesomeIcon icon={faCheckSquare} />
                <p>Time Zones Aligned with your Team</p>
              </WhyUsWrapper>
              <WhyUsWrapper>
                <FontAwesomeIcon icon={faCheckSquare} />
                <p>Proven Track Record</p>
              </WhyUsWrapper>
            </WhyUsContainer>
          </Col>
          <WebAppCol md={5}>
            <img src={img} alt="" />
          </WebAppCol>
        </Row>
      </Container>
      <br />
      <br />
    </>
  );
}

export default WebAppWhyUs;
