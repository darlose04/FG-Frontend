import React, { Component } from "react";
import { logos } from "../../logos";
import axios from "axios";

export default class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: 2019
    };
  }

  async componentDidMount() {
    let teamBatting = await axios.get(
      `https://www.fgbaseballapi.com/api/teambatting/${this.state.season}`
    );

    console.log(teamBatting.data);
  }

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
        <form>
          <div className="form-row align-items-center">
            <div className="col-4 my-3">
              <label
                className="mr-sm-2 sr-only"
                htmlFor="inlineFormCustomSelect"
              >
                Preference
              </label>
              <select
                className="custom-select mr-sm-2"
                id="inlineFormCustomSelect"
              >
                <option defaultValue>Choose Season</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-2 my-1">
              <button type="submit" className="btn btn-success w-100">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
