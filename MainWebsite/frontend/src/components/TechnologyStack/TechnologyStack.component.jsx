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

function TechnologyStack() {
  return (
    <>
      <Container>
        <StackTechWrap>
          <Row gutterWidth={30}>
            <Col md={7}>
              <HeaderText>Check out our web technology stack</HeaderText>
              <SmallBorderBottom />
              <p>
                In delivering scalable, flawlessly working apps, top-notch
                technology stack is a must. Here are the web development
                solutions we rely on to deliver high quality applications.
              </p>
              <br />

              <h2>
                6 + <br /> Technologies
              </h2>
              <br />
            </Col>
            <Col md={5}>
              <Row gutterWidth={50}>
                <StackTechIconCol xs={4}>
                  <div>
                    <img src={reactIcon} alt="" />
                  </div>
                </StackTechIconCol>
                <StackTechIconCol xs={4}>
                  <div>
                    <img src={nodeIcon} alt="" />
                  </div>
                </StackTechIconCol>
                <StackTechIconCol xs={4}>
                  <div>
                    <img src={laravelIcon} alt="" />
                  </div>
                </StackTechIconCol>
                <StackTechIconCol xs={4}>
                  <div>
                    <img src={aspIcon} alt="" />
                  </div>
                </StackTechIconCol>
                <StackTechIconCol xs={4}>
                  <div>
                    <img src={pythonIcon} alt="" />
                  </div>
                </StackTechIconCol>
              </Row>
            </Col>
          </Row>
        </StackTechWrap>
      </Container>
    </>
  );
}

export default TechnologyStack;
