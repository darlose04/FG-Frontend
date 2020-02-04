import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TeamPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const teamName = this.props.match.params.team;

    return (
      <div className="mt-4">
        <Link to="/teamselect">
          <button type="button" className="btn btn-success">
            Return to team selection
          </button>
        </Link>
        <h1>This is the team page for the {teamName}</h1>
      </div>
    );
  }
}
