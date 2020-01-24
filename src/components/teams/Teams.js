import React, { Component } from "react";
import { logos } from "../../logos";

export default class Teams extends Component {
  render() {
    return (
      <div className="mt-5">
        <div
          className="btn-group w-100"
          role="group"
          aria-label="Basic example"
        >
          <button type="button" className="btn btn-outline-success">
            Team Hitting
          </button>
          <button type="button" className="btn btn-outline-success">
            Team Pitching
          </button>
        </div>
      </div>
    );
  }
}
