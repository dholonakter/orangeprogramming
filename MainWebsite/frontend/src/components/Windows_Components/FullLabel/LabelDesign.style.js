import styled from 'styled-components'


export const LabelBody = styled.div`
    width: 100%;
    // height: 100px;
    background-image: linear-gradient(to right,#00A192 , #23408E);
    

    .flexBody{
        display: flex;
        .flexItem{
            // width: 50%; 
            padding: 10px;
            p{
                color: #fff;
                font-size: 25px;
                font-weight: 700;
                padding-top: 20px;
                font-family: Poppins, sans-serif;
            } 
            img{
                height: 100px;
                width: 100px;

            }  
            svg{
                color: #F0671F;
                margin: 30px 0 0 0;
            }
            button{
                background-color: #F0671F;
                padding: 10px 15px;
                font-size: 20px;
                font-family: Poppins, sans-serif;
                border: 1px solid #F0671F;
                color: #fff;
                margin: 25px 0 0 0;
                &:hover{
                    background-color: transparent;
                    color: #F0671F;
                    cursor: pointer;
                }
            }
        }
    }
    `;