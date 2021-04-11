import { motion } from "framer-motion";
import styled from "styled-components";

export const ServicesContainerWrap = styled.div`
  background-color: #f5f5f5;
  padding: 3% 0;
  margin: 5% 0;
`;

export const ServicesCardConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const ServiceCard = styled(motion.div)`
  background-color: #fff;
  width: 23%;
  padding-top: 23%;
  height: 0;
  border: 1px solid lightgray;
  position: relative;
  align-items: center;
  border-radius: 5px;
  border-bottom: 3px solid #173857;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out, transform 0.35s ease-in-out;
  &:hover {
    box-shadow: 0 11px 11px 0 rgba(0, 0, 0, 0.16);
    transform: translateY(-5px);
  }
  @media (max-width: 768px) {
    width: 48%;
    padding-top: 48%;
    margin-bottom: 3%;
  }
  @media (max-width: 500px) {
    width: 100%;
    padding-top: 100%;
  }

  div {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin-left: auto;
    margin-right: auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 40%;
      padding: 0 0 10px 0;
      display: block;
    }

    h5 {
      font-size: 1vw;
      text-align: center;
      padding: 13px 0;
      @media (max-width: 1000px) {
        font-size: 10px;
      }
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }

  small {
    text-align: justify;
    font-size: 0.8vw;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }
`;
