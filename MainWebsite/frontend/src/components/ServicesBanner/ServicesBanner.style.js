import styled from "styled-components";

export const ServiceBannerWrapper = styled.div`
  height: 90vh;
  position: relative;
  color: #ffff;
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
  height: 90vh;
  display: grid;
  place-items: center;

  .service__banner {
    /* height: inherit; */
    /* background-color: red; */

    h1 {
      font-weight: 200;
      font-size: 4.3vw;
      text-align: center;
    }

    .hr {
      width: 40vw;
      height: 1px;
      background-color: #f0671f;
      margin: 20px auto;
    }

    p {
      margin: 0 auto;
      max-width: 400px;
      text-align: center;
      font-weight: 300;
    }
  }

  strong {
    font-weight: 800;
  }
`;
