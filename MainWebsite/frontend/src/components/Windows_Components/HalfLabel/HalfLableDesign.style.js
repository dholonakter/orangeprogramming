import styled from 'styled-components'

export const MainBody = styled.div`
    @media(max-width: 699px){
        .itm{
            width: 100%;

        }
    }
`;
export const HalfLabelBody = styled.div`
background-image: linear-gradient(to right,#00A192 , #23408E);
// height: 100px;
padding: 10px 7px;
    .body{
        background-image: linear-gradient(to right,#00A192 , #23408E);

    }
`;

export const Con = styled.div`
  width: 55vw;
//   margin: 0 auto;
// padding: 5px 0 5px 7px;
text-align: justify;
p{
    color: #fff;
    // text-align: right;
    font-size: 1.2vw;
        font-weight: 400;
        font-family: Poppins, sans-serif;
        @media (max-width: 1500px) {
          font-size: 15px;
        }
        @media (max-width: 768px) {
          font-size: 12px;
        }
}
  @media (max-width: 1000px) {
    width: 60vw;
  }

  @media (max-width: 699px) {
 
    width: 100%;
  }
`;