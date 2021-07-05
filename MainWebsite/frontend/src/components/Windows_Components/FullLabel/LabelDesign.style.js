import styled from "styled-components";

export const LabelBody = styled.div`
  width: 100%;
  // height: 100px;
  background-image: linear-gradient(to right, #00a192, #23408e);
  padding: 20px 7px;

  p {
    font-size: 1.6vw;
    font-weight: 700;
    color: #fff;
    // height: 6vh;
    // line-height: 6vh;
    // background: red;
    text-align: center;
    padding: 5px 0;
  }

  button {
    background: #f0671f;
    font-size: 1.4vw;
    font-weight: 700;
    color: #fff;
    padding: 7px 50px;
    // border: 1px solid #f0671f;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    svg {
      display: none;
    }
    &:hover svg {
      display: inline-block;
    }
  }

  @media (max-width: 1400px) {
    // padding: 20px 0;
    p {
      font-size: 22px;
    }
    button {
      font-size: 16px;
      padding: 7px 30px;
    }
  }
  @media (max-width: 599px) {
    // padding: 20px 7px;
    & > div > div {
      // background: red;
      margin-top: 10px;
    }
    p {
      font-size: 18px;
    }
    button {
      // margin-top: 25px;
      font-size: 13px;
      padding: 7px 30px;
      margin: auto;
      text-align: center;
    }
  }
`;
