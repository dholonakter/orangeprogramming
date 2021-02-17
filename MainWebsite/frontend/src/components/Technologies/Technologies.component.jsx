import React from "react";
import { SmallBorderBottom } from "../../utils/constant";
import { Container } from "../../utils/container";
import { HeaderText } from "../../utils/text";
import reactIcon from "../../assets/images/icons/react.png";
import nodeIcon from "../../assets/images/icons/node-js.png";
import laravelIcon from "../../assets/images/icons/laravel.png";
import javaIcon from "../../assets/images/icons/Java-Logo.png";
import djangoIcon from "../../assets/images/icons/django.png";
import aspIcon from "../../assets/images/icons/asp.net-logo.png";
import { TechnologiesContainer } from "./Technologies.styled";

const Technologies = () => {
  return (
    <>
      <Container>
        <HeaderText>Technologies</HeaderText>
              <SmallBorderBottom />
              <TechnologiesContainer>
                  <img src={reactIcon} alt=""/>
                  <img src={nodeIcon} alt=""/>
                  <img src={aspIcon} alt=""/>
                  <img src={laravelIcon} alt=""/>
                  <img src={javaIcon} alt=""/>
                  <img src={djangoIcon} alt=""/>
              </TechnologiesContainer>
      </Container>
    </>
  );
};

export default Technologies;
