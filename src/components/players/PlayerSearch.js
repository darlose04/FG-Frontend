import React, { Component } from "react";

export default class PlayerSearch extends Component {
  render() {
    return (
      <form className="my-3">
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
