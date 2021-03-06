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
import NameList from "./components/NameList";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComponents from "./components/PureComponents/PureComponents";
import RefsDemo from "./components/refs/RefsDemo";
class App extends Component {
  render() {
    return (
      <div className="App" >
        <RefsDemo />

      </div>
    );
  }
}

export default App;
