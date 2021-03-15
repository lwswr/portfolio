import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const NameTagCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: "Lato", sans-serif;
  padding-bottom: 200px;
  color: white;
  @media only screen and (max-device-width: 768px) {
    display: flex;
    justify-content: center;
    position: relative;
    padding-bottom: 0;
    padding-top: 25px;
  }
`;

const Name = styled(motion.div)`
  font-size: 200px;
  padding-left: 20%;
  font-weight: 900;
  position: relative;
  @media only screen and (max-device-width: 768px) {
    padding-left: 0px;
    font-size: 100px;
    width: 100vw;
  }
`;

const Title = styled(motion.div)`
  font-size: 35px;
  padding-left: 20%;
  letter-spacing: 5px;
  position: relative;
  @media only screen and (max-device-width: 768px) {
    font-size: 18px;
    padding-left: 0px;
    font-size: 18px;
    width: 100w;
  }
`;

const FullStop = styled(motion.span)`
  color: #ff8929;
  position: relative;
`;

export const NameTag = () => {
  return (
    <NameTagCon>
      <Name
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Lewis
      </Name>
      <Title
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.75, duration: 1 }}
      >
        FRONT END DEVELOPER
      </Title>
      <Name
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Wear
        <FullStop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.2 }}
        >
          .
        </FullStop>
      </Name>
    </NameTagCon>
  );
};
