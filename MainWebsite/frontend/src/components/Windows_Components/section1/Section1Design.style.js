import styled from 'styled-components'


export const Section1Body = styled.div`
    .title{
        font-size: 1.7vw;
        font-weight: 700;
        font-family: Poppins, sans-serif;
        text-align: center;
        margin: 10px 0;
        @media (max-width: 1500px) {
            font-size: 25px;
          }
          @media (max-width: 768px) {
            font-size: 20px;
          }
    }
    .content{
        font-family: Poppins, sans-serif;
        text-align: center;
        padding-top: 10px;
        font-size: 1vw;
        @media (max-width: 1500px) {
            font-size: 15px;
          }
          @media (max-width: 768px) {
            font-size: 12px;
          }
    }
`;


