import React, { Component } from "react";
import axios from "axios";

export default class SeasonRosterStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rosterBatting: [],
      rosterStarters: [],
      rosterRelievers: []
    };
  }

  render() {
    const { season } = this.props;

    return (
      <div>
        <h1>{season}</h1>
      </div>
    );
  }
}
