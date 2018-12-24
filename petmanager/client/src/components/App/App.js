import React, { Component } from "react";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import "./App.css";
import Calendar from "../Calendar/Calendar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Profile /> */}
        <Calendar/>
      </div>
    );
  }
}

export default App;
