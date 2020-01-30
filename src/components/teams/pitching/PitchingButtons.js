import React, { Component } from "react";

export default class PitchingButtons extends Component {
  render() {
    let { totalsClass, startersClass, relieversClass } = this.props;
    return (
      <div className="btn-group w-100 mb-3" role="group">
        <button type="button" className={totalsClass} onClick={}>
          Totals
        </button>
        <button type="button" className={startersClass} onClick={}>
          Starters
        </button>
        <button type="button" className={relieversClass} onClick={}>
          Relievers
        </button>
      </div>
    );
  }
}
