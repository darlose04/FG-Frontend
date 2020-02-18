import React, { Component } from "react";

export default class PlayerSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: ""
    };

    this.searchValue = this.searchValue.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);
  }

  searchValue(e) {
    this.setState({
      searchName: e.target.value
    });
  }

  searchSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form className="my-3" onSubmit={this.searchSubmit}>
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
    );
  }
}
