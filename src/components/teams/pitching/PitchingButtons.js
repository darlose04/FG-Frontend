import React, { Component } from "react";

export default class PitchingButtons extends Component {
  render() {
    return (
      <div className="btn-group w-100 mb-3" role="group">
        <button type="button" className="btn btn-outline-success">
          Totals
        </button>
        <button type="button" className="btn btn-outline-success">
          Starters
        </button>
        <button type="button" className="btn btn-outline-success">
          Relievers
        </button>
      </div>
    );
  }
}
