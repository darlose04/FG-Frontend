import React, { Component } from "react";
import SeasonSelect from "./SeasonSelect";
import TeamBattingTable from "./TeamBattingTable";
import { logos } from "../../logos";
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

  async componentDidUpdate() {
    let batting = await axios.get(
      `https://www.fgbaseballapi.com/api/teambatting/${this.state.season}`
    );

    this.setState({
      teamBatting: batting.data
    });
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
        <div
          className="btn-group w-100"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={this.showHitting}
          >
            Team Hitting
          </button>
          <button type="button" className="btn btn-outline-success">
            Team Pitching
          </button>
        </div>
        {this.state.hittingTable ? (
          <div>
            <SeasonSelect season={this.changeSeason} />
            <TeamBattingTable stats={this.state.teamBatting} />
          </div>
        ) : (
          <h2 className="text-center">Select Hitting or Pitching</h2>
        )}
      </div>
    );
  }
}
