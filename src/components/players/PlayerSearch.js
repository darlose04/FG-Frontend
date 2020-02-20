import React, { Component } from "react";
import axios from "axios";
const baseUrl = "https://www.fgbaseballapi.com/api";

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
    }

    console.log(matches);
    this.setState({
      namesDisplay: matches
    });
  };

  render() {
    // this.searchPlayers(this.state.searchName);

    return (
      <div>
        {this.state.loading ? (
          <div>
            <div className="d-flex justify-content-center">
              <div
                className="mt-5 spinner-border text-success"
                role="status"
                style={{ width: "5rem", height: "5rem" }}
              ></div>
            </div>
            <div className="mt-3 text-center">
              Loading database for search...
            </div>
          </div>
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
                    name="playerNames"
                    list="playerNames"
                    placeholder="Player Search"
                    onChange={this.searchPlayers}
                  />
                  <div></div>
                  {this.state.namesDisplay.length < 30 ? (
                    <datalist id="playerNames">
                      {this.state.namesDisplay.map(name => (
                        <option value={name}>{name}</option>
                      ))}
                    </datalist>
                  ) : (
                    <option></option>
                  )}
                </div>

                <div>
                  <button type="submit" className="btn btn-success">
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
