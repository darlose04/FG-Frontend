import React, { Component } from "react";

export default class PlayerSummary extends Component {
  render() {
    let playerName = this.props.match.params.player;

    return (
      <div>
        <h2>This page will be for {playerName}'s stats</h2>
      </div>
    );
  }
}
