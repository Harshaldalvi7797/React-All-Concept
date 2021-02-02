import React, { Component } from "react"
import './App.css';
import ComponentC from "./compoennt/ComponentC";
import { UserProvider } from "./compoennt/UserContext";




class App extends Component {
  render() {
    return (
      <div className="App" >
        <UserProvider value="Harshal">
          <ComponentC />
        </UserProvider>




      </div>
    );
  }
}

export default App;
