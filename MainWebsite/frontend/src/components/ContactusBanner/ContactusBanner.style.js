import styled from "styled-components";
import bgImg from "../../assets/images/contact-page-bg.png";
export const ContactusBannerContainer = styled.div`
  position: relative;
  background: linear-gradient(
      0deg,
      rgba(23, 56, 87, 0.6),
      rgba(23, 56, 87, 0.6)
    ),
    url(${bgImg});
  background-size: cover;
  // margin-bottom: 5%;
  background-position: top;
`;

export const ContactusBannerOverlay = styled.div`
  padding: 10% 0 5% 0;
  display: flex;
  flex-wrap: wrap;
  p{
    font-size: 1vw;
    @media(max-width: 1200px){
      font-size: 14px;
    }
  }
  @media (max-width: 1200px) {
    padding: 100px 0 80px 0;
  }
  .left__section {
    width: 50%;
    color: #fff;
    @media (max-width: 768px) {
      width: 100%;
    }
    h1 {
      font-size: 3vw;

      @media (max-width: 768px) {
        font-size: 26px;
      }
    }
  }
  .contact__form {
    width: 50%;
    height: fit-content;
    /* background: linear-gradient(
      0deg,
      rgba(23, 56, 87, 0.2),
      rgba(23, 56, 87, 0.2)
    ); */
    /* background: linear-gradient(
        0deg,
        rgba(222, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ); */
    /* border: 1px solid #f0671f; */
    background-color: #fff;
    @media (max-width: 768px) {
      width: 100%;
      margin-top: 5%;
    }

    form {
      text-align: center;
      width: 80%;
      margin: 0 auto;
      padding: 10% 0;
      input,
      textarea {
        display: block;
        width: 100%;
        border: 0;
        padding: 10px 5px;
        background: lightgray no-repeat;
        background-image: linear-gradient(to bottom, #f0671f, #f0671f),
          linear-gradient(to bottom, silver, silver);
        background-size: 0 2px, 100% 1px;
        background-position: 50% 100%, 50% 100%;
        transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
        font-size: 0.9vw;
        @media(max-width: 1200px){
          font-size: 12px;
        }
        &:focus {
          background-size: 100% 2px, 100% 1px;
          outline: none;
        }
      }

      button {
        width: 100%;
        background-color: #f0671f;
        color: #fff;
        font-size: 0.9vw;
        @media(max-width: 1200px){
          font-size: 12px;
        }
        &:hover {
          color: #f0671f;
          background: #fff;
        }
      }
    }
  }
`;




export const ContactFormBody = styled.div`
.contact__form {
  width: 100%;
  height: fit-content;
  /* background: linear-gradient(
    0deg,
    rgba(23, 56, 87, 0.2),
    rgba(23, 56, 87, 0.2)
  ); */
  /* background: linear-gradient(
      0deg,
      rgba(222, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ); */
  /* border: 1px solid #f0671f; */
  background-color: #fff;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 5%;
  }

  form {
    text-align: center;
    width: 80%;
    margin: 0 auto;
    padding: 10% 0;
    input,
    textarea {
      display: block;
      width: 100%;
      border: 0;
      padding: 10px 5px;
      background: lightgray no-repeat;
      background-image: linear-gradient(to bottom, #f0671f, #f0671f),
        linear-gradient(to bottom, silver, silver);
      background-size: 0 2px, 100% 1px;
      background-position: 50% 100%, 50% 100%;
      transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
      font-size: 0.9vw;
      @media(max-width: 1200px){
        font-size: 12px;
      }
      &:focus {
        background-size: 100% 2px, 100% 1px;
        outline: none;
      }
    }

    button {
      width: 100%;
      background-color: #f0671f;
      color: #fff;
      font-size: 0.9vw;
      @media(max-width: 1200px){
        font-size: 12px;
      }
      &:hover {
        color: #f0671f;
        background: #fff;
      }
    }
  }
}
`;