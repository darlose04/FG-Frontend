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
      playerStatsClass: "btn btn-outline-success"
    };

    this.showSearchForm = this.showSearchForm.bind(this);
    this.showStatsBtns = this.showStatsBtns.bind(this);
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

  render() {
    const { playerSearchClass, playerStatsClass } = this.state;
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
        {this.state.showSearch ? <PlayerSearch /> : <div></div>}
        {this.state.showStats ? <PlayerPageBtns /> : <div></div>}
      </div>
    );
  }
}
