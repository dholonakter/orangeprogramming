import styled from 'styled-components';


export const PopUpBody = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(59, 69, 96, 0.8);
    align-items: center;
    justify-content: center;
    z-index: 10;
`;


export const AppointmentBody = styled.div`
    width: 50%;
    margin: auto;
    margin-top: 7vw;
    background: #fff;
    padding: 5px 5px;
    // border: 2px solid #f0671f;
    // overflow: scroll;

    @media(max-width: 599px ){
        width: 75%;
        margin-top: 10vw;
    }
    @media(max-width: 350px ){
        width: 95%;
        margin-top: 10vw;
    }
    @media(max-height: 560px ){
        // width: 75%;
        margin-top: 0;
    }


    .header{
        color: #f0671f;
        text-align: center;
        padding: 0 5px;
    }

    .item{
        // border: 1px solid red;
    }
    .container{
        padding: 0px;
    }
    .item:nth-child(1){
        // background: red;
        // height: 100px;
      }
    
     
    .item:nth-child(2){
       
    }
    .contactForm{
        display: none;
    }
      
`;

export const ExitBtn = styled.span`
    text-align: right;
    // height: 50px;
    // background: red;
    float: right;
    button{
      &:hover{
        transform: rotateX(180deg) rotateY(180deg) rotateZ(180deg);
        transition: 0.5s;
      }
        color: #f0671f;
        border: 0;
        background: none;
        font-size: 2vw;
        font-weight: 700;
        cursor: pointer;
        padding: 0px;
        @media(max-width: 1200px){
            font-size: 25px;
          }
          @media(max-width: 900px){
            font-size: 20px;
          }
          @media(max-width: 600px){
            font-size: 15px;
          }
    }
`;

export const Header = styled.div`
    padding: 10px 0;
    font-size: 2w;
    @media(max-width: 1200px){
        font-size: 15px;
      }
      @media(max-width: 900px){
        font-size: 12px;
      }
      @media(max-width: 600px){
        font-size: 10px;
      }
    
`;



export const ConForm = styled.div`
    
    form {
        text-align: center;
        width: 80%;
        margin: 0 auto;
        input,
        textarea {
          display: block;
          width: 100%;
          border: 0;
          padding: 5px 5px;
          margin: 7px 0;
          background: lightgray no-repeat;
          
          background-size: 0 2px, 100% 1px;
          transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
          font-size: 0.9vw;
          @media(max-width: 1200px){
            font-size: 12px;
          }
          @media(max-width: 900px){
            font-size: 10px;
          }
          @media(max-width: 600px){
            font-size: 8px;
          }
          &:focus {
            background-size: 100% 2px, 100% 1px;
            outline: none;
          }
        }
    
        button {
          width: 100%;
          background-color: #f0671f;
          color: #fff;
          font-size: 0.9vw;
          @media(max-width: 1200px){
            font-size: 12px;
          }
          @media(max-width: 900px){
            font-size: 10px;
          }
          @media(max-width: 600px){
            font-size: 8px;
          }
          &:hover {
            color: #f0671f;
            background: #fff;
          }
        }
      }
`;