import styled from "styled-components";

export const SocialMediaSidebarContainer = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  padding: 0px;
  margin: 0px;
  z-index: 1;

  ul {
    li {
      list-style: none;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        width: 50px;
        box-shadow: 2px 5px 10px grey;
      }

      a {
        color: #fff;
        font-size: 18px;
      }
    }
    .fb {
      background-color: #3b5998;
    }
    .linkedin {
      background-color: #0e76a8;
    }
    .insta {
      background-color: #c32aa3;
    }
    .twitter {
      background-color: #00acee;
    }
    .youtube {
      background-color: #c4302b;
    }
  }
`;
