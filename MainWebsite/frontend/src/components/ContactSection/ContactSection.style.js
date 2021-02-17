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
  .left {
    width: 50%;
    background: #173857;
    padding: 8% 5%;

    hr {
      display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid grey;
    margin: 5% 0;
    }

    p {
      color: #fff;
      font-weight: 300;
    }
  }

  .right {
    width: 50%;
    height: 100%;
    overflow: hidden;
    padding: 5% 0;

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
  }
`;
