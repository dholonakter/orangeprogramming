import React from "react";
import img from "../../assets/images/services-banner-imgs/web-app-banner.png";
import { Container } from "../../utils/container";
import {
  ServiceBannerOverlay,
  ServiceBannerWrapper,
} from "./ServicesBanner.style";

function ServicesBanner({ data }) {
  const { bgImg, title, description } = data;

  return (
    <>
      <ServiceBannerWrapper>
        <img src={bgImg} alt="" />
        <ServiceBannerOverlay>
          <Container className="service__banner">
            <h1>
              <strong>{title.bold} </strong>
              {title.normal}
            </h1>
            <div className="hr" />
            <p>{description}</p>
          </Container>
        </ServiceBannerOverlay>
      </ServiceBannerWrapper>
    </>
  );
}

export default ServicesBanner;
