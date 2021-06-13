import styled from 'styled-components'


export const LabelBody = styled.div`
    padding: 25px 0;
    background-image: linear-gradient(to right,#00A192 , #23408E);
    // width: 70%;
    // float: right;
    .item{
        // float: left;
        padding-right: 2vw;

        
    }
    .itm{
        display: flex;
        // font-family: Poppins, sans-serif;
            @media(max-width: 599px){
                padding: 10px 0 0 0;
            }
    }
    img{
        width: 7vw;
    }
    svg{
        color: #F06720;
        font-size: 3vw;
        // margin-top: 2vh;
    }
    .item{
        height: 7vw;
        line-height: 7vw;
        // text-align: center;
        p{
            // vertical-align: middle;
            // display: inline-block;
            color: #fff;
            font-size: 2vw;
            font-weight: 500;
            font-family: Poppins, sans-serif;
            @media(max-width: 599px){
                svg{
                    font-size: 15px;
                }
                
            }
            
        }
        button{
            font-size: 2vw;
            // font-weight: 200;
            border: 1px solid rgb(240, 103, 32);
            color: rgb(240, 103, 32);
            background: transparent;
            padding: 7px 10px;
            cursor: pointer;
            &:hover{
                background: rgb(240, 103, 32);
                color: #fff;
            }

        }
    }
    .item1{
        color: #fff;
        font-size: 1.5vw;
        text-align: justify;
        padding-right: 25px;
        font-family: Poppins, sans-serif;
            @media(max-width: 599px){
                font-size: 10px;
            }
    }
`;