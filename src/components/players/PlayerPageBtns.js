import React, { Component } from "react";

export default class PlayerPageBtns extends Component {
  render() {
    const {
      showHitters,
      hitBtn,
      showStarters,
      startBtn,
      showRelievers,
      reliefBtn
    } = this.props;

    return (
      <div className="btn-group w-100" role="group">
        <button type="button" className={hitBtn} onClick={showHitters}>
          Hitters
        </button>
        <button type="button" className={startBtn} onClick={showStarters}>
          Starters
        </button>
        <button type="button" className={reliefBtn} onClick={showRelievers}>
          Relievers
        </button>
      </div>
    );
  }
}
