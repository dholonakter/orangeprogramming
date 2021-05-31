import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;

  @media (max-width: 1000px) {
    width: 90vw;
  }

  @media (max-width: 768px) {
    /* width:90vw;
    margin: 0 auto; */
    width: 90%;
  }
`;
