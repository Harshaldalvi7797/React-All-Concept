import React, { Component } from "react"
import './App.css';

import HookCounterOne from "./components/HookCounterOne";
import DataFetching from "./components/DataFetching";


class App extends Component {
  render() {
    return (
      <div className="App" >
        <DataFetching />
      </div>
    );
  }
}

export default App;
