import styled from 'styled-components'
import BannerImage from './banner1.png'

export const BannerBody = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(23, 56, 87);
    background-image: url(${BannerImage});
     background-repeat: no-repeat;
     background-position: center; 
     background-size: cover;
    //  place-items: center;
     overflow: hidden;
`;

export const Title = styled.p`
// -webkit-text-stroke: 2px red; 
    color: #fff;
    text-align: center;
    font-size: 4.3vw;
    font-weight: 700;
    margin-top: 150px;
    font-family: "Poppins", "sans-serif";
    @media(max-width: 500px){
        font-size: 5vw;
    }
    span{
        position: relative;
        // background: red;
        &:after{
            content: '';
            position: absolute;
            left: 0;
            height: 100%;
            width: 100%;
            // background: red;
            // border-left: 2px solid yellow;
            // animation: typing 1.5s steps(10) infinite;
        }
        // @keyframes typing{
        //     100%{
        //         left: 100%;
        //         margin: 0 -35px 0 35px;
        //     }
        // }
    }
    
    
    
`;
export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    // background: red;
    overflow: hidden;
`;

export const GridSystem = styled.div`

    .left{
        width: 100%;
        height: 70vh;
        line-height: 70vh;
        padding-right: 50px;
        // background: red;
        // overflow: hidden;
        text-align: justify;
        p{
            vertical-align: middle;
            display: inline-block;
            line-height: 1.5;  
            font-family: "Poppins", "sans-serif";
            color: #fff;
            font-size: 1.5vw;
            @media(max-width: 1920px){
                font-size: 18px;
            }
            @media(max-width: 1000px){
                font-size: 14px;
            }
            
            
    
        }
        @media(max-width: 599px){
            height: 10vh;
            line-height: 10vh;
            // width: 100vh;
            padding: 15px 0 0 0;
            
            // color: red;
            line-height: 1;
            p{
                font-size: 10px;
            }
        }
    }
    .right{
        width: 100%;
        height: 100%;
        // overflow: hidden;
        position: relative;
        // background: red;
        
    }
    
    .image{
        height: 50vh;
        width: 98%;
        float: right;
        position: absolute;
        top: 26vh;
        // z-index: 10;
        @media (max-width: 991px){
            // max-height: 250px;
            // max-width: 400px;
        }
        @media (max-width: 767px){
            // max-height: 200px;
            // max-width: 350px;
        }
        @media (max-width: 599px){
            max-height: 200px;
            max-width: 350px;
            top: 15vh;
            float: right;

           
        }
    }
    
`;




