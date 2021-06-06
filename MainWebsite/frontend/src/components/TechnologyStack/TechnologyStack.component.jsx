import React from "react";
import { Row, Col } from "react-grid-system";
import { SmallBorderBottom } from "../../utils/constant";
import { Container } from "../../utils/container";
import { HeaderText } from "../../utils/text";
import reactIcon from "../../assets/images/icons/react.png";
import nodeIcon from "../../assets/images/icons/node-js.png";
import laravelIcon from "../../assets/images/icons/laravel.png";
import pythonIcon from "../../assets/images/icons/python.png";
import aspIcon from "../../assets/images/icons/asp.net-logo.png";
import { StackTechIconCol, StackTechWrap } from "./TechnologyStack.style";

function TechnologyStack({ data }) {
  const { title, description, imgs, numOfTechs } = data;
  console.log(data);
  return (
    <>
      <Container>
        <StackTechWrap>
          <Row gutterWidth={30}>
            <Col md={7}>
              <HeaderText>{title}</HeaderText>
              <SmallBorderBottom />
              <p>{description}</p>
              <br />

              <h2>
                {numOfTechs} + <br /> Technologies
              </h2>
              <br />
            </Col>
            <Col md={5}>
              <Row gutterWidth={50}>
                {imgs.map((img, idx) => (
                  <StackTechIconCol xs={4} key={idx}>
                    <div>
                      <img src={img} alt="" />
                    </div>
                  </StackTechIconCol>
                ))}
              </Row>
            </Col>
          </Row>
        </StackTechWrap>
      </Container>
    </>
  );
}

export default TechnologyStack;
