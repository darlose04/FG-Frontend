import React, { Component } from "react";
import TeamPageBtns from "./TeamPageBtns";
import SeasonSelect from "./SeasonSelect";
import TeamStandardBattingTable from "./batting/TeamStandardBattingTable";
import TeamAdvancedBattingTable from "./batting/TeamAdvancedBattingTable";
import TeamStandardPitchingTable from "./pitching/TeamStandardPitchingTable";
import TeamAdvancedPitchingTable from "./pitching/TeamAdvancedPitchingTable";
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
      battingStats: "",
      pitchingStats: "",
      hittingButtonClass: "btn btn-outline-success",
      pitchingButtonClass: "btn btn-outline-success",
      stdButtonClass: "btn btn-success",
      advButtonClass: "btn btn-outline-success"
    };
    this.showHitting = this.showHitting.bind(this);
    this.showPitching = this.showPitching.bind(this);
    this.changeSeason = this.changeSeason.bind(this);
    this.showStdBattingTable = this.showStdBattingTable.bind(this);
    this.showAdvBattingTable = this.showAdvBattingTable.bind(this);
    this.showStdPitchingTable = this.showStdPitchingTable.bind(this);
    this.showAdvPitchingTable = this.showAdvPitchingTable.bind(this);
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
      battingStats: "standard",
      pitchingStats: "",
      hittingButtonClass: "btn btn-success",
      pitchingButtonClass: "btn btn-outline-success"
    });
  }

  showPitching() {
    this.setState({
      battingStats: "",
      pitchingStats: "standard",
      hittingButtonClass: "btn btn-outline-success",
      pitchingButtonClass: "btn btn-success"
    });
  }

  changeSeason(newSeason) {
    this.setState({
      season: newSeason
    });
  }

  showStdBattingTable() {
    this.setState({
      battingStats: "standard",
      stdButtonClass: "btn btn-success",
      advButtonClass: "btn btn-outline-success"
    });
  }

  showAdvBattingTable() {
    this.setState({
      battingStats: "advanced",
      stdButtonClass: "btn btn-outline-success",
      advButtonClass: "btn btn-success"
    });
  }

  showStdPitchingTable() {
    this.setState({
      pitchingStats: "standard"
    });
  }

  showAdvPitchingTable() {
    this.setState({
      pitchingStats: "advanced"
    });
  }

  render() {
    return (
      <div className="mt-5">
        <TeamPageBtns
          showHittingTable={this.showHitting}
          showPitchingTable={this.showPitching}
          hittingButtonClass={this.state.hittingButtonClass}
          pitchingButtonClass={this.state.pitchingButtonClass}
          tableBattingShown={this.state.battingStats}
          tablePitchingShown={this.state.pitchingStats}
        />
        {this.state.battingStats || this.state.pitchingStats ? (
          <div>
            <SeasonSelect
              season={this.state.season}
              changeSeason={this.changeSeason}
              tableBattingShown={this.state.battingStats}
              stdBattingTable={this.showStdBattingTable}
              advBattingTable={this.showAdvBattingTable}
              tablePitchingShown={this.state.pitchingStats}
              stdPitchingTable={this.showStdPitchingTable}
              advPitchingTable={this.showAdvPitchingTable}
              stdButtonClass={this.state.stdButtonClass}
              advButtonClass={this.state.advButtonClass}
            />
            {this.state.battingStats === "standard" &&
            this.state.pitchingStats === "" ? (
              <TeamStandardBattingTable stats={this.state.teamBatting} />
            ) : (
              <TeamAdvancedBattingTable stats={this.state.teamBatting} />
            )}
            {this.state.pitchingStats === "standard" &&
            this.state.battingStats === "" ? (
              <TeamStandardPitchingTable stats={this.state.teamPitching} />
            ) : (
              <TeamAdvancedPitchingTable stats={this.state.teamPitching} />
            )}
          </div>
        ) : (
          <h2 className="text-center">Select Hitting or Pitching</h2>
        )}
      </div>
    );
  }
}
