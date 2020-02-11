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

    // Acount for Rays and Nationals formerly being Devil Rays and Expos

    if (team === "Rays") {
      let oldBatting = await axios.get(
        `${baseUrl}playerbatting/teams/Devil Rays/${season}`
      );
      for (let i = 0; i < oldBatting.data.length; i++) {
        batting.data.push(oldBatting.data[i]);
      }
    }

    if (team === "Nationals" && Number(season) < 2005) {
      let oldBatting = await axios.get(
        `${baseUrl}playerbatting/teams/Expos/${season}`
      );
      for (let i = 0; i < oldBatting.data.length; i++) {
        batting.data.push(oldBatting.data[i]);
      }
    }

    let sortedBatting = batting.data.sort((a, b) => {
      return b.plate_appearances - a.plate_appearances;
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

      // account for Rays and Nationals having different names

      if (team === "Rays") {
        let oldBatting = await axios.get(
          `${baseUrl}playerbatting/teams/Devil Rays/${season}`
        );
        for (let i = 0; i < oldBatting.data.length; i++) {
          batting.data.push(oldBatting.data[i]);
        }
      }

      if (team === "Nationals" && Number(season) < 2005) {
        let oldBatting = await axios.get(
          `${baseUrl}playerbatting/teams/Expos/${season}`
        );
        for (let i = 0; i < oldBatting.data.length; i++) {
          batting.data.push(oldBatting.data[i]);
        }
      }

      let sortedBatting = batting.data.sort((a, b) => {
        return b.plate_appearances - a.plate_appearances;
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
      advClass,
      standard
    } = this.state;

    const { record } = this.props;

    let currentSeason = record.filter(item => item.season == this.props.season);

    let displayRecord = currentSeason[0];

    return (
      <div>
        <h3>
          {this.props.season} record: {displayRecord.wins}-
          {displayRecord.losses}
        </h3>
        {standard ? (
          <RosterStdBatterTable
            stats={rosterBatting}
            showStd={this.showStandard}
            showAdv={this.showAdvanced}
            stdClass={stdClass}
            advClass={advClass}
            clickStyle={clickStyle}
          />
        ) : (
          <RosterAdvBatterTable
            stats={rosterBatting}
            showStd={this.showStandard}
            showAdv={this.showAdvanced}
            stdClass={stdClass}
            advClass={advClass}
            clickStyle={clickStyle}
          />
        )}
      </div>
    );
  }
}
