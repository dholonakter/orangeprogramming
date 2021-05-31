import styled from "styled-components";

export const ServiceBannerWrapper = styled.div`
  height: 100vh;
  position: relative;
  color: #ffff;
  width: 100vw;
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`;

export const ServiceBannerOverlay = styled.div`
  background: linear-gradient(
    0deg,
    rgba(23, 56, 87, 0.8),
    rgba(23, 56, 87, 0.8)
  );
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;

  .service__banner {
    /* height: inherit; */
    /* background-color: red; */

    h1 {
      font-weight: 200;
      font-size: 4.3vw;
      text-align: center;

      @media (max-width: 1024px) {
        font-size: 34px;
      }
      @media (max-width: 768px) {
        font-size: 30px;
      }
      @media (max-width: 600px) {
        font-size: 26px;
      }
      @media (max-width: 460px) {
        font-size: 20px;
      }
      @media (max-width: 350px) {
        font-size: 5.5vw;
      }
    }

    .hr {
      width: 40vw;
      height: 1px;
      background-color: #f0671f;
      margin: 20px auto;

      @media (max-width: 550px) {
        margin: 10px auto;
      }
    }

    p {
      margin: 0 auto;
      max-width: 400px;
      text-align: center;
      font-weight: 300;
      font-size: 0.8vw;

      @media (max-width: 1500px) {
        font-size: 16px;
      }
      @media (max-width: 768px) {
        font-size: 14px;
      }
      @media (max-width: 560px) {
        font-size: 12px;
      }
      @media (max-width: 300px) {
        font-size: 10px;
      }
    }
  }

  strong {
    font-weight: 800;
  }
`;
