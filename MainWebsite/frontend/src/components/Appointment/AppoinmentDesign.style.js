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
    height: auto;
    // position: relative;
    margin: auto;
    margin-top: 25px;
    background: #fff;
    overflow: hidden;
    padding: 25px 25px;
    border: 2px solid #f0671f;



    .header{
        color: #f0671f;
        text-align: center;
        padding: 0 5px;
    }

    .item{
        // border: 1px solid red;
    }
`;

export const ExitBtn = styled.div`
    text-align: right;
    height: 50px;
    // background: red;
    button{
        color: #f0671f;
        border: 0;
        background: none;
        font-size: 2vw;
        font-weight: 700;
        cursor: pointer;
    }
`;