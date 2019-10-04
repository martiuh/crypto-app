import React from "react";
import { Router } from "@reach/router";

import Main from "./pages";
import Coins from "./pages/Coins";

import "./App.css";

function App() {
  return (
    <Router>
      <Main path="/" />
      <Coins path="/coins/:coinId" />
    </Router>
  );
}

export default App;
