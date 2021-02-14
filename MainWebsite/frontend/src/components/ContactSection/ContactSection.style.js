import styled from "styled-components";
import contactBg from "../../assets/images/contact-bg.png"
export const ContactSectionWrap = styled.div`
height: 80vh;
background: url(${contactBg});
background-position: bottom;
width:100vw;
background-repeat: no-repeat;
background-size: cover;
margin: 5% 0; 
`

export const ContactSectionContainer = styled.div`
display:flex;

.left{
    width:100%;
    background-color: #173857;
    height: 80vh;
}
`