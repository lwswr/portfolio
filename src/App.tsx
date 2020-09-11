import React from "react";
import { Router, Link } from "@reach/router";
import { About } from "./About";
import { Home } from "./Home";
import "./index.css";
import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  background: #303438;
  width: auto;
`;

const NavItem = styled.div`
  padding: 10px;
  font-size: 30px;
`;

function App() {
  return (
    <div>
      <Navbar>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="about">About</Link>
        </NavItem>
      </Navbar>
      <Router>
        <Home path="/" />
        <About path="about" />
      </Router>
    </div>
  );
}

export default App;
