import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Resault from "./Sandwich/Sandwich";
import { Viande } from "./Sandwich/componnents/Viande/Viande";
import { Salade } from "./Sandwich/componnents/Salade/Salade";
import { Sauce } from "./Sandwich/componnents/Sauce/Sauce";
const Sandwich = ({ phrase }) => {
  const [salade, setSalade] = useState("choisi Légume");
  const [viande, setViande] = useState("choisi Type");
  const [sauce, setSauce] = useState("choisi Sauce");
  return (
    <div>
      <Viande viande={viande} setViande={setViande} />
      <Sauce sauce={sauce} setSauce={setSauce} />
      <Salade salade={salade} setSalade={setSalade} />
      <Resault phrase={phrase} viande={viande} sauce={sauce} salade={salade} />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Sandwich phrase="You have chose" />
        </header>
      </div>
    );
  }
}

export default App;
