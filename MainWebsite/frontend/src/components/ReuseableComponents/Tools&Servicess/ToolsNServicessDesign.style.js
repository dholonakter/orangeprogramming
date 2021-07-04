import styled from 'styled-components'

export const SectionBody = styled.div`
    padding: 50px 0;
    .container{
        // width: 100% !important;
        .item:nth-child(odd){
            padding-right: ${props => props.Padding};
            @media(max-width: 599px){
                padding-right: 0px;
            }
        } 
        .item:nth-child(even){
            padding-left: ${props => props.Padding};
            @media(max-width: 599px){
                padding-left: 0px;
            }
        } 
        
    }
`;

export const ContentHolder = styled.div`
       
    padding: 50px 0 0 0;
    
    display: ${props => (props.SingleColumn?'flex': 'block')};
    @media(max-width: 599px){
        padding: 25px 0 0 0;
    }
    .logo{
        // display: inline;

        img{
            padding-top: ${props => props.SingleColumn?'15px': ''};
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
    .contentArea{
        padding-left: ${props => (props.SingleColumn?'15px': '0px')};
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
        padding: ${props=>props.contentPadding};
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

