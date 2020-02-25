import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
import Players from "./components/players/Players";
import PlayerSummary from "./components/players/singlePlayer/PlayerSummary";
import TeamStats from "./components/teams/TeamStats";
import TeamSelect from "./components/teams/TeamSelect";
import TeamPage from "./components/teams/singleTeam/TeamPage";
import Glossary from "./components/Glossary";

import logos from "./logos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            {/* <Route exact path="/about" render={() => <About />} /> */}
            <Route exact path="/players" render={() => <Players />} />
            <Route
              exact
              path="/players/:player"
              render={props => <PlayerSummary {...props} />}
            />
            <Route exact path="/teamstats" render={() => <TeamStats />} />
            <Route
              exact
              path="/teamselect"
              render={() => <TeamSelect logos={logos} />}
            />
            <Route
              exact
              path="/teamselect/:team"
              render={props => <TeamPage {...props} logos={logos} />}
            />
            <Route exact path="/glossary" render={() => <Glossary />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
