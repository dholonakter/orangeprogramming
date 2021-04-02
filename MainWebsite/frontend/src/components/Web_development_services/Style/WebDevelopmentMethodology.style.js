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
        width: 75px;
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
// background-color: rgb(8, 83, 115);
background-color: rgb(240, 103, 31);
h4{
    padding: 10px 7px;
    color: #fff;
}
p{
    padding: 10px 7px;
    // color: rgb(229, 229, 229);
    color: #fff;
    font-size: 16px;


}
.left{
    width: 100%;
}
.right{
    // background: red;
    width: 100%
}
.computerBody{
    height: 150px;
    width: 250px;
    margin: 50px auto auto auto;
    @media(max-width: 700px){
        height: 130px;
        width: 200px;

    }
}
.computerScreen{
    height: 150px;
    widht: 250px;
    border: 3px solid rgb(229, 230, 232);
    background-color: gray;
    border-radius: 7px;
    @media(max-width: 700px){
        height: 130px;
        width: 200px;
        
    }

}
.computerPlayer{
    height: 130px;
    width: 230px;
    margin: 8px auto;
    background-color: #fff;
    @media(max-width: 700px){
        height: 110px;
        width: 180px;
        
    }
}
.computerPlayerContent{
    height: 100%;
    width: 100%;
    margin: auto;
    backgroundColor: #fff;
}
.computerKey{
    height: 50px;
    width: 300px;
    background-color: rgb(228, 228, 228);
    border-radius: 50px 50px 5px 5px;
    box-shadow: 0 3px 5px gray;
    transform: rotateX(100deg);
    border: 10px solid rgb(229, 230, 232);
    position: relative;
    top: -15%;
    left: -26px;
    @media(max-width: 700px){
        
        width: 250px;
        
    }

}

`











