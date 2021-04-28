import styled from "styled-components";

export const ContactInfoContainer = styled.div`

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 100px 0 125px 0;

  // margin: 2vw 0 2vw 0;

  & > * {
    width: 40%;
    // padding-bottom: 80px;
    @media (max-width: 1000px) {
      width: 45%;
      // padding-bottom: 65px;
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
  // margin-top: 5%;
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
