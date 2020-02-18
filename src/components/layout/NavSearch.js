import React, { Component } from "react";

export default class NavSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: ""
    };

    this.searchValue = this.searchValue.bind(this);
  }

  searchValue(e) {
    this.setState({
      searchName: e.target.value
    });
  }

  render() {
    return (
      <form
        action={`/players/${this.state.searchName}`}
        className="form-inline ml-auto"
      >
        <input
          type="text"
          className="form-control mr-2"
          placeholder="Search Players"
          onChange={this.searchValue}
        />
        <button className="btn btn-outline-light">Search</button>
      </form>
    );
  }
}
