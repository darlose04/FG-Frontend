import React, { Component } from "react";

export default class NavSearch extends Component {
  render() {
    return (
      <form className="form-inline ml-auto">
        <input
          type="text"
          className="form-control mr-2"
          placeholder="Search Players"
        />
        <button className="btn btn-outline-light">Search</button>
      </form>
    );
  }
}
