import React, { Component } from "react";
import Header from "../Header/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>This is the App page</h1>
      </div>
    );
  }
}

export default App;
