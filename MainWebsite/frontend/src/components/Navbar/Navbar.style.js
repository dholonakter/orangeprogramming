import styled from "styled-components";

export const NavWrap = styled.div`
  position: fixed;
  z-index:10;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ navBar }) => (navBar ? "#173857" : "")};
  box-shadow: ${({ navBar }) =>
    navBar ? "0 1px 6px 0 rgb(32 33 36 / 28%)" : ""};
  transition: all 0.3s;
  padding:5px 0;
  margin: ${({ navBar }) => (navBar ? "0 auto" : "35px auto")};

  @media (max-width: 768px) {
    padding: 2px 0; 
  }
`;

export const Nav = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position:relative;
  width: 80vw;
  padding: ${({ navBar }) => (navBar ? "5px 0" : "15px 0")};

  @media (max-width: 1000px) {
    width: 90vw;
  }
`;

export const NavLogo = styled.img`
  width: ${({ navBar }) => (navBar ? "130px" : "160px")};
  transition: all 0.5s;

  @media (max-width: 1200px) {
    width: 140px;
  }
  @media (max-width: 768px) {
    width: 120px;
  }
`;



