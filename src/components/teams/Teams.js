import React, { Component } from "react";
import TeamPageBtns from "./TeamPageBtns";
import SeasonSelect from "./SeasonSelect";
import TeamStandardBattingTable from "./TeamStandardBattingTable";
import TeamAdvancedBattingTable from "./TeamAdvancedBattingTable";
import axios from "axios";

export default class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: 2019,
      teamBatting: [],
      tableStats: "",
      pitchingTable: false
    };
    this.showHitting = this.showHitting.bind(this);
    this.changeSeason = this.changeSeason.bind(this);
  }

  async componentDidMount() {
    let batting = await axios.get(
      `https://www.fgbaseballapi.com/api/teambatting/${this.state.season}`
    );

    let sortedData = batting.data.sort((a, b) => {
      return b.war - a.war;
    });

    this.setState({
      teamBatting: sortedData
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.season !== this.state.season) {
      let batting = await axios.get(
        `https://www.fgbaseballapi.com/api/teambatting/${this.state.season}`
      );

      let sortedData = batting.data.sort((a, b) => {
        return b.war - a.war;
      });

      this.setState({
        teamBatting: sortedData
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
