import React, { Component } from "react";
import axios from "axios";
const baseUrl = "https://www.fgbaseballapi.com/api";

export default class PlayerSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
      allPlayers: [],
      namesDisplay: []
    };

    this.searchValue = this.searchValue.bind(this);
    this.searchPlayers = this.searchPlayers.bind(this);
  }

  async componentDidMount() {
    // get all players for search functionality
    let allBatters = await axios.get(`${baseUrl}/playerbatting/`);
    let allStarters = await axios.get(`${baseUrl}/playerstarting/`);
    let allRelievers = await axios.get(`${baseUrl}/playerrelieving/`);

    let players = [];
    allBatters.data.map(batter => {
      return players.push(batter.name);
    });
    allStarters.data.map(starter => {
      return players.push(starter.name);
    });
    allRelievers.data.map(reliever => {
      return players.push(reliever.name);
    });

    let uniquePlayers = [...new Set(players)];
  }

  searchValue(e) {
    this.setState({
      searchName: e.target.value
    });
  }

  searchPlayers = async searchText => {
    // get matches to current text input
    let matches = this.state.allPlayers.filter(player => {
      const regex = new RegExp(`^${searchText}`, "gi");
      return player.match(regex);
    });

    if (this.state.searchName === "") {
      matches = [];
    }

    console.log(matches);
    // this.setState({
    //   namesDisplay: matches
    // });
  };

  render() {
    this.searchPlayers(this.state.searchName);
    return (
      <div>
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
            <div>
              <button type="submit" className="btn btn-success">
                Search
              </button>
            </div>
          </div>
        </form>
        <ul></ul>
      </div>
    );
  }
}
