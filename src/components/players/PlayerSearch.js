import React, { Component } from "react";
import { bindActionCreators } from "redux";

export default class PlayerSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: ""
    };

    this.searchValue = this.searchValue.bind(this);
    this.searchPlayers = this.searchPlayers.bind(this);
  }

  searchValue(e) {
    this.setState({
      searchName: e.target.value
    });
  }

  async searchPlayers(searchText) {
    const resBatters = await fetch(
      "https://www.fgbaseballapi.com/api/playerbatting"
    );
    const resStarters = await fetch(
      "https://www.fgbaseballapi.com/api/playerstarting"
    );
    const resRelievers = await fetch(
      "https://www.fgbaseballapi.com/api/playerrelieving"
    );
    const batters = await resBatters.json();
    const starters = await resStarters.json();
    const relievers = await resRelievers.json();

    const players = [];

    batters.map(batter => {
      return players.push(batter);
    });
    starters.map(starter => {
      return players.push(starter);
    });
    relievers.map(reliever => {
      return players.push(reliever);
    });

    // get matches to current text input
    let matches = players.filter(player => {
      const regex = new RegExp(`^${searchText}`, "gi");
    });
  }

  render() {
    this.searchPlayers();
    return (
      <form action={`/players/${this.state.searchName}`} className="my-3">
        <div className="form-row justify-content-center align-items-center">
          <div className="col-sm-4">
            <label className="sr-only" htmlFor="playerSearch">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="playerSearch"
              placeholder="Player Search"
              onChange={this.searchValue}
            />
          </div>
          <div id="match-list"></div>
          <div>
            <button type="submit" className="btn btn-success">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}
