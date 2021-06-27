import styled from 'styled-components';


export const OurProjectBody = styled.div`
.gridDisplay{
    display: grid;
    grid-template-columns: auto auto auto auto;
    @media(max-width:1200px){
        grid-template-columns: auto auto auto;
    }
    @media(max-width:700px){
        grid-template-columns: auto auto;
    }
    @media(max-width:500px){
        grid-template-columns: auto;
    }
  }

.gridItem{
    margin-bottom: 25px;
}
  
`;

