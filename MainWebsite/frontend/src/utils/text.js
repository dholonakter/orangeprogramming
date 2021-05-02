import styled from "styled-components";

export const HeaderText = styled.div`
// font-size:26px;
font-size: 2vw;
font-weight: 700;
color: ${({ white }) => white ? "#fff" : "#173857"};

@media(max-width: 1200px){
    font-size:22px; 
}

@media(max-width: 800px){
    font-size:20px; 
}

@media(max-width: 768px){
    font-size:18px; 
}
`

export const TitleText = styled.div`
font-size:16px;
font-weight: 700;
width: fit-content;
color: ${({white}) => white ? "#fff" : "#173857"};
`
export const NormalText = styled.div`
font-size:12px;
font-weight: 400;
width: fit-content;
text-align: justify;
`