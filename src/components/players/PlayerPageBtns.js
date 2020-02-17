import React, { Component } from "react";

export default class PlayerPageBtns extends Component {
  render() {
    return (
      <div className="btn-group w-100" role="group">
        <button type="button" className="btn btn-outline-success">
          Hitters
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
