import styled from "styled-components";

export const ServicesCardConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const ServiceCard = styled.div`
  width: 23%;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  border-bottom: 4px solid #2e326b;
  margin-bottom: 5%;
  img {
    width: 40%;
    padding: 0 0 5% 0;
  }

  @media (max-width: 768px) {
    width: 48%;
  }
  @media (max-width: 560px) {
    width: 100%;
  }

  h5 {
    font-size: 1vw;
text-align:center;
    @media (max-width: 1000px) {
      font-size: 10px;
    }
  }

  small {
    text-align: justify;
    font-size: 0.8vw;

    @media (max-width: 900px) {
      font-size: 8px;
    }
  }
`;
