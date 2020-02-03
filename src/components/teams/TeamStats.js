import React, { Component } from "react";
import TeamPageBtns from "./TeamPageBtns";
import SeasonSelect from "./SeasonSelect";
import TeamStandardBattingTable from "./batting/TeamStandardBattingTable";
import TeamAdvancedBattingTable from "./batting/TeamAdvancedBattingTable";
import PitchingButtons from "./pitching/PitchingButtons";
import TeamStandardPitchingTable from "./pitching/TeamStandardPitchingTable";
import TeamAdvancedPitchingTable from "./pitching/TeamAdvancedPitchingTable";
import TeamStdStartingTable from "./pitching/TeamStdStartingTable";
import TeamAdvStartingTable from "./pitching/TeamAdvStartingTable";
import TeamStdRelievingTable from "./pitching/TeamStdRelievingTable";
import TeamAdvRelievingTable from "./pitching/TeamAdvRelievingTable";
import axios from "axios";

const baseUrl = "https://www.fgbaseballapi.com/api";

export default class TeamStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: 2019,
      teamBatting: [],
      teamPitching: [],
      teamStarting: [],
      teamRelieving: [],
      battingStats: "",
      pitchingStats: "",
      hittingButtonClass: "btn btn-outline-success teamHittingBtn",
      pitchingButtonClass: "btn btn-outline-success teamPitchingBtn",
      stdButtonClass: "btn btn-success std",
      advButtonClass: "btn btn-outline-success adv",
      totalsBtnClass: "btn btn-success totals",
      startingBtnClass: "btn btn-outline-success starts",
      relievingBtnClass: "btn btn-outline-success reliefs",
      pitchingTableShown: "totals"
    };
    this.showHitting = this.showHitting.bind(this);
    this.showPitching = this.showPitching.bind(this);
    this.showTotals = this.showTotals.bind(this);
    this.showStarting = this.showStarting.bind(this);
    this.showRelieving = this.showRelieving.bind(this);
    this.changeSeason = this.changeSeason.bind(this);
    this.showStdBattingTable = this.showStdBattingTable.bind(this);
    this.showAdvBattingTable = this.showAdvBattingTable.bind(this);
    this.showStdPitchingTable = this.showStdPitchingTable.bind(this);
    this.showAdvPitchingTable = this.showAdvPitchingTable.bind(this);
  }

  async componentDidMount() {
    let batting = await axios.get(
      `${baseUrl}/teambatting/${this.state.season}`
    );

    let sortedBatting = batting.data.sort((a, b) => {
      return b.war - a.war;
    });

    let pitching = await axios.get(
      `${baseUrl}/teampitching/${this.state.season}`
    );

    let sortedPitching = pitching.data.sort((a, b) => {
      return b.war - a.war;
    });

    let starting = await axios.get(
      `${baseUrl}/teamstarting/${this.state.season}`
    );

    let sortedStarting = starting.data.sort((a, b) => {
      return b.war - a.war;
    });

    let relieving = await axios.get(
      `${baseUrl}/teamrelieving/${this.state.season}`
    );

    let sortedRelieving = relieving.data.sort((a, b) => {
      return b.war - a.war;
    });

    this.setState({
      teamBatting: sortedBatting,
      teamPitching: sortedPitching,
      teamStarting: sortedStarting,
      teamRelieving: sortedRelieving
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.season !== this.state.season) {
      let batting = await axios.get(
        `${baseUrl}/teambatting/${this.state.season}`
      );

      let sortedBatting = batting.data.sort((a, b) => {
        return b.war - a.war;
      });

      let pitching = await axios.get(
        `${baseUrl}/teampitching/${this.state.season}`
      );

      let sortedPitching = pitching.data.sort((a, b) => {
        return b.war - a.war;
      });

      let starting = await axios.get(
        `${baseUrl}/teamstarting/${this.state.season}`
      );

      let sortedStarting = starting.data.sort((a, b) => {
        return b.war - a.war;
      });

      let relieving = await axios.get(
        `${baseUrl}/teamrelieving/${this.state.season}`
      );

      let sortedRelieving = relieving.data.sort((a, b) => {
        return b.war - a.war;
      });

      this.setState({
        teamBatting: sortedBatting,
        teamPitching: sortedPitching,
        teamStarting: sortedStarting,
        teamRelieving: sortedRelieving
      });
    }
  }

  showHitting() {
    this.setState({
      battingStats: "standard",
      pitchingStats: "",
      hittingButtonClass: "btn btn-success teamHittingBtn",
      pitchingButtonClass: "btn btn-outline-success teamPitchingBtn",
      stdButtonClass: "btn btn-success std",
      advButtonClass: "btn btn-outline-success adv"
    });
  }

  showPitching() {
    this.setState({
      battingStats: "",
      pitchingStats: "standard",
      hittingButtonClass: "btn btn-outline-success teamHittingBtn",
      pitchingButtonClass: "btn btn-success teamPitchingBtn",
      stdButtonClass: "btn btn-success std",
      advButtonClass: "btn btn-outline-success adv"
    });
  }

  showTotals() {
    this.setState({
      pitchingTableShown: "totals",
      totalsBtnClass: "btn btn-success totals",
      startingBtnClass: "btn btn-outline-success starts",
      relievingBtnClass: "btn btn-outline-success reliefs"
    });
  }

  showStarting() {
    this.setState({
      pitchingTableShown: "starting",
      totalsBtnClass: "btn btn-outline-success totals",
      startingBtnClass: "btn btn-success starts",
      relievingBtnClass: "btn btn-outline-success reliefs"
    });
  }

  showRelieving() {
    this.setState({
      pitchingTableShown: "relieving",
      totalsBtnClass: "btn btn-outline-success totals",
      startingBtnClass: "btn btn-outline-success starts",
      relievingBtnClass: "btn btn-success reliefs"
    });
  }

  changeSeason(newSeason) {
    this.setState({
      season: newSeason
    });
  }

  showStdBattingTable() {
    this.setState({
      battingStats: "standard",
      stdButtonClass: "btn btn-success std",
      advButtonClass: "btn btn-outline-success adv"
    });
  }

  showAdvBattingTable() {
    this.setState({
      battingStats: "advanced",
      stdButtonClass: "btn btn-outline-success std",
      advButtonClass: "btn btn-success adv"
    });
  }

  showStdPitchingTable() {
    this.setState({
      pitchingStats: "standard",
      stdButtonClass: "btn btn-success std",
      advButtonClass: "btn btn-outline-success adv"
    });
  }

  showAdvPitchingTable() {
    this.setState({
      pitchingStats: "advanced",
      stdButtonClass: "btn btn-outline-success std",
      advButtonClass: "btn btn-success adv"
    });
  }

  render() {
    const pitchingData = () => {
      if (this.state.pitchingTableShown === "totals") {
        if (this.state.pitchingStats === "standard") {
          return <TeamStandardPitchingTable stats={this.state.teamPitching} />;
        } else if (this.state.pitchingStats === "advanced") {
          return <TeamAdvancedPitchingTable stats={this.state.teamPitching} />;
        }
      } else if (this.state.pitchingTableShown === "starting") {
        if (this.state.pitchingStats === "standard") {
          return <TeamStdStartingTable stats={this.state.teamStarting} />;
        } else if (this.state.pitchingStats === "advanced") {
          return <TeamAdvStartingTable stats={this.state.teamStarting} />;
        }
      } else if (this.state.pitchingTableShown === "relieving") {
        if (this.state.pitchingStats === "standard") {
          return <TeamStdRelievingTable stats={this.state.teamRelieving} />;
        } else if (this.state.pitchingStats === "advanced") {
          return <TeamAdvRelievingTable stats={this.state.teamRelieving} />;
        }
      }
    };

    return (
      <div className="mt-4">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 text-success text-center">
              Team Statistics
            </h1>
            <p className="lead text-center">
              Display team hitting or pitching statistics by season
            </p>
          </div>
        </div>
        <TeamPageBtns
          showHittingTable={this.showHitting}
          showPitchingTable={this.showPitching}
          hittingButtonClass={this.state.hittingButtonClass}
          pitchingButtonClass={this.state.pitchingButtonClass}
          tableBattingShown={this.state.battingStats}
          tablePitchingShown={this.state.pitchingStats}
        />
        {this.state.battingStats ? (
          <div>
            <SeasonSelect
              season={this.state.season}
              changeSeason={this.changeSeason}
              tableBattingShown={this.state.battingStats}
              stdBattingTable={this.showStdBattingTable}
              advBattingTable={this.showAdvBattingTable}
              stdButtonClass={this.state.stdButtonClass}
              advButtonClass={this.state.advButtonClass}
            />
            {this.state.battingStats === "standard" ? (
              <TeamStandardBattingTable stats={this.state.teamBatting} />
            ) : (
              <TeamAdvancedBattingTable stats={this.state.teamBatting} />
            )}
          </div>
        ) : (
          <div></div>
        )}

        {this.state.pitchingStats ? (
          <div>
            <SeasonSelect
              season={this.state.season}
              changeSeason={this.changeSeason}
              tablePitchingShown={this.state.pitchingStats}
              stdPitchingTable={this.showStdPitchingTable}
              advPitchingTable={this.showAdvPitchingTable}
              stdButtonClass={this.state.stdButtonClass}
              advButtonClass={this.state.advButtonClass}
            />
            <PitchingButtons
              totalsClass={this.state.totalsBtnClass}
              startingClass={this.state.startingBtnClass}
              relievingClass={this.state.relievingBtnClass}
              showTotals={this.showTotals}
              showStarting={this.showStarting}
              showRelieving={this.showRelieving}
            />
            {pitchingData()}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
