import React, { Component } from "react";

export default class TeamPageBtns extends Component {
  render() {
    let {
      showHittingTable,
      showPitchingTable,
      tableBattingShown,
      tablePitchingShown
    } = this.props;
    return (
      <div className="btn-group w-100" role="group">
        {tableBattingShown ? (
          <button
            type="button"
            className=" teamHittingBtn btn btn-success"
            onClick={showHittingTable}
          >
            Team Hitting
          </button>
        ) : (
          <button
            type="button"
            className=" teamHittingBtn btn btn-outline-success"
            onClick={showHittingTable}
          >
            Team Hitting
          </button>
        )}

        {tablePitchingShown ? (
          <button
            type="button"
            className=" teamPitchingBtn btn btn-success"
            onClick={showPitchingTable}
          >
            Team Pitching
          </button>
        ) : (
          <button
            type="button"
            className=" teamPitchingBtn btn btn-outline-success"
            onClick={showPitchingTable}
          >
            Team Pitching
          </button>
        )}
      </div>
    );
  }
}
