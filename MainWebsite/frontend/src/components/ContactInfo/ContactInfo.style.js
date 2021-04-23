import styled from "styled-components";

export const ContactInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  /* align-items: center; */

  & > * {
    width: 40%;

    @media (max-width: 1000px) {
      width: 45%;
    }
    @media (max-width: 800px) {
      width: 50%;
    }
    @media (max-width: 768px) {
      width: 100%;

      margin-bottom: 5%;
    }
  }
  .img {
    img {
      width: 70%;
      @media (max-width: 768px) {
        margin: 0 auto;
        display: block;
      }
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;
export const SocialMediaContainer = styled.div`
  text-align: center;
  color: #173857;
  margin-top: 5%;
  div {
    margin: 5% 0;
    display: flex;
    justify-content: space-between;

    img {
      width: 50px;
      :hover{
        cursor: pointer;
      }
      @media (max-width: 768px) {
        width: 30px;
      }
    }
  }
`;
