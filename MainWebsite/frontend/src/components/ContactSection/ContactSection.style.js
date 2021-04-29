import styled from "styled-components";
import contactBg from "../../assets/images/contact-bg.png";
export const ContactSectionWrap = styled.div`
  background-position: bottom;
  background: url(${contactBg});
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  padding: 5% 0;
`;

export const ContactSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .left {
    width: 50%;
    background: #173857;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5%;

    @media (max-width: 768px) {
      padding: 5%;
      width: 100%;
    }

    hr {
      display: block;
      height: 1px;
      border: 0;
      border-top: 1px solid grey;
      margin: 5% 0;
    }

    h1 {
      font-size: 30px;
      @media (max-width: 1100px) {
        font-size: 25px;
      }
      @media (max-width: 950px) {
        font-size: 20px;
      }
    }
    h4 {
      font-size: 20px;
      @media (max-width: 1100px) {
        font-size: 16px;
      }
      @media (max-width: 950px) {
        font-size: 14px;
      }
    }

    p {
      font-weight: 300;
      font-size: 14px;
      padding-bottom: 8px;
      @media (max-width: 950px) {
        font-size: 12px;
      }
    }
  }

  .right {
    width: 50%;
    height: 100%;
    overflow: hidden;
    padding: 5% 0;
    @media (max-width: 768px) {
      width: 100%;
    }
    form {
      text-align: center;
      width: 80%;
      margin: 0 auto;

      input,
      textarea {
        display: block;
        width: 100%;
        border: 0;
        padding: 10px 5px;
        background: white no-repeat;
        background-image: linear-gradient(to bottom, #f0671f, #f0671f),
          linear-gradient(to bottom, silver, silver);
        background-size: 0 2px, 100% 1px;
        background-position: 50% 100%, 50% 100%;
        transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);

        &:focus {
          background-size: 100% 2px, 100% 1px;
          outline: none;
        }
      }
    }
    button {
      width: 100%;
      background-color: #f0671f;
      color: #fff;

      &:hover {
        color: #f0671f;
        background-color: #fff;
      }
    }
  }
`;
