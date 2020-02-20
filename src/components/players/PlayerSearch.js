import React, { Component } from "react";

export default class PlayerSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
      batters: this.props.batters
    };

    this.searchValue = this.searchValue.bind(this);
    this.searchPlayers = this.searchPlayers.bind(this);
  }

  searchValue(e) {
    const regex = new RegExp(`^${e.target.value}`, "gi");

    this.setState({
      searchName: e.target.value
    });
  }

  async searchPlayers(searchText) {
    // const resBatters = await fetch(
    //   "https://www.fgbaseballapi.com/api/playerbatting/2019"
    // );
    // const resStarters = await fetch(
    //   "https://www.fgbaseballapi.com/api/playerstarting/2019"
    // );
    // const resRelievers = await fetch(
    //   "https://www.fgbaseballapi.com/api/playerrelieving/2019"
    // );
    // const batters = await resBatters.json();
    // const starters = await resStarters.json();
    // const relievers = await resRelievers.json();
    // get matches to current text input
    // let matches = batters.filter(batter => {
    //   const regex = new RegExp(`^${searchText}`, "gi");
    //   return batter.name.match(regex);
    // });
    // console.log(matches);
  }

  render() {
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
        {this.state.batters.filter(batter => {
          const regex = new RegExp(`^${this.state.searchName}`, "gi");
          return (
            <div key={batter.id}>
              <h5>{batter.name.match(regex)}</h5>
            </div>
          );
        })}
      </div>
    );
  }
}
