import React from "react";
import { NameTag } from "./NameTag";
import "./index.css";
import styled from "styled-components";
import { Projects } from "./Projects";
import { motion } from "framer-motion";

const MainContainer = styled.nav`
  display: flex;
  flex-direction: row;
  background-image: linear-gradient(#092982, #40626e);
  position: fixed;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  @media only screen and (max-device-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    background-image: linear-gradient(#092982, #40626e);
    position: fixed;
    height: 100%;
    width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
  }
`;

const ScrollColoumn = styled(motion.div)`
  display: inline-block;
  padding-left: 12%;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  overflow-y: auto;
  overflow-x: auto;
  margin: auto;
  height: 95%;
  ::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-device-width: 768px) {
    display: inline-block;
    flex-direction: column;
    justify-content: center;
    padding: 0% 5%;
    width: 90%;
    height: 60%;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const FixedColoumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 100px;
  width: 50%;
  text-align: center;
  @media only screen and (max-device-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    padding-right: 0;
    padding-bottom: 20px;
  }
`;

function App() {
  return (
    <MainContainer>
      <ScrollColoumn
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.5 }}
      >
        <Projects />
      </ScrollColoumn>
      <FixedColoumn>
        <NameTag />
      </FixedColoumn>
    </MainContainer>
  );
}

export default App;
