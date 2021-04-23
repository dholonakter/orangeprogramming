import styled from "styled-components";
import img from "../../assets/images/banner-imgs/banner-img-1.jpg";

export const BannerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  &:focus {
    border: none;
    outline: none;
  }
`;

export const BannerImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BannerOverlay = styled.div`
  background: linear-gradient(
    0deg,
    rgba(23, 56, 87, 0.84),
    rgba(23, 56, 87, 0.7)
  );
  position: absolute;
  width: inherit;
  height: inherit;
  display: grid;
  place-items: center;
  .hr {
    width: 40vw;
    height: 1px;
    background-color: #f0671f;
    margin: 0 auto;
  }

  h1 {
    color: #fff;
    font-weight: 100;
    font-size: 4.3vw;
    margin: 0 auto;
    span {
      font-weight: 900;
    }
  }
`;
