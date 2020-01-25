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
      teamBatting: []
    };
  }

  async componentDidMount() {
    let batting = await axios.get(
      `https://www.fgbaseballapi.com/api/teambatting/${this.state.season}`
    );

    this.setState({
      teamBatting: batting.data
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
          <button type="button" className="btn btn-outline-success">
            Team Hitting
          </button>
          <button type="button" className="btn btn-outline-success">
            Team Pitching
          </button>
        </div>
        <SeasonSelect />
        <TeamBattingTable stats={this.state.teamBatting} />
      </div>
    );
  }
}
