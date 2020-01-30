import React, { Component } from "react";

export default class PitchingButtons extends Component {
  render() {
    let {
      totalsClass,
      startersClass,
      relieversClass,
      showTotals,
      showStarting,
      showRelieving
    } = this.props;
    return (
      <div className="btn-group w-100 mb-3" role="group">
        <button type="button" className={totalsClass} onClick={showTotals}>
          Totals
        </button>
        <button type="button" className={startersClass} onClick={showStarting}>
          Starters
        </button>
        <button
          type="button"
          className={relieversClass}
          onClick={showRelieving}
        >
          Relievers
        </button>
      </div>
    );
  }
}
