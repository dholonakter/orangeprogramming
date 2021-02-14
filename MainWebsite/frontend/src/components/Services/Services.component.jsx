import React from "react";
import { Container } from "../../utils/container";
import { HeaderText, NormalText, TitleText } from "../../utils/text";
import { ServiceCard, ServicesCardConatiner } from "./Services.style";
import webIcon from "../../assets/images/icons/web-app-icon.png";
import mobAppIcon from "../../assets/images/icons/android-ios-icon.png";
import cloudStoreIcon from "../../assets/images/icons/cloud-storage-icon.png";
import aiIcon from "../../assets/images/icons/ai-icon.png";
import { SmallBorderBottom } from "../../utils/constant";

const Services = () => {
  return (
    <>
      <Container>
        <br />
        <br/>
        <HeaderText>Services that we provide</HeaderText>
        <SmallBorderBottom />
        <ServicesCardConatiner>
          <ServiceCard>
            <img src={webIcon} alt="" />
            <TitleText>Web Application</TitleText>
            <NormalText>
              Stay ahead of the game with tailor-made mobile and web apps
            </NormalText>
          </ServiceCard>
          <ServiceCard>
            <img src={mobAppIcon} alt="" />
            <TitleText>Android/IOS Application</TitleText>
            <NormalText>
              Stay ahead of the game with tailor-made mobile and web apps
            </NormalText>
          </ServiceCard>
          <ServiceCard>
            <img src={aiIcon} alt="" />
            <TitleText>Artificial Intelligence</TitleText>
            <NormalText>
              Stay ahead of the game with tailor-made mobile and web apps
            </NormalText>
          </ServiceCard>
          <ServiceCard>
            <img src={cloudStoreIcon} alt="" />
            <TitleText>Cloud Service</TitleText>
            <NormalText>
              Stay ahead of the game with tailor-made mobile and web apps
            </NormalText>
          </ServiceCard>
        </ServicesCardConatiner>
      </Container>
    </>
  );
};

export default Services;
