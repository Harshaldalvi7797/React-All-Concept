import React, { Component } from "react"
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClicked from "./components/ClassClicked";
class App extends Component {
  render() {
    return (
      <div className="App" >
        {/* <Counter /> */}
        {/* <Greet name="Harshal" ><h1>Welcome</h1></Greet> */}
        {/* <Welcome name="Harshal Dalvi" /> */}
        {/* <FunctionClick /> */}
        <ClassClicked />

      </div>
    );
  }
}

export default App;
