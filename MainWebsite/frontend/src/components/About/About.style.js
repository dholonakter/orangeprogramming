import styled from "styled-components";

export const AboutComponentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 150px 0 50px 0;
  div {
    width: 45%;
    @media (max-width: 768px) {
      width: 100%;
    }
    h1 {
      font-weight: 200;
      span {
        color: #f0671f;
        font-weight: 900;
      }
    }
    p {
      text-align: justify;
      font-weight: 300;

      @media (max-width: 990px) {
        font-size: 12px;
      }
    }
  }
  img {
    width: 50%;
    height: 100%;
    @media (max-width: 990px) {
      width: 55%;
    }
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 5%;
    }
  }
`;
