import React, { Component } from "react";
import BtnChoice from "./BtnChoice";
import PlayerSearch from "./PlayerSearch";
import PlayerPageBtns from "./PlayerPageBtns";

export default class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false,
      showStats: false,
      playerSearchClass: "btn btn-outline-success",
      playerStatsClass: "btn btn-outline-success",
      hittersBtnClass: "btn btn-outline-success",
      startersBtnClass: "btn btn-outline-success",
      relieversBtnClass: "btn btn-outline-success",
      showHitters: false,
      showStarters: false,
      showRelievers: false,
      season: 2019
    };

    this.showSearchForm = this.showSearchForm.bind(this);
    this.showStatsBtns = this.showStatsBtns.bind(this);
    this.showHittersTbl = this.showHittersTbl.bind(this);
    this.showStartersTbl = this.showStartersTbl.bind(this);
    this.showRelieversTbl = this.showRelieversTbl.bind(this);
  }

  showSearchForm() {
    this.setState({
      showSearch: true,
      showStats: false,
      playerSearchClass: "btn btn-success",
      playerStatsClass: "btn btn-outline-success"
    });
  }

  showStatsBtns() {
    this.setState({
      showSearch: false,
      showStats: true,
      playerSearchClass: "btn btn-outline-success",
      playerStatsClass: "btn btn-success"
    });
  }

  showHittersTbl() {
    this.setState({
      showHitters: true,
      showStarters: false,
      showRelievers: false,
      hittersBtnClass: "btn btn-success",
      startersBtnClass: "btn btn-outline-success",
      relieversBtnClass: "btn btn-outline-success"
    });
  }

  showStartersTbl() {
    this.setState({
      showHitters: false,
      showStarters: true,
      showRelievers: false,
      hittersBtnClass: "btn btn-outline-success",
      startersBtnClass: "btn btn-success",
      relieversBtnClass: "btn btn-outline-success"
    });
  }

  showRelieversTbl() {
    this.setState({
      showHitters: false,
      showStarters: false,
      showRelievers: true,
      hittersBtnClass: "btn btn-outline-success",
      startersBtnClass: "btn btn-outline-success",
      relieversBtnClass: "btn btn-success"
    });
  }

  render() {
    const {
      showSearch,
      showStats,
      playerSearchClass,
      playerStatsClass,
      hittersBtnClass,
      startersBtnClass,
      relieversBtnClass,
      season
    } = this.state;

    return (
      <div className="mt-4">
        <div className="jumbotron jumbotron-fluid mb-4">
          <div className="container">
            <h1 className="display-4 text-success text-center">
              Player Statistics
            </h1>
            <p className="lead text-center">
              Display player statistics by season or search for a specific
              player
            </p>
          </div>
        </div>
        <BtnChoice
          showSearchForm={this.showSearchForm}
          showStatsBtns={this.showStatsBtns}
          searchBtn={playerSearchClass}
          statsBtn={playerStatsClass}
        />
        {showSearch ? <PlayerSearch /> : <div></div>}
        {showStats ? (
          <PlayerPageBtns
            showHitters={this.showHittersTbl}
            hitBtn={hittersBtnClass}
            showStarters={this.showStartersTbl}
            startBtn={startersBtnClass}
            showRelievers={this.showRelieversTbl}
            reliefBtn={relieversBtnClass}
            seasonSubmit={this.seasonSubmit}
            season={season}
          />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
