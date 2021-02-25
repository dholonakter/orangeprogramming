import styled from "styled-components";

export const TopContactBarContainerWrap = styled.div`
  background: #f0671f;
  border-bottom: 1px solid #fff;
`;

export const TopContactBarContainer = styled.div`
  display: flex;
  height: 35px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 80vw;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    padding: 1% 0;
    align-items: flex-start;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media (max-width: 560px) {
      font-size: 10px;
    }
    @media (max-width: 400px) {
      font-size: 8px;
    }

    span {
      padding-left: 10px;
      color: black;

      @media (max-width: 700px) {
        padding-left: 5px;
      }
    }
  }

  div {
    width: 40%;
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    color: #fff;

    /* @media (max-width: 1000px) {
      width: 55%;
    } */

    @media (max-width: 768px) {
      font-size: 10px;
      position: absolute;
      width: 40%;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      bottom: 0;
    }

    @media (max-width: 700px) {
      font-size: 8px;
    }
  }
  @media (max-width: 1000px) {
    width: 90vw;
  }
`;
