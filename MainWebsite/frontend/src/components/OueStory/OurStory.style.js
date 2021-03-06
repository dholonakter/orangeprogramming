import styled from "styled-components";

export const OurstoryContainer = styled.div`
  /* display: flex;
  justify-content: space-between; */
  padding: 0 0 5% 0;
  p {
    text-align: justify;
    font-weight: 300;
    /* width: 80%; */
    font-size: 1vw;
    @media (max-width: 1500px) {
      font-size: 15px;
      /* width: 70%; */
    }
    @media (max-width: 1100px) {
      font-size: 13px;
      /* width: 70%; */
    }
    @media (max-width: 768px) {
      font-size: 8px;
      /* width: 70%; */
    }
  }
  /* img {
    width: 18%;
    @media (max-width: 768px) {
      width: 28%;
    }
  } */
`;
export const TeamPhoto = styled.img`
  width: 100%;
  max-height: 100%;
  margin-top: 2%;
`;
