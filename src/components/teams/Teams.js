import React, { Component } from "react";
import TeamPageBtns from "./TeamPageBtns";
import SeasonSelect from "./SeasonSelect";
import TeamBattingTable from "./TeamBattingTable";
import axios from "axios";

export default class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: 2019,
      teamBatting: [],
      hittingTable: false,
      pitchingTable: false
    };
    this.showHitting = this.showHitting.bind(this);
    this.changeSeason = this.changeSeason.bind(this);
  }

  async componentDidMount() {
    let batting = await axios.get(
      `https://www.fgbaseballapi.com/api/teambatting/${this.state.season}`
    );

    this.setState({
      teamBatting: batting.data
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.season !== this.state.season) {
      let batting = await axios.get(
        `https://www.fgbaseballapi.com/api/teambatting/${this.state.season}`
      );
      this.setState({
        teamBatting: batting.data
      });
    }
  }

  showHitting() {
    this.setState({
      hittingTable: !this.state.hittingTable
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
          hittingTrue={this.state.hittingTable}
        />
        {this.state.hittingTable ? (
          <div>
            <SeasonSelect
              season={this.state.season}
              changeSeason={this.changeSeason}
            />
            <TeamBattingTable stats={this.state.teamBatting} />
          </div>
        ) : (
          <h2 className="text-center">Select Hitting or Pitching</h2>
        )}
      </div>
    );
  }
}
