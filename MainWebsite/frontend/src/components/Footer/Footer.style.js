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
`;

export const FooterContentWrap = styled.div`
  color: #fff;

  h4 {
    font-weight: 600;
  }

  p {
    font-weight: 300;
    font-size: 14px;
  }

  img {
    width: 70%;
  }
`;
