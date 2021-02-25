import React from "react";
import { Container } from "../../utils/container";
import { HeaderText, small, h5 } from "../../utils/text";
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
            <h5>Web Application</h5>
            <small>
              Stay ahead of the game with tailor-made mobile and web apps
            </small>
          </ServiceCard>

          <ServiceCard>
            <img src={mobAppIcon} alt="" />
            <h5>Android/IOS Application</h5>
            <small>
              Stay ahead of the game with tailor-made mobile and web apps
            </small>
          </ServiceCard>

          <ServiceCard>
            <img src={aiIcon} alt="" />
            <h5>Artificial Intelligence</h5>
            <small>
              Stay ahead of the game with tailor-made mobile and web apps
            </small>
          </ServiceCard>

          <ServiceCard>
            <img src={cloudStoreIcon} alt="" />
            <h5>Cloud Service</h5>
            <small>
              Stay ahead of the game with tailor-made mobile and web apps
            </small>
          </ServiceCard>
          
        </ServicesCardConatiner>
      </Container>
    </>
  );
};

export default Services;
