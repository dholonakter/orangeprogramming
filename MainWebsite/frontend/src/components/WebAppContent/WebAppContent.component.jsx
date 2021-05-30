import React from "react";
import { Container } from "../../utils/container";
import { Row, Col } from "react-grid-system";
import { HeaderText } from "../../utils/text";
import { SmallBorderBottom } from "../../utils/constant";
import img from "../../assets/images/web-app-img.png";
import { WebAppCol, WebAppWrap } from "./WebAppContent.style";

function WebAppContent() {
  return (
    <>
      <WebAppWrap>
        <Container>
          <Row gutterWidth={20}>
            <WebAppCol md={6.5}>
              <HeaderText>
                Turn your ideas into <br /> outstanding digital products
              </HeaderText>
              <SmallBorderBottom />
              <p>
                Want to create a web or mobile application, but you’re not sure
                where to start? We’ve got you covered. We specialize in building
                end-to-end solutions, with our experts ready to help you in
                every step of the way, from product ideation all the way to
                maintanance and support. Front-end or back-end, native app or
                cross-platform—we help you specify your needs and code your
                ideas by turning them into successful, market-ready jewels.
              </p>
            </WebAppCol>
            <WebAppCol md={5.5}>
              <img src={img} alt="" />
            </WebAppCol>
          </Row>
        </Container>
      </WebAppWrap>
    </>
  );
}

export default WebAppContent;
