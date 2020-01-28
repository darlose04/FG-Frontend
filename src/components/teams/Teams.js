import React, { Component } from "react";
import TeamPageBtns from "./TeamPageBtns";
import SeasonSelect from "./SeasonSelect";
import TeamStandardBattingTable from "./TeamStandardBattingTable";
import axios from "axios";

export default class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: 2019,
      teamBatting: [],
      standardTable: false,
      advancedTable: false,
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
      standardTable: !this.state.standardTable
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
          tableShown={this.state.standardTable}
        />
        {this.state.standardTable ? (
          <div>
            <SeasonSelect
              season={this.state.season}
              changeSeason={this.changeSeason}
              tableShown={this.state.standardTable}
            />
            <TeamStandardBattingTable stats={this.state.teamBatting} />
          </div>
        ) : (
          <h2 className="text-center">Select Hitting or Pitching</h2>
        )}
      </div>
    );
  }
}
