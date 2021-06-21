import styled from "styled-components";
import withReveal from "react-reveal/withReveal";
import Fade from "react-reveal/Fade";

export const MobileDevelopmentSolutionsWrap = styled.div`
  width: 100%;
  height: auto;
  background: linear-gradient(to bottom, #fff 50%, #f0671f 0%);
  margin-bottom: 50px;

  @media (max-width: 768px) {
    background: #f0671f;
  }
`;

export const MobileDevelopmentSolutionsContainer = styled.div`
  position: relative;

  main {
    height: auto;
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const MobileSolutionCol = styled.div`
  background-color: #fff;
  border: 1px solid #e3e3e3;
  width: 48%;
  padding: 20px;
  margin-bottom: 60px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  @media (min-width: 2200px) {
    margin-bottom: 5vw;
    padding: 2vw;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
    margin-bottom: 30px;
  }

  img {
    width: 100%;
  }

  h3 {
    text-align: center;
    font-weight: 500;
    font-size: 22px;
    margin: 5px 0;

    @media (min-width: 2200px) {
      font-size: 1.1vw;
      margin: 0.9vw 0;
    }

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 14px;
    padding: 0 10px;
    text-align: justify;
    @media (min-width: 2200px) {
      font-size: 0.8vw;
      padding: 0 1.5vw;
    }

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;
