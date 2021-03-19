import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const NameTagCon = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Lato", sans-serif;
  padding-bottom: 100px;
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
  font-size: 12rem;
  padding-left: 20%;
  font-weight: 900;
  position: relative;
  @media only screen and (max-device-width: 768px) {
    padding-left: 0px;
    font-size: 6rem;
    width: 100vw;
  }
`;

const Title = styled(motion.div)`
  font-size: 2.2rem;
  padding-left: 20%;
  letter-spacing: 5px;
  position: relative;
  @media only screen and (max-device-width: 768px) {
    font-size: 18px;
    padding-left: 0px;
    font-size: 1.1rem;
    width: 100w;
  }
`;

const FullStop = styled(motion.span)`
  color: #ff8929;
  position: relative;
`;

const Logos = styled(motion.div)`
  align-self: center;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 75%;
  margin-top: 20px;
  margin-left: 175px;
  @media only screen and (max-device-width: 768px) {
    margin-left: 30px;
  }
`;

const Logo = styled(motion.img)`
  margin-right: 20px;
  height: 6rem;
  width: auto;
  @media only screen and (max-device-width: 768px) {
    height: 50px;
    width: auto;
  }
`;

export const NameTag = () => {
  const REACT_LOGO: string = process.env.PUBLIC_URL + "/images/react_logo.png";
  const REDUX_LOGO: string = process.env.PUBLIC_URL + "/images/redux_logo.png";
  const TS_LOGO: string = process.env.PUBLIC_URL + "/images/typescriptlogo.png";

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
      <Logos>
        <Logo
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.3 }}
          src={TS_LOGO}
          alt=""
        />

        <Logo
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.25, duration: 0.3 }}
          src={REACT_LOGO}
          alt=""
        />
        <Logo
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.3 }}
          src={REDUX_LOGO}
          alt=""
        />
      </Logos>
    </NameTagCon>
  );
};
