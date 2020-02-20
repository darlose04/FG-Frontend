import React, { Component } from "react";
import axios from "axios";

export default class PlayerSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
      starters: []
    };

    this.searchValue = this.searchValue.bind(this);
    this.searchPlayers = this.searchPlayers.bind(this);
  }

  async componentDidMount() {
    const res = await fetch(
      "https://www.fgbaseballapi.com/api/playerstarting/2019"
    );

    const starters = await res.json();
    console.log(starters);

    this.setState({
      starters: starters
    });
  }

  searchValue(e) {
    this.setState({
      searchName: e.target.value
    });
  }

  async searchPlayers(searchText) {
    // get matches to current text input
    let matches = this.state.starters.filter(starter => {
      const regex = new RegExp(`^${searchText}`, "gi");
      return starter.name.match(regex);
    });
    console.log(matches);
  }

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
      </div>
    );
  }
}
