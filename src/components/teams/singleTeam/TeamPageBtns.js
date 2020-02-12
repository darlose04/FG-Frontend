import React, { Component } from "react";

export default class TeamPageBtns extends Component {
  render() {
    const {
      hittingBtnClass,
      pitchingBtnClass,
      showHitting,
      showPitching,
      showChart
    } = this.props;

    return (
      <div className="mb-3">
        <div className="btn-group w-100 mb-1" role="group">
          <button
            type="button"
            className={hittingBtnClass}
            onClick={showHitting}
          >
            Hitting
          </button>
          <button
            type="button"
            className={pitchingBtnClass}
            onClick={showPitching}
          >
            Pitching
          </button>
        </div>
        <button
          type="button"
          className="w-100 btn btn-success"
          onClick={showChart}
        >
          Display Charts
        </button>
      </div>
    );
  }
}
