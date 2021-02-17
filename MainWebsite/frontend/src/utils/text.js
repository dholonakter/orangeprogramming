import styled from "styled-components";

export const HeaderText = styled.div`
font-size:26px;
font-weight: 700;
color: ${({white}) => white ? "#fff" : "#173857"};
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