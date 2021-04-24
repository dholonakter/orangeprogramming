import styled from "styled-components";

export const ErrorContainer = styled.div`
  height: 100vh;
  width: 100vw;
  /* background-color: #f0671f; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-weight: 700;
    margin-top: 20px;
    color: #173857;

    @media (max-width: 768px) {
      font-size: 20px;
    }
    @media (max-width: 560px) {
      font-size: 16px;
    }
  }

  

  button {
    background-color: #f0671f;
    color: #fff;
    width: 20%;
    margin-top: 20px;

    @media (max-width: 1000px) {
      width: 30%;
    }
    @media (max-width: 768px) {
      width: 40%;
    }
    @media (max-width: 560px) {
      width: 50%;
      font-size: 12px;
    }
  }
`;
