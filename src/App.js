import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Players from "./components/players/Players";
import Teams from "./components/teams/Teams";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/about" render={() => <About />} />
            <Route exact path="/players" render={() => <Players />} />
            <Route exact path="/teams" render={() => <Teams />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
