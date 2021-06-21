import styled from "styled-components";
import { Col } from "react-grid-system";

export const MethodologyWrapper = styled.div`
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const MethodologyItems = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 15px 0;
  font-size: 20px;
  cursor: pointer;
  margin-right: 30px;

  .methodology__icon {
    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (min-width: 2200px) {
    font-size: 1vw;
  }

  @media (max-width: 1000px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    margin-right: 0px;
  }

  &:hover {
    border-bottom-color: #f0671f;
  }

  div {
    p {
      &:hover {
        color: #f0671f;
      }
    }
  }
  .methodology__active {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #f0671f;
    p {
      font-weight: bold;
    }
  }
`;

export const MethodologyDescWrap = styled.div`
  margin-left: 30px;
  @media (max-width: 768px) {
    margin-left: 0;
    padding-top: 40px;
  }
  h3 {
    font-size: 22px;
    margin-bottom: 20px;
    color: #f0671f;

    @media (min-width: 2200px) {
      font-size: 1.2vw;
    }

    @media (max-width: 1000px) {
      font-size: 18px;
    }
  }

  h5 {
    font-size: 18px;
    font-weight: 600;
    text-align: justify;

    @media (min-width: 2200px) {
      font-size: 1vw;
    }

    @media (max-width: 1000px) {
      font-size: 14px;
    }
  }
`;

export const MethodologyCol = styled(Col)``;
