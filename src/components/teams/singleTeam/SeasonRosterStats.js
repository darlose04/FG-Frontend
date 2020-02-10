import React, { Component } from "react";
import RosterStdBatterTable from "./roster/RosterStdBatterTable";
import RosterAdvBatterTable from "./roster/RosterAdvBatterTable";

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

  componentDidMount() {}

  render() {
    const { season } = this.props;

    return (
      <div>
        <h1>{season}</h1>
        <RosterStdBatterTable stats={rosterBatting} />
        <RosterAdvBatterTable stats={rosterBatting} />
      </div>
    );
  }
}
