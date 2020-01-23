import React, { Component } from "react";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1 className="text-red-700 text-5xl">Fangraphs API Frontend</h1>
      </div>
    );
  }
}

export default App;
