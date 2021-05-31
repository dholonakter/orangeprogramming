import styled from "styled-components";

export const WhyUsContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  width: fit-content;
`;

export const WhyUsWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;

  align-items: center;
  & > :first-child {
    font-size: 30px;
    color: #f0671f;
    margin-right: 15px;
  }

  p {
    font-size: 18px;
    font-weight: 600;

    @media (min-width: 2200px) {
      font-size: 1vw;
    }
    @media (max-width: 450px) {
      font-size: 14px;
    }
    @media (max-width: 350px) {
      font-size: 12px;
    }
  }
`;
