import React, { Component } from "react";

export default class TeamPageBtns extends Component {
  render() {
    const {
      hittingBtnClass,
      pitchingBtnClass,
      showHitting,
      showPitching,
      showHittingChart,
      showPitchingChart,
      hcBtnClass,
      pcBtnClass
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
        <div className="btn-group w-100 mb-1" role="group">
          <button
            type="button"
            className={hcBtnClass}
            onClick={showHittingChart}
          >
            Hitting Charts
          </button>
          <button
            type="button"
            className={pcBtnClass}
            onClick={showPitchingChart}
          >
            Pitching Charts
          </button>
        </div>
      </div>
    );
  }
}
