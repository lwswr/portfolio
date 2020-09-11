import React from "react";
import { Router, Link } from "@reach/router";
import { About } from "./About";
import { Home } from "./Home";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
      </nav>
      <Router>
        <Home path="/" />
        <About path="about" />
      </Router>
    </div>
  );
}

export default App;
