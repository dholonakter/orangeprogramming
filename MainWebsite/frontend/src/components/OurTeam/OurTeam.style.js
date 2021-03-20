import styled from "styled-components";

export const TeamMemberConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 8%;
`;

export const TeamMember = styled.div`
  /* height: 500px; */
  width: 22%;
  text-align: center;
  @media (max-width: 560px) {
    width: 47%;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  p {
    margin-bottom: 5px;
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  h6 {
    margin-bottom: 12px;
    font-size: 12px;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }

  div {
    width: 100px;
    margin: 0 auto;
    font-size: 22px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    color: #f0671f;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 16px;
      width: 70px;
    }
  }
`;
