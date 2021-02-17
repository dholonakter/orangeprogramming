import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectCard = styled.div`
  position: relative;
cursor: pointer;
  width: 32%;
  height:auto;

  img {
    width: 100%;
    height:100% ;

    
  }
.img__title{
    position: absolute;
    top: 0;
    left: 0;
    z-index:1; 
    padding: 5%;
    color: #fff;

    small{
        position:absolute;
        top: 25px;
        right:20px;
        font-weight:600;
        width:100%;
        text-align:right;
        color: #F0671F;
    }
}
  .img__overlay {
  padding: 13% 5% 5% 5%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(23, 56, 87, 0.91);
    color: #fff;
    opacity: 0;
    transition: opacity 0.25s;

    &:hover {
      opacity: 1;
    }

    h2{
        font-weight: 600;
    }

    p{
        font-weight: 300
    }

    hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid grey;
    margin: 1em 0;
    padding: 0;
  }

    button{
        width: 50%;
    }
  }

  .img__overlay > * {
    transform: translateY(20px);
    transition: transform 0.25s;
  }

  .img__overlay:hover > * {
    transform: translateY(0);
  }
`;
