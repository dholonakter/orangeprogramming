import React from "react";
import { Container } from "../../utils/container";
import { Row, Col } from "react-grid-system";
import { HeaderText } from "../../utils/text";
import { SmallBorderBottom } from "../../utils/constant";
import { WebAppCol, WebAppWrap } from "./ServiceContent.style";

function ServiceContent({ data }) {
  const { img, title, description } = data;

  return (
    <>
      <WebAppWrap>
        <Container>
          <Row gutterWidth={20}>
            <WebAppCol md={6.5}>
              <HeaderText>
                {title[0]} <br />
                {title[1]}
              </HeaderText>
              <SmallBorderBottom />
              <p>{description}</p>
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

export default ServiceContent;
