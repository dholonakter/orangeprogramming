import styled from "styled-components";
export const PrimaryButton = styled.button`
  background: transparent;
  border: 2px solid #f0671f;
  color: #f0671f;
  outline: none;
  padding: 13px 15px;
  display: block;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  transition: all 0.3s;
  &:hover {
    background: #f0671f;
    cursor: pointer;
    color: #fff;
  }
`;
