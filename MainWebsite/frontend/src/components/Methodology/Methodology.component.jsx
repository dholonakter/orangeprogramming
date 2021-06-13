import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Row, Col } from "react-grid-system";
import { Container } from "../../utils/container";
import Fade from "react-reveal/Fade";
import {
  MethodologyDescWrap,
  MethodologyItems,
  MethodologyWrapper,
} from "./Methodology.style";
import { HeaderText } from "../../utils/text";
import { SmallBorderBottom } from "../../utils/constant";

function Methodology({ data, header}) {
  const [selectedMethodology, setSelectedMethodology] = useState(data[0]);

  console.log(selectedMethodology);

  return (
    <>
      <Container>
        <MethodologyWrapper>
          <HeaderText>{header}</HeaderText>
          <SmallBorderBottom />
          <Row>
            <Col md={6}>
              {data.map((item) => (
                <MethodologyItems key={item.id}>
                  <div
                    className={
                      item.id === selectedMethodology.id
                        ? "methodology__active"
                        : "methodology__inactive"
                    }
                  >
                    <p
                      onClick={() => {
                        setSelectedMethodology(item);
                      }}
                    >
                      {item.title}
                    </p>
                    {item.id === selectedMethodology.id ? (
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="methodology__icon"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </MethodologyItems>
              ))}
            </Col>
            <Col md={6}>
              <Fade bottom cascade>
                <MethodologyDescWrap>
                  <h3>{selectedMethodology.title}</h3>
                  <h5>{selectedMethodology.description}</h5>
                </MethodologyDescWrap>
              </Fade>
            </Col>
          </Row>{" "}
        </MethodologyWrapper>
      </Container>
    </>
  );
}

export default Methodology;
