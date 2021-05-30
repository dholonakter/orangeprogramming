import styled from 'styled-components'


export const Section2Body = styled.div`

`;


export const ContentHolderSection2 = styled.div`
    padding: 30px 15px;
    @media(max-width: 599px){
        padding: 25px 0 0 0;
    }
    .icons{
        width: 100%;
        img{
            // margin: auto;
            // text-align: center;
            width: 4.8vw;
            @media (max-width: 1200px) {
            width: 60px;
            }
            @media (max-width: 768px) {
            width: 45px;
            }
        }
    }
    .header{
        // text-align: center;
        padding-top: 10px;
        font-weight: 700;
        font-size: 1.3vw;
        @media (max-width: 1500px) {
        font-size: 20px;
        /* width: 70%; */
        }
        @media (max-width: 1100px) {
        font-size: 17px;
        /* width: 70%; */
        }
        @media (max-width: 768px) {
        font-size: 12px;
        /* width: 70%; */
        }
    }
    .content{
        text-align: justify;
        padding: 25px 0;
        font-size: 1vw;
        @media (max-width: 1500px) {
        font-size: 15px;
        /* width: 70%; */
        }
        @media (max-width: 1100px) {
        font-size: 13px;
        /* width: 70%; */
        }
        @media (max-width: 768px) {
        font-size: 8px;
        /* width: 70%; */
        }
    }
`;