import styled from "styled-components";

export const ProcessPlanContainerWrap = styled.div`
  margin: 0;
  height: 50vh;
  text-align: center;
  color: #fff;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }

  .left {
    height: inherit;
    background-color: #f0671f;
    width: 60%;
    text-align: left;
    padding: 3% 0 3% 0;

    @media (max-width: 768px) {
      width: 100%;
      position: relative;
    }

    div {
      border-left: 1px solid #fff;
      margin-left: 17%;
      
    }
    p {
      font-size: 1vw;
      font-weight: 200;
      padding: 0 0 1.5% 2%;
      cursor: pointer;
      
      @media (max-width:1360px){
          font-size: 18px;
      }
      @media (max-width:1130px){
          font-size: 16px;
      }

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }

  .right {
    height: inherit;
    background-color: #173857;
    width: 70%;
    margin-left: -10%;
    margin-top: -4%;
    position: absolute;
    right: 0;
    display: flex;
    align-items:center;
    justify-content:space-between;
    padding: 0% 10% 0% 3%;

    @media (max-width: 768px) {
      width: 100%;
      position: relative;
      margin-left: auto;
      height: auto;
      flex-direction: column;
      margin-top: 0;
      padding: 5%;
    }

    div {
      padding-left: 5%;
      @media (max-width: 768px) {
        padding: 5% 0 0 0;
      }
      button {
        margin-top: 5%;
      }
    }

    img {
     height:80%;
     width:80%;

  @media(max-width: 1200px){
    height:70%;
     width:70%;
  }
  @media(max-width: 1100px){
    height:60%;
     width:60%;
  }
  @media(max-width: 1000px){
    height:50%;
     width:50%;
  }
    }

    p {
      text-align: justify;
      font-weight: 200;
      font-size: 1vw;
      /* @media (max-width:1360px){
          font-size: 16px;
      }
      @media (max-width:1130px){
          font-size: 12px;
      } */

      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
  }
`;
