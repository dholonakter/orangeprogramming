import { motion } from "framer-motion";
import styled from "styled-components";

export const ProcessPlanContainerWrap = styled(motion.div)`
  margin: 0;
  height: 50vh;
  text-align: center;
  color: #fff;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
  .left {
    height: inherit;
    background-color: #f0671f;
    width: 60%;
    text-align: left;
    padding: 3% 0 3% 0;
    @media (max-width: 768px) {
      width: 100%;
      position: relative;
    }
    div {
      border-left: 1px solid #fff;
      margin-left: 17%;
    }
    p {
      font-size: 1vw;
      font-weight: 300;
      padding: 0 0 1.5% 2%;
      cursor: pointer;
      &:hover {
        font-weight: 500;
        color: #173857;
      }
      @media (max-width: 1360px) {
        font-size: 18px;
      }
      @media (max-width: 1130px) {
        font-size: 16px;
      }
      @media (max-width: 768px) {
        padding: 0 0 2% 2.5%;
        font-size: 14px;
      }
      @media (max-width: 560px) {
        padding: 10px;
      }
    }
  }
  .right {
    background-color: #173857;
    width: 70%;
    margin-top: -4%;
    position: absolute;
    right: 0;
    /* padding: 0% 10% 0% 3%; */
    @media (max-width: 768px) {
      width: 100%;
      position: relative;
      margin-left: auto;
      height: auto;
      flex-direction: column;
      margin-top: 0;
    }
  }
`;

export const ProcessPlanDetails = styled.div`
  /* border: 1px solid black; */
  /* background-color: red; */
  &:focus {
    border: none;
    outline: none;
  }
`;

export const ProcessPlanContent = styled.div`
  height: 50vh;
  display: flex;
  padding: 2% 14% 2% 2%;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    padding: 2% 8% 2% 2%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 3%;
  }
  div {
    padding-left: 2%;
  }
  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
  h2 {
    font-size: 1.5vw;
    @media (max-width: 1240px) {
      font-size: 1.6vw;
    }
    @media (max-width: 768px) {
      font-size: 16px;
      padding-top: 3%;
    }
  }
  p {
    text-align: justify;
    font-weight: 200;
    font-size: 0.9vw;
    @media (max-width: 1240px) {
      font-size: 1.2vw;
    }
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;
