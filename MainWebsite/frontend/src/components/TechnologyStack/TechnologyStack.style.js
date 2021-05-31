import styled from "styled-components";
import { Col } from "react-grid-system";

export const StackTechWrap = styled.div`
  margin: 120px 0;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }

  h2 {
    @media (min-width: 2200px) {
      font-size: 1.2vw;
    }
  }

  p {
    @media (min-width: 2200px) {
      font-size: 0.8vw;
    }
  }
`;

export const StackTechIconCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    padding: 20px 0;
  }
`;
