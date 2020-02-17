import React, { Component } from "react";

export default class BtnChoice extends Component {
  render() {
    return (
      <div className="btn-group w-100" role="group">
        <button type="button" className="btn btn-outline-success">
          Search for a Specific Player
        </button>
        <button type="button" className="btn btn-outline-success">
          Return Player Stats by Season
        </button>
      </div>
    );
  }
}
