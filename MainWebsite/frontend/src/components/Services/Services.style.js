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
  padding: 22px;
  border: 1px solid lightgray;
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out, transform 0.35s ease-in-out;

  &:hover {
    border: 2px solid #173857;
    box-shadow: 0 11px 11px 0 rgba(0, 0, 0, 0.16);
    transform: translateY(-5px);
  }
  @media (max-width: 768px) {
    width: 48%;
    margin-bottom: 3%;
  }
  @media (max-width: 560px) {
    width: 100%;
  }

  img {
    width: 22%;
    padding: 0 0 10px 0;
    display: block;
  }
  .wev__dev {
    margin-top: 6%;
    width: 23%;
  }

  h5 {
    font-size: 1vw;
    padding: 10px 0;
    @media (max-width: 1000px) {
      font-size: 13px;
    }
  }

  small {
    text-align: justify;
    font-size: 0.8vw;

    @media (max-width: 900px) {
      font-size: 10px;
    }
  }
`;
