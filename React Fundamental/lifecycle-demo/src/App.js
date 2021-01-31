import React, { Component } from "react"
import './App.css';
import LifecycleA from "./components/LifecycleA";
import PostList from "./components/DataAPi/PostList";
import PostForm from "./components/DataAPi/PostForm";


class App extends Component {
  render() {
    return (
      <div className="App" >
        <PostForm />

      </div>
    );
  }
}

export default App;
