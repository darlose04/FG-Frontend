import React, { Component } from "react";

export default class BtnChoice extends Component {
  render() {
    return (
      <div className="btn-group w-100" role="group">
        <button
          type="button"
          className={this.props.searchBtn}
          onClick={this.props.showSearchForm}
        >
          Search for a Specific Player
        </button>
        <button
          type="button"
          className={this.props.statsBtn}
          onClick={this.props.showStatsBtns}
        >
          Return Player Stats by Season
        </button>
      </div>
    );
  }
}
