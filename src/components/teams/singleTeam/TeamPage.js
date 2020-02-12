import React, { Component } from "react";
import { Link } from "react-router-dom";
import TeamPageBtns from "./TeamPageBtns";
import BattingComponent from "./batting/BattingComponent";
import TotalPitchingComponent from "./pitching/TotalPitchingComponent";
import StartingPitchingComponent from "./pitching/StartingPitchingComponent";
import ReliefPitchingComponent from "./pitching/ReliefPitchingComponent";
import TeamPageSeasonSelect from "./TeamPageSeasonSelect";
import SeasonRosterStats from "./SeasonRosterStats";

import axios from "axios";

const baseUrl = "https://www.fgbaseballapi.com/api";
export default class TeamPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: "",
      season: "",
      record: [],
      batting: [],
      pitching: [],
      starting: [],
      relieving: [],
      standard: true,
      advanced: false,
      stdClass: "bg-success text-white",
      advClass: "text-success",
      hittingTable: true,
      pitchingTable: false,
      showChart: false,
      hittingBtnClass: "btn btn-success hittingBtn",
      pitchingBtnClass: "btn btn-outline-success pitchingBtn"
    };

    this.showHitting = this.showHitting.bind(this);
    this.showPitching = this.showPitching.bind(this);
    this.showStandard = this.showStandard.bind(this);
    this.showAdvanced = this.showAdvanced.bind(this);
    this.showSeason = this.showSeason.bind(this);
    this.showTeamStats = this.showTeamStats.bind(this);
    this.showChart = this.showChart.bind(this);
  }

  async componentDidMount() {
    let teamName = this.props.match.params.team;

    let batting = await axios.get(`${baseUrl}/teambatting/teams/${teamName}`);
    let pitching = await axios.get(`${baseUrl}/teampitching/teams/${teamName}`);
    let starting = await axios.get(`${baseUrl}/teamstarting/teams/${teamName}`);
    let relieving = await axios.get(
      `${baseUrl}/teamrelieving/teams/${teamName}`
    );

    // The Rays used to be called the Devil Rays.
    // The Nationals used to be the Expos.
    // Therefore it is necessary to account for this change in name.

    if (teamName === "Rays") {
      let oldBatting = await axios.get(
        `${baseUrl}/teambatting/teams/Devil Rays`
      );
      for (let i = 0; i < oldBatting.data.length; i++) {
        batting.data.push(oldBatting.data[i]);
      }

      let oldPitching = await axios.get(
        `${baseUrl}/teampitching/teams/Devil Rays`
      );
      for (let i = 0; i < oldPitching.data.length; i++) {
        pitching.data.push(oldPitching.data[i]);
      }

      let oldStarting = await axios.get(
        `${baseUrl}/teamstarting/teams/Devil Rays`
      );
      for (let i = 0; i < oldStarting.data.length; i++) {
        starting.data.push(oldStarting.data[i]);
      }

      let oldRelieving = await axios.get(
        `${baseUrl}/teamrelieving/teams/Devil Rays`
      );
      for (let i = 0; i < oldRelieving.data.length; i++) {
        relieving.data.push(oldRelieving.data[i]);
      }
    } else if (teamName === "Nationals") {
      let oldBatting = await axios.get(`${baseUrl}/teambatting/teams/Expos`);
      for (let i = 0; i < oldBatting.data.length; i++) {
        batting.data.push(oldBatting.data[i]);
      }

      let oldPitching = await axios.get(`${baseUrl}/teampitching/teams/Expos`);
      for (let i = 0; i < oldPitching.data.length; i++) {
        pitching.data.push(oldPitching.data[i]);
      }

      let oldStarting = await axios.get(`${baseUrl}/teamstarting/teams/Expos`);
      for (let i = 0; i < oldStarting.data.length; i++) {
        starting.data.push(oldStarting.data[i]);
      }

      let oldRelieving = await axios.get(
        `${baseUrl}/teamrelieving/teams/Expos`
      );
      for (let i = 0; i < oldRelieving.data.length; i++) {
        relieving.data.push(oldRelieving.data[i]);
      }
    }

    let sortedBatting = batting.data.sort((a, b) => {
      return b.season - a.season;
    });

    let sortedPitching = pitching.data.sort((a, b) => {
      return b.season - a.season;
    });

    let sortedStarting = starting.data.sort((a, b) => {
      return b.season - a.season;
    });

    let sortedRelieving = relieving.data.sort((a, b) => {
      return b.season - a.season;
    });

    let winLossRecord = [];

    sortedPitching.map(team => {
      let winLoss = {
        season: team.season,
        wins: team.wins,
        losses: team.losses
      };

      winLossRecord.push(winLoss);
    });

    this.setState({
      team: teamName,
      batting: sortedBatting,
      pitching: sortedPitching,
      starting: sortedStarting,
      relieving: sortedRelieving,
      record: winLossRecord
    });
  }

  showHitting() {
    this.setState({
      hittingTable: true,
      pitchingTable: false,
      hittingBtnClass: "btn btn-success hittingBtn",
      pitchingBtnClass: "btn btn-outline-success pitchingBtn",
      standard: true,
      advanced: false,
      stdClass: "bg-success text-white",
      advClass: "text-success"
    });
  }

  showPitching() {
    this.setState({
      hittingTable: false,
      pitchingTable: true,
      hittingBtnClass: "btn btn-outline-success hittingBtn",
      pitchingBtnClass: "btn btn-success pitchingBtn",
      standard: true,
      advanced: false,
      stdClass: "bg-success text-white",
      advClass: "text-success"
    });
  }

  showStandard() {
    this.setState({
      standard: true,
      advanced: false,
      stdClass: "bg-success text-white",
      advClass: "text-success"
    });
  }

  showAdvanced() {
    this.setState({
      standard: false,
      advanced: true,
      stdClass: "text-success",
      advClass: "bg-success text-white"
    });
  }

  showSeason(e) {
    this.setState({
      season: e.target.value
    });
  }

  showTeamStats() {
    this.setState({
      season: ""
    });
  }

  showChart() {
    this.setState({
      showChart: true
    });
  }

  render() {
    let teamName = this.props.match.params.team;
    const logos = this.props.logos.logos;

    const teamInfo = logos.filter(logo => logo.teamName === teamName);
    const city = teamInfo[0].location;
    const teamLogo = teamInfo[0].src;

    let clickStyle = {
      cursor: "pointer"
    };

    const {
      team,
      season,
      record,
      batting,
      pitching,
      starting,
      relieving,
      standard,
      advanced,
      stdClass,
      advClass,
      hittingTable,
      pitchingTable,
      hittingBtnClass,
      pitchingBtnClass
    } = this.state;

    const display = () => {
      if (season) {
        return (
          <SeasonRosterStats record={record} season={season} team={teamName} />
        );
      } else {
        if (hittingTable) {
          return (
            <div>
              <TeamPageBtns
                hittingBtnClass={hittingBtnClass}
                pitchingBtnClass={pitchingBtnClass}
                showHitting={this.showHitting}
                showPitching={this.showPitching}
              />
              <BattingComponent data={batting} />
            </div>
          );
        } else if (pitchingTable) {
          return (
            <div>
              <TeamPageBtns
                hittingBtnClass={hittingBtnClass}
                pitchingBtnClass={pitchingBtnClass}
                showHitting={this.showHitting}
                showPitching={this.showPitching}
              />
              <TotalPitchingComponent
                std={standard}
                adv={advanced}
                data={pitching}
                showStd={this.showStandard}
                showAdv={this.showAdvanced}
                stdClass={stdClass}
                advClass={advClass}
                clickStyle={clickStyle}
              />
              <StartingPitchingComponent
                std={standard}
                adv={advanced}
                data={starting}
                showStd={this.showStandard}
                showAdv={this.showAdvanced}
                stdClass={stdClass}
                advClass={advClass}
                clickStyle={clickStyle}
              />
              <ReliefPitchingComponent
                std={standard}
                adv={advanced}
                data={relieving}
                showStd={this.showStandard}
                showAdv={this.showAdvanced}
                stdClass={stdClass}
                advClass={advClass}
                clickStyle={clickStyle}
              />
            </div>
          );
        }
      }
    };

    const logoNameDisplay = () => {
      if (
        teamName === "Rays" &&
        Number(season) < 2008 &&
        Number(season) > 2001
      ) {
        return (
          <div>
            <img
              src="https://content.sportslogos.net/logos/53/76/thumbs/1347.gif"
              alt="Devil Rays"
              className="img-fluid"
            />
            <h4>Tampa Bay Devil Rays</h4>
          </div>
        );
      } else if (
        teamName === "Nationals" &&
        Number(season) < 2005 &&
        Number(season) > 2001
      ) {
        return (
          <div>
            <img
              src="https://content.sportslogos.net/logos/54/66/thumbs/0uoumo4hp8daek0qfmje0rol3.gif"
              alt="Expos"
              className="img-fluid"
            />
            <h4>Montreal Expos</h4>
          </div>
        );
      } else {
        return (
          <div>
            <img src={teamLogo} alt={teamName} />
            <h4>
              {city} {teamName}
            </h4>
          </div>
        );
      }
    };

    return (
      <div className="mt-4">
        <div>
          <Link to="/teamselect">
            <button type="button" className="btn btn-outline-success mb-2 mr-1">
              Return to team selection
            </button>
          </Link>
          <Link to={`/teamselect/${teamName}`}>
            <button
              type="button"
              className="btn btn-outline-success mb-2"
              onClick={this.showTeamStats}
            >
              {`Return to ${teamName}`}
            </button>
          </Link>
        </div>

        <div className="mt-2">{logoNameDisplay()}</div>

        <TeamPageSeasonSelect showSeason={this.showSeason} season={season} />
        {display()}
      </div>
    );
  }
}
