import React from "react";
import { NameTag } from "./NameTag";
import "./index.css";
import styled from "styled-components";
import { Projects } from "./Projects";

const MainContainer = styled.nav`
  display: flex;
  flex-direction: row;
  background-image: linear-gradient(#092982, #507594);
  position: fixed;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const ScrollColoumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  overflow-y: auto;
  overflow-x: auto;
  margin: auto;
  height: 82%;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const FixedColoumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

function App() {
  return (
    <MainContainer>
      <ScrollColoumn>
        <Projects />
      </ScrollColoumn>
      <FixedColoumn>
        <NameTag />
      </FixedColoumn>
    </MainContainer>
  );
}

export default App;
