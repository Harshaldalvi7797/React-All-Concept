import React, { Component } from "react"
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClicked from "./components/ClassClicked";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
class App extends Component {
  render() {
    return (
      <div className="App" >
        <UserGreeting />

      </div>
    );
  }
}

export default App;
