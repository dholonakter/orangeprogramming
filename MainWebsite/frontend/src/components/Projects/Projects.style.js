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

  @media (max-width: 800px) {
    width: 49%;
    margin-bottom: 2%;
  }

  @media (max-width: 560px) {
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .img__title {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    padding: 5%;
    color: #fff;

    h2 {
      font-size: 22px;

      @media (max-width: 1400px) {
        font-size: 18px;
      }
      @media (max-width: 1100px) {
        font-size: 16px;
      }
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }

    small {
      font-weight: 600;
      width: 100%;
      text-align: right;
      color: #f0671f;

      @media (max-width: 1100px) {
        font-size: 10px;
      }
      @media (max-width: 768px) {
      }
    }
  }
  .img__overlay {
    padding: 16% 5% 0% 5%;
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

    @media (max-width: 1000px) {
      padding: 18% 5% 0% 5%;
    }

    p {
      font-weight: 300;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      @media (max-width: 1490px) {
        font-size: 10px;
      }
      @media (max-width: 768px) {
        font-size: 8px;
      }
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
      width: 45%;
      margin-top: 10%;
      background-color: #f0671f;
      color: #fff;

      &:hover {
        background-color: transparent;
        color: #f0671f;
      }

      @media (max-width: 1300px) {
        padding: 10px 0;
        width: 40%;
        font-size: 12px;
        margin-top: 10px;
      }

      @media (max-width: 1100px) {
        padding: 8px 0;
        width: 40%;
        font-size: 10px;
        margin-top: 8px;
      }
    }
  }

  .img__overlay > * {
    transform: translateY(10px);
    transition: transform 0.25s;
  }

  .img__overlay:hover > * {
    transform: translateY(0);
  }
`;
