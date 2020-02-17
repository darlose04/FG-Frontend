import React, { Component } from "react";
import PlayerSearch from "./PlayerSearch";

export default class Players extends Component {
  render() {
    return (
      <div className="mt-4">
        <div className="jumbotron jumbotron-fluid mb-4">
          <div className="container">
            <h1 className="display-4 text-success text-center">
              Player Statistics
            </h1>
            <p className="lead text-center">
              Display player statistics by season or search for a specific
              player
            </p>
          </div>
        </div>
        <PlayerSearch />
      </div>
    );
  }
}
