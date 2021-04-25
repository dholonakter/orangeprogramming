import styled from "styled-components";

export const TechnologiesContainer = styled.div`
  background: #f5f5f5;
  margin: 30px 0;
  padding: 30px 0;
`;

export const TechnologiesWrap = styled.div``;

export const TechnologyWrap = styled.div`
  height: 30vh;
  position: relative;

  @media (max-width: 560px) {
    height: 18vh;
  }

  img {
    padding-right: 50px;
    width: 65%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    :hover {
      cursor: pointer;
    }

    @media (max-width: 1000px) {
      padding-right: 50px;
    }
    @media (max-width: 768px) {
      padding-right: 10px;
    }
    @media (max-width: 400px) {
      /* padding-right: 0px; */
    }
  }

  .react__icon {
    width: 90%;
  }

  .node__icon {
    width: 85%;
  }

  .dotnet__icon {
    width: 55%;
  }

  .laravel__icon {
    width: 90%;
  }

  .java__icon {
    width: 70%;
  }
  .python__icon {
    width: 85%;
  }
`;
