import styled from 'styled-components'


export const CardBody = styled.div`
padding: 25px 0;
.itm{
    padding: 20px 0 0 0;
}
.body{
    width: 80%;
    box-shadow: 0px 5px 13px -3px gray;
    margin: auto;
    overflow: hidden;
    p{
        font-weight: 700;
        padding: 10px 7px;
        font-family: Poppins, sans-serif;
        font-size: 1vw;
        @media (max-width: 1500px) {
            font-size: 15px;
          }
          @media (max-width: 768px) {
            font-size: 12px;
          }
    }
    img{
        height: 7vw;
        width: 7vw;
        margin: 10px;
        @media (max-width: 900px) {
            height: 10vw;
        width: 10vw;
          }
          @media (max-width: 650px) {
            height: 70px;
        width: 70px;
          }
          @media (max-width: 599px) {
            height: 8vw;
        width: 8vw;
          }
    }
}
`;