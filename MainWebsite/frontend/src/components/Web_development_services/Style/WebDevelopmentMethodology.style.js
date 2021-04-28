import { ChildCare } from '@material-ui/icons'
import styled from 'styled-components'

export const Root = styled.div`
    padding: 50px 7px 60px 7px;
    background-color: rgba(232, 232, 232, 0.5);

    .gridItem{
        @media(max-width: 599px){
            margin: 5px 25px
        }
    }
    .gridContainer{
        padding-top: 50px;
    }
    h3{
        font-family: roboto;
        margin: 0 0 50px;
        text-transform: capitalize;   
    }


`

export const IconBox = styled.div`
        height: 75px;
        width: 75px !important;
        box-shadow: 0 3px 6px gray;
        margin: auto;
        border-radius: 20px;
        background-color: #fff;
        overflow: hidden;
        &:hover{
            background-color: rgb(191, 191, 255)  !important;
            cursor: pointer;
        }
        .logoHolder{
            height: 25px;
            width: 25px;
            margin: auto;
            justify-content: center;
            margin-top: 22px;
        }
`


export const RootO = styled.div`
padding: 50px 7px 60px 7px;
background-color: rgb(8, 83, 115);
h4{
    padding: 10px 7px;
    color: #fff;
    font-family: Poppins, sans-serif;
}
p{
    padding: 10px 7px;
    color: rgb(229, 229, 229);
    font-size: 16px;
    font-family: Poppins, sans-serif;
}
.left{
    width: 100%;
}
.right{
    width: 100%;
    overflow: hidden;
    justify-content: right;
}

`

export const MainComputer = styled.div`
    float: right;
    padding: 50px 0px;
    @media(max-width: 960px){
        float: none;
    }
`
export const Monitor = styled.div`
    margin: auto;
    // padding: 0 1vw 0 1vw;
    padding-top: 7px;
    // padding-top: 1vw;
    justify-content: center;
    // height: 20vw;
    // width: 37vw;
    height: 325px;
    width: 550px;

    border: 3px solid rgb(229, 230, 232);
    background-color: rgb(240, 103, 31);
    border-radius: 7px;
    overflow: hidden;
    @media(max-width: 1650px){
        height: 20vw;
        width:33vw;
        padding-top: 10px;
        
    }
    @media(max-width: 959px){
        height: 27vw;
        width: 48vw;
        // padding: 10px;
    }
    @media(max-width: 750px){
        padding: 7px;
    }
    @media(max-width: 650px){
        width: 49vw;
    }
    @media(max-width: 600px){
        width: 70vw;
        height: 40vw;
    }
    @media(max-width: 350px){
        width: 71vw;
    }
    @media(max-width: 300px){
        width: 72vw;
    }
`
export const Player = styled.div`
  
    height: 325px;

 
    width: 530px;
    background: orange;
    margin: auto auto auto auto;
    overflow: hidden;
    @media(max-width: 1650px){
        height: 19vw;
        width:31vw;
    }
    @media(max-width: 959px){
        height: 27vw;
        width: 45vw;
    }
    @media(max-width: 600px){
        height: 40vw;
        width: 65vw;
    }
    @media(max-width: 1000px){
        
    }
    @media(max-width: 1000px){
        
    }
    @media(max-width: 1000px){
        
    }
    .computerPlayerContent{
        height: 100%;
        width: 100%;
        margin: auto;
        backgroundColor: rgb(229, 229, 229);
    }
`
export const Keyboard = styled.div`
    height: 40px;
    // width: 42vw;
    width: 650px;
    background-color: rgb(240, 103, 31);
    margin:-17px auto;
    border-radius: 50px 50px 5px 5px ;
    transform: rotateX(110deg);
    border: 10px solid rgb(229, 230, 232);
    @media(max-width: 1650px){
        // height: 20vw;
        width:38vw;
    }
    @media(max-width: 959px){
        width: 55vw;
        height: 40px;
    }
    @media(max-width: 600px){
        width: 80vw;
    }
`











