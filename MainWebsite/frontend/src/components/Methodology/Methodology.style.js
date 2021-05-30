import styled from "styled-components";

export const MethodologyWrapper = styled.div`
  margin-bottom: 100px;
`;

export const MethodologyItems = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 15px 0;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    border-bottom-color: #f0671f;
  }

  div {
    p {
      &:hover {
        color: #f0671f;
      }
    }
  }
  .methodology__active {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #f0671f;
    p {
      font-weight: bold;
    }
  }
`;

export const MethodologyDescWrap = styled.div`
  @media (max-width: 768px) {
    padding-top: 40px;
  }
  h3 {
    font-size: 22px;
    margin-bottom: 20px;
    color: #f0671f;
  }

  h5 {
    font-size: 18px;
    font-weight: 600;
  }
`;
