import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const NameTagContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: "Lato", sans-serif;
  padding-bottom: 200px;
`;

const Name = styled(motion.div)`
  font-size: 200px;
  padding-left: 20%;
  font-weight: 900;
  position: relative;
`;

const Title = styled(motion.div)`
  font-size: 35px;
  padding-left: 20%;
  letter-spacing: 5px;
  position: relative;
`;

const FullStop = styled(motion.span)`
  color: #ff8929;
  position: relative;
`;

export const NameTag = () => {
  return (
    <NameTagContainer>
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
    </NameTagContainer>
  );
};
