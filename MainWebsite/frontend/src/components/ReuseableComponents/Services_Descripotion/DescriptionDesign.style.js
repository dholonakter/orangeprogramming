import styled from 'styled-components'


export const Body = styled.div`
    margin: 50px 0 0 0;
    overflow: hidden;
    
    Container{
        margin-top: 50px !important;
    };
    p{
        font-size: 1vw;
        font-weight: 400;
        font-family: Poppins, sans-serif;
        padding: 10px 7px 10px 0;
        color: black;
        @media (max-width: 1500px) {
            font-size: 15px;
          }
          @media (max-width: 768px) {
            font-size: 12px;
          }
    }
    p:nth-child(1)::first-letter{
        color: #c69c6d;
        float: left;
        font-size: 3em;
        margin: 5px .2em 0 0;

    }
    .imageGrid{
        @media (max-width: 959px){
            margin: auto;
        }
    }

    // demo code

    .flexbox:nth-child(even){
        flex-direction: row-reverse;
    }
`



export const Img = styled.img`
    width: 100%;
    text-align: center;
    padding: 15px 7px 10px 0;
    @media (max-width: 959px){
        max-width: 450px;
        height: auto;
        padding: 50px 10px 10px 10px;
    }
`


