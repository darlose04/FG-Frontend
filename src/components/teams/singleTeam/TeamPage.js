import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      </div>
    );
  }
}
