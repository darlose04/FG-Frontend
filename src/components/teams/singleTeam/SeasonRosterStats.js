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
      rosterRelievers: [],
      standard: true,
      advanced: false,
      stdClass: "bg-success text-white",
      advClass: "text-success"
    };
  }

  async componentDidMount() {
    let season = this.props.season;
    let team = this.props.team;

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

  async componentDidUpdate(prevProps, prevState) {
    let season = this.props.season;
    let team = this.props.team;

    if (prevProps.season !== season) {
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
  }

  showStandard() {}

  render() {
    const { rosterBatting, rosterStarters, rosterRelievers } = this.state;

    return (
      <div>
        <h1>{this.props.season}</h1>
        <RosterStdBatterTable
          stats={rosterBatting}
          showStd={showStandard}
          showAdv={showAdvanced}
          stdClass={stdClass}
          advClass={advClass}
          clickStyle={clickStyle}
        />
        <RosterAdvBatterTable stats={rosterBatting} />
      </div>
    );
  }
}