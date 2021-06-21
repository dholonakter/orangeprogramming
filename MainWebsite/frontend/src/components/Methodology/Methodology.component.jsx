import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import React, { useState } from "react";
import { Row, Col } from "react-grid-system";
import { Container } from "../../utils/container";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Fade from "react-reveal/Fade";
import {
  MethodologyDescWrap,
  MethodologyItems,
  MethodologyWrapper,
} from "./Methodology.style";
import { HeaderText } from "../../utils/text";
import { SmallBorderBottom } from "../../utils/constant";
import useWindowDimensions from "../../utils/windowDimentions";
import Typography from "@material-ui/core/Typography";

function Methodology({ data, header }) {
  const [selectedMethodology, setSelectedMethodology] = useState(data[0]);
  const [expanded, setExpanded] = React.useState("panel1");
  const { height, width } = useWindowDimensions();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Container>
        <MethodologyWrapper>
          <HeaderText>{header}</HeaderText>
          <SmallBorderBottom />

          {width >= 768 ? (
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
            </Row>
          ) : (
            data.map((item, idx) => (
              <Accordion
                square
                expanded={expanded === `panel${idx + 1}`}
                onChange={handleChange(`panel${idx + 1}`)}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography variant="h6">{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{selectedMethodology.description}</Typography>
                </AccordionDetails>
              </Accordion>
            ))
          )}
        </MethodologyWrapper>
      </Container>
    </>
  );
}

export default Methodology;
