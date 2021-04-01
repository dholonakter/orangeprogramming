import styled from 'styled-components'
import Banner from '../Images/banner600px.png';

export const Background = styled.div`
     position: relative;
     overflow: hidden;
     

`
export const Image = styled.img`
    width: 100%;
    min-height: 300px;
    z-index: -1;
    // content: url('Banner')
    @media (max-width: 767px){
        // min-height: 200px !important;
        
        
    }
    @media (max-width: 600px){
        min-height: 200px !important;
       
        
    }

`

export const Title = styled.div`

    position: absolute;
    top: 45%;
    

    p{
        color: #fff;
        font-size: 4vw;
        font-weight: 700;
        font-family: roboto;
       
    }
`
export const ImageHolder = styled.div`
    overflow: hidden;
`