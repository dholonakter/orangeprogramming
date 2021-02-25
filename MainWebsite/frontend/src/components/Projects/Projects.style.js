import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

`;

export const ProjectCard = styled.div`
  position: relative;
  cursor: pointer;
  width: 32%;
  height: auto;
  background-color:red;

  @media (max-width: 768px) {
    width: 49%;
  }

  @media (max-width: 560px) {
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    display:flex;
  }
  .img__title {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    padding: 5%;
    color: #fff;

h2{
  font-size:22px;
}

    small {
      font-weight: 600;
      width: 100%;
      text-align: right;
      color: #f0671f;
    }
  }
  .img__overlay {
    padding: 18% 5% 5% 5%;
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

    h2 {
      font-weight: 600;
    }

    p {
      font-weight: 300;
      font-size: 12px;
    }

    hr {
      display: block;
      height: 1px;
      border: 0;
      border-top: 1px solid grey;
      margin: 1em 0;
      padding: 0;
    }

    button {
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
