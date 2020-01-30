import React, { Component } from "react";

export default class TeamPageBtns extends Component {
  render() {
    let {
      showHittingTable,
      showPitchingTable,
      hittingButtonClass,
      pitchingButtonClass
    } = this.props;
    return (
      <div className="btn-group w-100" role="group">
        <button
          type="button"
          className={hittingButtonClass}
          onClick={showHittingTable}
        >
          Team Hitting
        </button>
        <button
          type="button"
          className={pitchingButtonClass}
          onClick={showPitchingTable}
        >
          Team Pitching
        </button>
      </div>
    );
  }
}
