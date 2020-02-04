import React, { Component } from "react";
import { Link } from "react-router-dom";
import StdBattingTable from "./batting/StdBattingTable";

import axios from "axios";

const baseUrl = "https://www.fgbaseballapi.com/api";
export default class TeamPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: "",
      batting: [],
      pitching: [],
      starting: [],
      relieving: []
    };
  }

  async componentDidMount() {
    const teamName = this.props.match.params.team;

    let batting = await axios.get(`${baseUrl}/teambatting/teams/${teamName}`);

    // The Rays used to be called the Devil Rays.
    // The Nationals used to be the Expos.
    // Therefore it is necessary to account for this change in name.

    if (teamName === "Rays") {
      let oldName = await axios.get(`${baseUrl}/teambatting/teams/Devil Rays`);
      for (let i = 0; i < oldName.data.length; i++) {
        batting.data.push(oldName.data[i]);
      }
    } else if (teamName === "Nationals") {
      let oldName = await axios.get(`${baseUrl}/teambatting/teams/Expos`);
      for (let i = 0; i < oldName.data.length; i++) {
        batting.data.push(oldName.data[i]);
      }
    }

    let sortedBatting = batting.data.sort((a, b) => {
      return b.season - a.season;
    });

    this.setState({
      team: teamName,
      batting: sortedBatting
    });
  }

  render() {
    const teamName = this.props.match.params.team;

    return (
      <div className="mt-4">
        <Link to="/teamselect">
          <button type="button" className="btn btn-outline-success">
            Return to team selection
          </button>
        </Link>
        <h1>This is the team page for the {teamName}</h1>
        <StdBattingTable stats={this.state.batting} />
      </div>
    );
  }
}
