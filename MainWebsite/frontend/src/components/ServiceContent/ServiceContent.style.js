import styled from "styled-components";
import { Row, Col } from "react-grid-system";

export const WebAppWrap = styled.div`
  margin: 80px 0;

  p {
    @media (min-width: 2200px) {
      font-size: 0.8vw;
    }
  }
`;

export const WebAppCol = styled(Col)`
  img {
    width: 100%;

    @media (max-width: 768px) {
      margin-top: 20px;
    }
  }
`;
