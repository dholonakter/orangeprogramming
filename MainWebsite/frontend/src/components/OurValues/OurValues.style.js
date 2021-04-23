import styled from "styled-components";

export const OurValuesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem 5rem;
  /* grid-template-columns: repeat(auto-fit,minmax(12rem,1fr)); */
  padding: 2% 0 8% 0;

  @media (max-width: 768px) {
    grid-gap: 2rem 3rem;
    padding: 5% 0 5% 0;
  }
  @media (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 10% 0 10% 0;
  }
`;

export const OurValuesContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  justify-content: space-between;
  img {
    width: 60px;
    @media (max-width: 768px) {
      width: 45px;
    }
  }
  .our__values_text {
    width: 85%;
    text-align: justify;
    @media (max-width: 1470px) {
      width: 80%;
    }
    @media (max-width: 1100px) {
      width: 75%;
    }
    @media (max-width: 560px) {
      width: 80%;
    }
    h3 {
      @media (max-width: 1470px) {
        font-size: 16px;
      }
      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
    small {
      @media (max-width: 768px) {
        font-size: 10px;
        line-height: 5px;
      }
    }
  }
`;
