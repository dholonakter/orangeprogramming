import styled from 'styled-components'

export const Body = styled.div`
    margin: 50px 0 0 0;
    overflow: hidden;
    
    Container{
        margin-top: 50px !important;
    };
    p{
        font-size: 16px;
        font-family: roboto;
        padding: 10px 7px 10px 0;
    }
    p::first-letter{
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

