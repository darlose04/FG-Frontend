import React, { Component } from "react";

export default class TeamPageBtns extends Component {
  render() {
    return (
      <div className="btn-group w-100 mb-3" role="group">
        <button type="button" className="btn btn-outline-success">
          Hitting
        </button>
        <button type="button" className="btn btn-outline-success">
          Pitching
        </button>
      </div>
    );
  }
}
