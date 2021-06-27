import styled from "styled-components";


export const Main = styled.div`

// .outter{
//     padding: 10px 10px;
//     border: 1px solid red;
//     width: 100px;
//     height: 25px;
//     background-image: radial-gradient(red, #F0671F )
// }
button{
    cursor: pointer;
    color: #F0671F;
    // background-image: radial-gradient( red, green );
    padding: 5px 15px;
    font-weight: 700;
    border: 1px solid #F0671F;
    &:hover{
        color: #fff;
        background: #F0671F;
    }
}
`;

export const ProjectImg = styled.div`
    .imgContainer{
        width: 100%;
        height: 60vh;

        img{
            width: 100%;
            height: 100%;
        }

        @media(max-width: 800px){
            height: 400px;
        }
        @media(max-width: 400px){
            height: 250px;
        }
    }
`;


export const Details = styled.div`
    .aboutProject{
        padding: 0 10px 0 0;
        text-align: justify;
        p{
            font-size: 1vw;
            padding: 5px 0;
            font-family: Poppins, sans-serif;
            @media (max-width: 1500px) {
                font-size: 15px;
              }
              @media (max-width: 768px) {
                font-size: 12px;
              } 
        }
        svg{
            color: #F0671F;
            // font-size: 20px;
            margin: 0 10px 0 0;
            // color: #FF0000;
          font-size: 2vw;
          @media (max-width: 1500px) {
            font-size: 20px;
          }
          @media (max-width: 768px) {
            font-size: 15px;
          }
        }
    }

    .info{
        padding-left: 60px;
        
        .infoContent{
            border-left: 2px solid #F0671F;
            padding: 0 10px 0 10px;
            margin-bottom: 10px;
            p{
                padding: 5px 0;
            }
            p:nth-child(1){
                font-weight: 700;
                font-size: 1vw;
            // color: red;
            font-family: Poppins, sans-serif;
            @media (max-width: 1500px) {
                font-size: 15px;
              }
              @media (max-width: 768px) {
                font-size: 12px;
              }
            }
            p:nth-child(2){
                // color: red;
                font-size: 0.7vw;
            // color: red;
            font-family: Poppins, sans-serif;
            @media (max-width: 1500px) {
                font-size: 13px;
              }
              @media (max-width: 768px) {
                font-size: 10px;
              }
            }
        }
        @media(max-width: 599px){
            padding-left: 0px;
            padding-top: 50px;
            
        }
    }
`;