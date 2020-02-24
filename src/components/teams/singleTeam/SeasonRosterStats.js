import React, { Component } from "react";
import RosterStdBatterTable from "./roster/RosterStdBatterTable";
import RosterAdvBatterTable from "./roster/RosterAdvBatterTable";
import RosterStdStarterTable from "./roster/RosterStdStarterTable";
import RosterAdvStarterTable from "./roster/RosterAdvStarterTable";
import RosterStdRelieverTable from "./roster/RosterStdRelieverTable";
import RosterAdvRelieverTable from "./roster/RosterAdvRelieverTable";

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

    let starting = await axios.get(
      `${baseUrl}playerstarting/teams/${team}/${season}`
    );

    let relieving = await axios.get(
      `${baseUrl}playerrelieving/teams/${team}/${season}`
    );

    // Account for Rays and Nationals formerly being Devil Rays and Expos
    // hitting
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

    // starting
    if (team === "Rays") {
      let oldStarting = await axios.get(
        `${baseUrl}playerstarting/teams/Devil Rays/${season}`
      );
      for (let i = 0; i < oldStarting.data.length; i++) {
        starting.data.push(oldStarting.data[i]);
      }
    }

    if (team === "Nationals" && Number(season) < 2005) {
      let oldStarting = await axios.get(
        `${baseUrl}playerstarting/teams/Expos/${season}`
      );
      for (let i = 0; i < oldStarting.data.length; i++) {
        starting.data.push(oldStarting.data[i]);
      }
    }

    // relieving
    if (team === "Rays") {
      let oldRelieving = await axios.get(
        `${baseUrl}playerrelieving/teams/Devil Rays/${season}`
      );
      for (let i = 0; i < oldRelieving.data.length; i++) {
        relieving.data.push(oldRelieving.data[i]);
      }
    }

    if (team === "Nationals" && Number(season) < 2005) {
      let oldRelieving = await axios.get(
        `${baseUrl}playerrelieving/teams/Expos/${season}`
      );
      for (let i = 0; i < oldRelieving.data.length; i++) {
        relieving.data.push(oldRelieving.data[i]);
      }
    }

    let sortedBatting = batting.data.sort((a, b) => {
      return b.plate_appearances - a.plate_appearances;
    });

    let sortedStarting = starting.data.sort((a, b) => {
      return b.ip - a.ip;
    });

    let sortedRelieving = relieving.data.sort((a, b) => {
      return b.saves - a.saves;
    });

    this.setState({
      rosterBatting: sortedBatting,
      rosterStarters: sortedStarting,
      rosterRelievers: sortedRelieving
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    let season = this.props.season;
    let team = this.props.team;

    if (prevProps.season !== season) {
      let batting = await axios.get(
        `${baseUrl}playerbatting/teams/${team}/${season}`
      );

      let starting = await axios.get(
        `${baseUrl}playerstarting/teams/${team}/${season}`
      );

      let relieving = await axios.get(
        `${baseUrl}playerrelieving/teams/${team}/${season}`
      );

      // account for Rays and Nationals having different names
      // batting
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

      //starting
      if (team === "Rays") {
        let oldStarting = await axios.get(
          `${baseUrl}playerstarting/teams/Devil Rays/${season}`
        );
        for (let i = 0; i < oldStarting.data.length; i++) {
          starting.data.push(oldStarting.data[i]);
        }
      }

      if (team === "Nationals" && Number(season) < 2005) {
        let oldStarting = await axios.get(
          `${baseUrl}playerstarting/teams/Expos/${season}`
        );
        for (let i = 0; i < oldStarting.data.length; i++) {
          starting.data.push(oldStarting.data[i]);
        }
      }

      // relieving
      if (team === "Rays") {
        let oldRelieving = await axios.get(
          `${baseUrl}playerrelieving/teams/Devil Rays/${season}`
        );
        for (let i = 0; i < oldRelieving.data.length; i++) {
          relieving.data.push(oldRelieving.data[i]);
        }
      }

      if (team === "Nationals" && Number(season) < 2005) {
        let oldRelieving = await axios.get(
          `${baseUrl}playerrelieving/teams/Expos/${season}`
        );
        for (let i = 0; i < oldRelieving.data.length; i++) {
          relieving.data.push(oldRelieving.data[i]);
        }
      }

      let sortedBatting = batting.data.sort((a, b) => {
        return b.plate_appearances - a.plate_appearances;
      });

      let sortedStarting = starting.data.sort((a, b) => {
        return b.ip - a.ip;
      });

      let sortedRelieving = relieving.data.sort((a, b) => {
        return b.saves - a.saves;
      });

      this.setState({
        rosterBatting: sortedBatting,
        rosterStarters: sortedStarting,
        rosterRelievers: sortedRelieving
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
      <div id="top">
        <h3>
          {this.props.season} record: {displayRecord.wins}-
          {displayRecord.losses}
        </h3>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item ">
            <a className="text-success" href="#batters">
              Batters
            </a>
          </li>
          <li className="list-group-item">
            <a className="text-success" href="#starters">
              Starters
            </a>
          </li>
          <li className="list-group-item">
            <a className="text-success" href="#relievers">
              Relievers
            </a>
          </li>
        </ul>
        <h3 id="batters">Batting</h3>
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
        <div>
          <h3 id="starters">Starting Pitching</h3>
          <a className="text-success" href="#top">
            Return to Top
          </a>
        </div>
        {standard ? (
          <RosterStdStarterTable
            stats={rosterStarters}
            showStd={this.showStandard}
            showAdv={this.showAdvanced}
            stdClass={stdClass}
            advClass={advClass}
            clickStyle={clickStyle}
          />
        ) : (
          <RosterAdvStarterTable
            stats={rosterStarters}
            showStd={this.showStandard}
            showAdv={this.showAdvanced}
            stdClass={stdClass}
            advClass={advClass}
            clickStyle={clickStyle}
          />
        )}
        <div>
          <h3 id="relievers">Relief Pitching</h3>
          <a className="text-success" href="#top">
            Return to Top
          </a>
        </div>
        {standard ? (
          <RosterStdRelieverTable
            stats={rosterRelievers}
            showStd={this.showStandard}
            showAdv={this.showAdvanced}
            stdClass={stdClass}
            advClass={advClass}
            clickStyle={clickStyle}
          />
        ) : (
          <RosterAdvRelieverTable
            stats={rosterRelievers}
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
