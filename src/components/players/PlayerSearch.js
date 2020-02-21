import React, { Component } from "react";
import Spinner from "../layout/Spinner";
import axios from "axios";
const baseUrl = "https://www.fgbaseballapi.com/api";
// const baseUrl = "http://localhost:4000/api";

export default class PlayerSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
      allPlayers: [],
      namesDisplay: [],
      loading: true
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

    this.setState({
      allPlayers: uniquePlayers,
      loading: false
    });
  }

  searchValue(e) {
    this.setState({
      searchName: e.target.value
    });
  }

  searchPlayers = async e => {
    this.setState({
      searchName: e.target.value
    });
    // get matches to current text input
    let matches = this.state.allPlayers.filter(player => {
      const regex = new RegExp(`^${this.state.searchName}`, "gi");
      return player.match(regex);
    });

    if (this.state.searchName === "") {
      matches = [];
      this.setState({
        namesDisplay: []
      });
    }

    console.log(matches);
    this.setState({
      namesDisplay: matches
    });
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Spinner />
        ) : (
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
                    list="playerNames"
                    placeholder="Player Search"
                    onChange={this.searchPlayers}
                  />
                  {this.state.namesDisplay.length < 30 ? (
                    <datalist id="playerNames">
                      {this.state.namesDisplay.map(name => (
                        <option value={name}>{name}</option>
                      ))}
                    </datalist>
                  ) : (
                    <div></div>
                  )}
                </div>
                <div>
                  <button type="submit" className="btn btn-success ">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}
