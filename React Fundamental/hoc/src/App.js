import React, { Component } from "react"
import './App.css';
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import RenderClick from "./components/Render/RenderClick";
import RenderClick2 from "./components/Render/RenderClick2";
import User from "./components/Render/User";
import Counter from "./components/Render/Counter";





class App extends Component {
  render() {
    return (
      <div className="App" >
        {/* <RenderClick />
        <RenderClick2 />
        <User name={(isLoggedIn) => isLoggedIn ? "Harshal" : "Guest"} /> */}

        <Counter render={(count, IncrementCount) => <RenderClick2 count={count}
          IncrementCount={IncrementCount} />} />

        <Counter render={(count, IncrementCount) => <RenderClick count={count}
          IncrementCount={IncrementCount} />} />

      </div>
    );
  }
}

export default App;
