import styled from 'styled-components'
import Banner from './Images/banner1.png';


export const Background = styled.div`
     
     overflow: hidden;
     background: rgb(23, 56, 87);
     height: auto;
     background-image: url(${Banner});
     background-repeat: no-repeat;
     background-position: center; 
     background-size: cover;

     p{
        color: #fff;
        font-size: 4vw;
        font-weight: 700;
        font-family: "Poppins", "sans-serif";
       
        margin-top: 200px;
        text-transform: capitalize;
        @media (max-width: 991px){
            font-size: 5vw;
            margin-top: 150px;
        }
        @media (max-width: 767px){
            font-size: 5vw;
            margin-top: 110px;
        }@media (max-width: 600px){
            font-size: 7vw;
            width: 100%;
            text-align: center;
        }
        
    }
    .left{
        @media (max-width: 600px){
            // font-size: 5vw;
            width: 100%;
        }
    }
    .right{
        // position: relative;
       
        height: 100%;
        @media (max-width: 600px){
            // font-size: 5vw;
            width: 100%;
            
        }
       
    }
    
    .image{
        max-height: 320px;
        max-width: 425px;
        margin-top: 30%;
        float: right;
        @media (max-width: 991px){
            max-height: 250px;
            max-width: 400px;
        }
        @media (max-width: 767px){
            max-height: 200px;
            max-width: 350px;
        }
        @media (max-width: 600px){
            max-height: 200px;
            max-width: 350px;
            float: none;
        
            margin: 50px auto auto auto;
            display: block;
            
        }
    }
    }
    }

`
