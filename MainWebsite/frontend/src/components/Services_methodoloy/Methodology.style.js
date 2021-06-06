
import styled from 'styled-components'

export const Root = styled.div`

    padding: 50px 7px 60px 7px;
    background-color: rgba(232, 232, 232, 0.5);
    font-family: Poppins, sans-serif;
    .gridItem{
        @media(max-width: 599px){
            margin: 5px 25px
        }
    }
    .gridContainer{
        padding-top: 50px;
    }
    h3{
        font-family: Poppins, sans-serif;
        margin: 0 0 50px;
        text-transform: capitalize;  
        font-size: 1.5vw;
        @media(max-width: 1920px){
            font-size: 28px;
        }
        @media(max-width: 1100px){
            font-size: 24px;
        }
        @media(max-width: 768px){
            font-size: 20px;
        }
        
    }


`

export const IconBox = styled.div`
        
        height: 75px;
        width: 75px !important;
        position: relative;
        box-shadow: 0 33px 25px #D9D9D9;
        margin: auto;
        margin-top: 50px;
        margin-bottom: 25px;
        border-radius: 50%;
        background-color: #fff;
        .idHolder{
            width: 30px;
            height: 30px;
            background: #fff;
            position: absolute;
            border-radius: 50%;
            bottom: -20px;
            text-align: center;
            left: 23px;
            box-shadow: 0 3px 6px gray;
            border: 6px solid #fff;
            color: #F0671F;
        }
       
        &:hover{
            background-color: rgb(191, 191, 255)  !important;
            cursor: pointer;
        }
        .logoSetter{
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: 50%;
        }
        .logoHolder{
            height: 25px;
            width: 25px;
            margin: auto;
            justify-content: center;
            margin-top: 22px;
            overflow: hidden;
            svg{
                color: #F0671F;
            }
        }
`


export const RootO = styled.div`
padding: 50px 7px 50px 7px;
// background-color: rgb(8, 83, 115);
background-image: radial-gradient( #182E45, #061123) ;
font-family: Poppins, sans-serif;
h4{
    padding: 10px 7px;
    color: #fff;
    font-family: Poppins, sans-serif;
    font-size: 2vw;
    font-weight: 700;
    @media (max-width: 1240px) {
        font-size: 3vw;
      }
      @media (max-width: 768px) {
        font-size: 4vw;
      }
      @media (max-width: 500px) {
        font-size: 5vw;
      }
}
p{
    padding: 10px 7px;
    color: rgb(229, 229, 229);
    font-size: 0.9vw;
    font-family: Poppins, sans-serif;
    @media (max-width: 1240px) {
        font-size: 1.2vw;
      }
      @media (max-width: 768px) {
        font-size: 12px;
      }
}
.left{
    width: 100%;
}
.right{
    width: 100%;
    overflow: hidden;
    justify-content: right;
}

`;


export const BaseImage = styled.div`
    width: 100%;
    // float: right;
    // position: relative;
    // top: 50px;
    .hand{
        
    }
    img{
        width: 20vw;
        // height: 300px;
        overflow: hidden;
        float: right;
        @media(max-width: 1920px){
            width: 300px;
        }
        @media(max-width: 1100px){
            width: 200px;
        }
        @media(max-width: 959px){
            width: 300px;
            float: none;
            margin: auto;
        }
        @media(max-width: 600px){
            width: 200px;
            float: none;
            margin: auto;
        }
        
    }
    .contentImage{
        position: absolute;
        top: -50px;

        img{
            float: right;
            // width: 200px;
        }
    }

`;










