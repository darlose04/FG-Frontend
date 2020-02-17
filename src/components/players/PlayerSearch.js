import React, { Component } from "react";

export default class PlayerSearch extends Component {
  render() {
    return (
      <form>
        <div className="form-row justify-content-center align-items-center">
          <div className="col-sm-4">
            <label className="sr-only" for="inlineFormInputName">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputName"
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
