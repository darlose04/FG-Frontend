import React, { Component } from "react";

export default class TeamPageBtns extends Component {
  render() {
    return (
      <div className="btn-group w-100" role="group">
        {this.props.tableBattingShown ? (
          <button
            type="button"
            className=" teamHittingBtn btn btn-success"
            onClick={this.props.showHittingTable}
          >
            Team Hitting
          </button>
        ) : (
          <button
            type="button"
            className=" teamHittingBtn btn btn-outline-success"
            onClick={this.props.showHittingTable}
          >
            Team Hitting
          </button>
        )}

        {this.props.tablePitchingShown ? (
          <button
            type="button"
            className=" teamPitchingBtn btn btn-success"
            onClick={this.props.showPitchingTable}
          >
            Team Pitching
          </button>
        ) : (
          <button
            type="button"
            className=" teamPitchingBtn btn btn-outline-success"
            onClick={this.props.showPitchingTable}
          >
            Team Pitching
          </button>
        )}
      </div>
    );
  }
}
