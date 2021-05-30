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
  }
`;
