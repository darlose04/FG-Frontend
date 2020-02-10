import React, { Component } from "react";
import RosterStdBatterTable from "./roster/RosterStdBatterTable";
import RosterAdvBatterTable from "./roster/RosterAdvBatterTable";

import axios from "axios";
const baseUrl = "https://www.fgbaseballapi.com/api/";

export default class SeasonRosterStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rosterBatting: [],
      rosterStarters: [],
      rosterRelievers: []
    };
  }

  async componentDidMount() {
    let team = this.props.team;
    let season = this.props.season;

    let batting = await axios.get(
      `${baseUrl}playerbatting/teams/${team}/${season}`
    );

    let sortedBatting = batting.data.sort((a, b) => {
      return b.war - a.war;
    });

    this.setState({
      rosterBatting: sortedBatting
    });
  }

  render() {
    const { rosterBatting, rosterStarters, rosterRelievers } = this.state;
    return (
      <div>
        <h1>{this.props.season}</h1>
        <RosterStdBatterTable stats={rosterBatting} />
        <RosterAdvBatterTable stats={rosterBatting} />
      </div>
    );
  }
}
