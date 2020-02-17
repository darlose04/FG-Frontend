import React, { Component } from "react";
import BtnChoice from "./BtnChoice";
import PlayerSearch from "./PlayerSearch";
import PlayerPageBtns from "./PlayerPageBtns";

export default class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false,
      showStats: false
    };

    this.showSearchForm = this.showSearchForm.bind(this);
    this.showStatsBtns = this.showStatsBtns.bind(this);
  }

  showSearchForm() {
    this.setState({
      showSearch: true,
      showStats: false
    });
  }

  showStatsBtns() {
    this.setState({
      showSearch: false,
      showStats: true
    });
  }

  render() {
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
        />
      </div>
    );
  }
}
