import styled from "styled-components";

export const ServicesCardConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
`;
export const ServiceCard = styled.div`
  height: 250px;
  width: 23%;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  border-radius: 5px;
  border-bottom: 4px solid #2e326b;
  margin-bottom:5%;
  img {
    width: 40%;
    padding: 0 0 5% 0;
  }

  @media (max-width:768px){
    width: 48%;
  }
  @media (max-width:560px){
    width: 100%;
  }
`;
