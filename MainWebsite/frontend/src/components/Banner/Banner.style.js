import styled from "styled-components";
import img from "../../assets/images/banner-imgs/banner-img-1.jpg";

export const BannerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      0deg,
      rgba(23, 56, 87, 0.84),
      rgba(23, 56, 87, 0.84)
    ),
    url(${img});
  background-size: cover;
  background-position: center;
  
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  text-align: center;
  color:#fff;

 h1{
     font-weight:100;
     font-size: 4.3vw;

     span{
         font-weight:900;
         
     }
 }
`;
