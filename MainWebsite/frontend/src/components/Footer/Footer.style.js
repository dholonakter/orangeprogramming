import styled from "styled-components";

export const FooterContainerWrap = styled.div`
  width: 100vw;
  background: #173857;
  padding: 3% 0;

  h4 {
    font-size: 1.3vw;
    @media (max-width: 1920px) {
      font-size: 20px;
      /* width: 70%; */
    }
  }
  p > a,
  .tech {
    font-size: 0.7vw;
    @media (max-width: 1920px) {
      font-size: 14px;
      /* width: 70%; */
    }
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid grey;
    margin: 1em 0;
    padding: 0;
  }

  small {
    text-align: center;
    display: block;
    padding: 2% 0 1% 0;
    color: #fff;
    font-weight: 200;
    font-size: 0.6vw;
    @media (max-width: 1920px) {
      font-size: 13px;
    }
    @media (max-width: 1100px) {
      font-size: 10px;
    }
    @media (max-width: 700px) {
      font-size: 8px;
    }
  }
`;

export const FooterWrapContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  img {
    width: 60%;
    display: block;
    @media (max-width: 1200px) {
      width: 40%;
      margin: 0 auto;
    }
    @media (max-width: 560px) {
      width: 100%;
      padding: 5% 25%;
    }
  }
`;

export const FooterContentWrap = styled.div`
  color: #fff;
  padding-bottom: 2rem;

  @media (max-width: 860px) {
    padding: 0rem;
  }

  h4 {
    font-weight: 600;

    @media (max-width: 1200px) {
      font-size: 14px;
    }
    @media (max-width: 860px) {
      font-size: 12px;
    }
  }

  p {
    font-weight: 300;
    font-size: 14px;

    @media (max-width: 1200px) {
      font-size: 12px;
    }
    @media (max-width: 860px) {
      font-size: 10px;
    }
  }
`;

export const Newslatter = styled.div`
  color: #fff;
  @media (max-width: 680px) {
    width: 100%;
  }
  h4 {
    font-weight: 600;

    @media (max-width: 1200px) {
      font-size: 14px;
    }

    @media (max-width: 860px) {
      font-size: 12px;
    }
  }

  p {
    font-weight: 300;
    font-size: 0.7vw;

    @media (max-width: 1920px) {
      font-size: 14px;
    }
    @media (max-width: 1200px) {
      font-size: 12px;
    }
    @media (max-width: 860px) {
      font-size: 10px;
    }
  }

  form {
    input {
      height: 35px;
      width: 70%;
      padding-left: 5%;
      border: none;
      outline: none;
      margin-top: 5%;
      // font-size: 0.9vw;
      // @media(max-width: 1200px){
      //   font-size: 13px
      // }
    }
    button {
      height: 35px;
      border: none;
      outline: none;
      background-color: #f0671f;
      color: #fff;
      width: 30%;
      margin-top: 5%;
      // font-size: 0.9vw;
      // @media(max-width: 1200px){
      //   font-size: 13px
      // }
    }
  }
`;

export const FooterIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 6%;
`;

export const FooterIconWrap = styled.div`
  width: 40px;
  height: 40px;
  text-align: center;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 50%;
  border: 2px solid #fff;
  font-size: 10px;
  cursor: pointer;
  transition: all 0.3s;
  svg {
    // width: 50px;
  }
  &:hover {
    color: #f0671f;
    border-color: #f0671f;
  }
`;
