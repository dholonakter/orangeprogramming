import styled from "styled-components";

export const TeamMemberConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 8%;
`;

export const TeamMember = styled.div`
  width: 22%;
  @media (max-width: 560px) {
    width: 47%;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .memeber__info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .info {
      p {
        margin-bottom: 5px;
        font-size: 18px;

        @media (max-width: 1100px) {
          font-size: 16px;
        }
        @media (max-width: 768px) {
          font-size: 14px;
        }
      }
      h6 {
        margin-bottom: 12px;
        font-size: 12px;
        padding-bottom: 10px;
        border-bottom: 2px solid #f0671f;

        @media (max-width: 768px) {
          font-size: 9px;
        }
      }
    }

    .social__icon {
      font-size: 25px;
      cursor: pointer;
      color: #173857;
      transition: all 0.3s;
      &:hover {
        color: #f0671f;
      }
    }
  }
`;

// & > * {
//
// }
// @media (max-width: 768px) {
//   font-size: 16px;
// }
