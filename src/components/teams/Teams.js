import React, { Component } from "react";
import TeamPageBtns from "./TeamPageBtns";
import SeasonSelect from "./SeasonSelect";
import TeamStandardBattingTable from "./batting/TeamStandardBattingTable";
import TeamAdvancedBattingTable from "./batting/TeamAdvancedBattingTable";
import axios from "axios";

const baseUrl = "https://www.fgbaseballapi.com/api";

export default class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: 2019,
      teamBatting: [],
      teamPitching: [],
      teamStarting: [],
      teamRelieving: [],
      tableStats: "",
      pitchingTable: false
    };
    this.showHitting = this.showHitting.bind(this);
    this.changeSeason = this.changeSeason.bind(this);
    this.showStdTable = this.showStdTable.bind(this);
    this.showAdvTable = this.showAdvTable.bind(this);
  }

  async componentDidMount() {
    let batting = await axios.get(
      `${baseUrl}/teambatting/${this.state.season}`
    );

    let sortedBatting = batting.data.sort((a, b) => {
      return b.war - a.war;
    });

    let pitching = await axios.get(
      `${baseUrl}/teampitching/${this.state.season}`
    );

    let sortedPitching = pitching.data.sort((a, b) => {
      return b.war - a.war;
    });

    this.setState({
      teamBatting: sortedBatting,
      teamPitching: sortedPitching
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.season !== this.state.season) {
      let batting = await axios.get(
        `${baseUrl}/teambatting/${this.state.season}`
      );

      let sortedBatting = batting.data.sort((a, b) => {
        return b.war - a.war;
      });

      let pitching = await axios.get(
        `${baseUrl}/teampitching/${this.state.season}`
      );

      let sortedPitching = pitching.data.sort((a, b) => {
        return b.war - a.war;
      });

      this.setState({
        teamBatting: sortedBatting,
        teamPitching: sortedPitching
      });
    }
  }

  showHitting() {
    this.setState({
      tableStats: "standard"
    });
  }

  changeSeason(newSeason) {
    this.setState({
      season: newSeason
    });
  }

  showStdTable() {
    this.setState({
      tableStats: "standard"
    });
  }

  showAdvTable() {
    this.setState({
      tableStats: "advanced"
    });
  }

  render() {
    return (
      <div className="mt-5">
        <TeamPageBtns
          showHittingTable={this.showHitting}
          tableShown={this.state.tableStats}
        />
        {this.state.tableStats ? (
          <div>
            <SeasonSelect
              season={this.state.season}
              changeSeason={this.changeSeason}
              tableShown={this.state.tableStats}
              stdTable={this.showStdTable}
              advTable={this.showAdvTable}
            />
            {this.state.tableStats === "standard" ? (
              <TeamStandardBattingTable stats={this.state.teamBatting} />
            ) : (
              <TeamAdvancedBattingTable stats={this.state.teamBatting} />
            )}
          </div>
        ) : (
          <h2 className="text-center">Select Hitting or Pitching</h2>
        )}
      </div>
    );
  }
}
