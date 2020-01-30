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

export default class Teams extends Component {
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
      hittingButtonClass: "btn btn-outline-success",
      pitchingButtonClass: "btn btn-outline-success",
      stdButtonClass: "btn btn-success",
      advButtonClass: "btn btn-outline-success",
      totalsBtnClass: "btn btn-success",
      startingBtnClass: "btn btn-outline-success",
      relievingBtnClass: "btn btn-outline-success",
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
      hittingButtonClass: "btn btn-success",
      pitchingButtonClass: "btn btn-outline-success",
      stdButtonClass: "btn btn-success",
      advButtonClass: "btn btn-outline-success"
    });
  }

  showPitching() {
    this.setState({
      battingStats: "",
      pitchingStats: "standard",
      hittingButtonClass: "btn btn-outline-success",
      pitchingButtonClass: "btn btn-success",
      stdButtonClass: "btn btn-success",
      advButtonClass: "btn btn-outline-success"
    });
  }

  showTotals() {
    this.setState({
      pitchingTableShown: "totals",
      totalsBtnClass: "btn btn-success",
      startingBtnClass: "btn btn-outline-success",
      relievingBtnClass: "btn btn-outline-success"
    });
  }

  showStarting() {
    this.setState({
      pitchingTableShown: "starting",
      totalsBtnClass: "btn btn-outline-success",
      startingBtnClass: "btn btn-success",
      relievingBtnClass: "btn btn-outline-success"
    });
  }

  showRelieving() {
    this.setState({
      pitchingTableShown: "relieving",
      totalsBtnClass: "btn btn-outline-success",
      startingBtnClass: "btn btn-outline-success",
      relievingBtnClass: "btn btn-success"
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
      stdButtonClass: "btn btn-success",
      advButtonClass: "btn btn-outline-success"
    });
  }

  showAdvBattingTable() {
    this.setState({
      battingStats: "advanced",
      stdButtonClass: "btn btn-outline-success",
      advButtonClass: "btn btn-success"
    });
  }

  showStdPitchingTable() {
    this.setState({
      pitchingStats: "standard",
      stdButtonClass: "btn btn-success",
      advButtonClass: "btn btn-outline-success"
    });
  }

  showAdvPitchingTable() {
    this.setState({
      pitchingStats: "advanced",
      stdButtonClass: "btn btn-outline-success",
      advButtonClass: "btn btn-success"
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
      }
    };
    return (
      <div className="mt-5">
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
              showTotals={this.state.showTotals}
              showStarting={this.state.showStarting}
              showRelieving={this.state.showRelieving}
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
