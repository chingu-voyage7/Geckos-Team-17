import React, { Component } from "react";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Profile />
      </div>
    );
  }
}

export default App;
