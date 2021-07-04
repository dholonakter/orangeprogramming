
import styled from "styled-components";
import BackgroundImage from '../../assets/images/ScaleUp/lavelBackground.jpg';


export const StartUpLabelBody = styled.div`
    width: '100%';
    // height:"1000px";
    
    background-image: url('${BackgroundImage}');
    // background: blue;
    // background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    // background-attachment: fixed;



    .flexContainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 50px 10px;
    }
    .flexItem{
        width: 50%;
        .header{
            color: #fff;
            text-align: center;

        }
        position: relative;
        span{
            background: #F0671F;
            border: 1px solid #F0671F;
            color: #fff;
            padding: 10px 50px;
            margin: auto;
            float: right;
            font-size: 1vw;
            font-weight: 700;

            // &::before{
            //     content: '';
            //     width: 0;
            //     height: 0;
            //     margin: auto;
            //     border-style: solid none solid none;
            //     position absolute;
            //     top: 0;
            //     bottom: 0;
            //     opacity: 0;

            // }
        }
    }
`;

