import styled from "styled-components";

export const Nav = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  width: 80vw;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px 0;

  @media (max-width: 1000px) {
    width: 90vw;
  }
`;

export const NavLogo = styled.img`
  width: 184px;

  @media (max-width: 1200px) {
    width: 150px;
  }
`;
