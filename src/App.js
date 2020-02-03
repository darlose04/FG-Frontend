import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Players from "./components/players/Players";
import Teams from "./components/teams/Teams";
import TeamSelect from "./components/teams/TeamSelect";
import Glossary from "./components/Glossary";

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
            <Route exact path="/teamselect" render={() => <TeamSelect />} />
            <Route exact path="/glossary" render={() => <Glossary />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
