import React, { Component } from "react";
import { Link } from "react-router-dom";
import TeamPageBtns from "./TeamPageBtns";
import StdBattingTable from "./batting/StdBattingTable";
import AdvBattingTable from "./batting/AdvBattingTable";
import StdPitchingTable from "./pitching/StdPitchingTable";
import AdvPitchingTable from "./pitching/AdvPitchingTable";
import StdStartingTable from "./pitching/StdStartingTable";
import AdvStartingTable from "./pitching/AdvStartingTable";
import StdRelievingTable from "./pitching/StdRelievingTable";
import AdvRelievingTable from "./pitching/AdvRelievingTable";

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
      relieving: [],
      standard: true,
      advanced: false,
      hittingTable: true,
      pitchingTable: false,
      hittingBtnClass: "btn btn-success hittingBtn",
      pitchingBtnClass: "btn btn-outline-success pitchingBtn"
    };

    this.showHitting = this.showHitting.bind(this);
    this.showPitching = this.showPitching.bind(this);
  }

  async componentDidMount() {
    const teamName = this.props.match.params.team;

    let batting = await axios.get(`${baseUrl}/teambatting/teams/${teamName}`);
    let pitching = await axios.get(`${baseUrl}/teampitching/teams/${teamName}`);

    // The Rays used to be called the Devil Rays.
    // The Nationals used to be the Expos.
    // Therefore it is necessary to account for this change in name.

    if (teamName === "Rays") {
      let oldName = await axios.get(`${baseUrl}/teambatting/teams/Devil Rays`);
      for (let i = 0; i < oldName.data.length; i++) {
        batting.data.push(oldName.data[i]);
      }

      let oldPitching = await axios.get(
        `${baseUrl}/teampitching/teams/Devil Rays`
      );
      for (let i = 0; i < oldPitching.data.length; i++) {
        pitching.data.push(oldPitching.data[i]);
      }
    } else if (teamName === "Nationals") {
      let oldName = await axios.get(`${baseUrl}/teambatting/teams/Expos`);
      for (let i = 0; i < oldName.data.length; i++) {
        batting.data.push(oldName.data[i]);
      }

      let oldPitching = await axios.get(`${baseUrl}/teampitching/teams/Expos`);
      for (let i = 0; i < oldPitching.data.length; i++) {
        pitching.data.push(oldPitching.data[i]);
      }
    }

    let sortedBatting = batting.data.sort((a, b) => {
      return b.season - a.season;
    });

    let sortedPitching = pitching.data.sort((a, b) => {
      return b.season - a.season;
    });

    this.setState({
      team: teamName,
      batting: sortedBatting,
      pitching: sortedPitching
    });
  }

  showHitting() {
    this.setState({
      hittingTable: true,
      pitchingTable: false,
      hittingBtnClass: "btn btn-success hittingBtn",
      pitchingBtnClass: "btn btn-outline-success pitchingBtn"
    });
  }

  showPitching() {
    this.setState({
      hittingTable: false,
      pitchingTable: true,
      hittingBtnClass: "btn btn-outline-success hittingBtn",
      pitchingBtnClass: "btn btn-success pitchingBtn"
    });
  }

  render() {
    const teamName = this.props.match.params.team;

    const {
      team,
      batting,
      pitching,
      starting,
      relieving,
      standard,
      advanced,
      hittingTable,
      pitchingTable,
      hittingBtnClass,
      pitchingBtnClass
    } = this.state;

    return (
      <div className="mt-4">
        <Link to="/teamselect">
          <button type="button" className="btn btn-outline-success">
            Return to team selection
          </button>
        </Link>
        <h1>This is the team page for the {teamName}</h1>
        <TeamPageBtns
          hittingBtnClass={hittingBtnClass}
          pitchingBtnClass={pitchingBtnClass}
          showHitting={this.showHitting}
          showPitching={this.showPitching}
        />
        {hittingTable ? (
          <div>
            <StdBattingTable stats={batting} />
            <AdvBattingTable stats={batting} />
          </div>
        ) : pitchingTable ? (
          <div>
            <h2>Totals</h2>
            <StdPitchingTable stats={pitching} />
            <AdvPitchingTable stats={pitching} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
