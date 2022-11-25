import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { DisplayResults } from "@monorepo/common";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{DisplayResults(true)}</p>
      </header>
    </div>
  );
}

export default App;
