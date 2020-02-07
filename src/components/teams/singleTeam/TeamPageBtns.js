import React, { Component } from "react";

export default class TeamPageBtns extends Component {
  render() {
    const { hittingBtnClass, pitchingBtnClass } = this.props;

    return (
      <div className="btn-group w-100 mb-3" role="group">
        <button type="button" className={hittingBtnClass}>
          Hitting
        </button>
        <button type="button" className={pitchingBtnClass}>
          Pitching
        </button>
      </div>
    );
  }
}
