import styled from "styled-components";
import bgImg from "../../assets/images/about-us-banner.png";
export const AboutComponentContainer = styled.div`
  background: linear-gradient(
      0deg,
      rgba(23, 56, 87, 0.9),
      rgba(23, 56, 87, 0.9)
    ),
    url(${bgImg});
  display: grid;
  place-items: center;
  padding: 10% 0 5% 0;
  background-position: center;
  background-size: cover;
  margin-bottom: 5%;
  @media (max-width: 1100px) {
    padding: 15% 0 10% 0;
  }
  @media (max-width: 768px) {
    padding: 100px 0 50px 0;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  flex-wrap: wrap;
  & > * {
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
  div {
    color: #fff;

    h1 {
      font-weight: 200;
      font-size: 3vw;
      line-height: 3vw;

      @media (max-width: 1000px) {
        font-size: 26px;
        line-height: 26px;
      }

      span {
        color: #f0671f;
        font-weight: 900;
      }
    }

    /* p {
      font-weight: 200;
      font-size: 1.1vw;
      text-align: justify;
      color: #f0671f;
      background-color: #fff;
      @media (max-width: 1000px) {
        font-size: 12px;
        margin-bottom: 25px;
      }
    } */

    img {
      width: 80%;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
  .img-container {
    display: grid;
    place-items: center;
  }
`;
export const CheckBoxItems = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 22px;
  img {
    width: 32px !important;
    height: 32px;
    margin-right: 25px;
    /* height: 40px; */
  }
  p {
    font-weight: 200;
    font-size: 15px;

    @media (max-width: 1200px) {
      font-size: 12px;
    }
    @media (max-width: 900px) {
      font-size: 10px;
    }
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;