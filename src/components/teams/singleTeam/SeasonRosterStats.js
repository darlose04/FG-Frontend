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
    this.showStandard = this.showStandard.bind(this);
    this.showAdvanced = this.showAdvanced.bind(this);
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

  showStandard() {
    this.setState({
      standard: true,
      advanced: false,
      stdClass: "bg-success text-white",
      advClass: "text-success"
    });
  }

  showAdvanced() {
    this.setState({
      standard: false,
      advanced: true,
      stdClass: "text-success",
      advClass: "bg-success text-white"
    });
  }

  render() {
    let clickStyle = {
      cursor: "pointer"
    };

    const {
      rosterBatting,
      rosterStarters,
      rosterRelievers,
      stdClass,
      advClass
    } = this.state;

    return (
      <div>
        <h1>{this.props.season}</h1>
        <RosterStdBatterTable
          stats={rosterBatting}
          showStd={this.showStandard}
          showAdv={this.showAdvanced}
          stdClass={stdClass}
          advClass={advClass}
          clickStyle={clickStyle}
        />
        <RosterAdvBatterTable
          stats={rosterBatting}
          showStd={this.showStandard}
          showAdv={this.showAdvanced}
          stdClass={stdClass}
          advClass={advClass}
          clickStyle={clickStyle}
        />
      </div>
    );
  }
}
