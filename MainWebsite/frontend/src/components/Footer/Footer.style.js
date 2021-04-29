import styled from "styled-components";

export const FooterContainerWrap = styled.div`
  width: 100vw;
  background: #173857;
  padding: 3% 0;

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
  }
`;

export const FooterWrapContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  img {
    width: 10%;
    height: 10%;

    @media (max-width: 560px) {
      width: 100%;
      padding: 5% 25%;
    }
  }
`;

export const FooterContentWrap = styled.div`
  color: #fff;
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
    margin-top: 10%;
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

  form {
    input {
      height: 35px;
      width: 70%;
      padding-left: 5%;
      border: none;
      outline: none;
      margin-top: 5%;
    }
    button {
      height: 35px;
      border: none;
      outline: none;
      background-color: #f0671f;
      color: #fff;
      width: 30%;
      margin-top: 5%;
    }
  }
`;

export const FooterIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8%;
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
  &:hover {
    color: #f0671f;
    border-color: #f0671f;
  }
`;
