import styled from 'styled-components'



export const Section1Body = styled.div`
    padding: 50px 0;
    .container{
        .item:nth-child(odd){
            padding-right: 50px;
            @media(max-width: 599px){
                padding-right: 0px;
            }
        } 
        .item:nth-child(even){
            padding-left: 50px;
            @media(max-width: 599px){
                padding-left: 0px;
            }
        } 
        
    }
`;

export const ContentHolderSection1 = styled.div`
       
    padding: 50px 0 0 0;
    @media(max-width: 599px){
        padding: 25px 0 0 0;
    }
    .logo{
        // display: inline;
        img{
            color: red; 
            width: 4.8vw;
            @media (max-width: 1200px) {
            width: 60px;
            }
            @media (max-width: 768px) {
            width: 45px;
            }
        }
        padding-bottom: 10px;
        span{
            color: red;
        }
    }
    .header{
        padding: 15px 0;
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


<i class="fal fa-allergies"></i>