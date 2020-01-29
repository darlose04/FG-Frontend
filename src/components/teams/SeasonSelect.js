import React, { Component } from "react";

export default class SeasonSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: this.props.season
    };
    this.seasonChange = this.seasonChange.bind(this);
    this.seasonSubmit = this.seasonSubmit.bind(this);
  }

  seasonChange(e) {
    this.setState({
      season: e.target.value
    });
  }

  seasonSubmit(e) {
    e.preventDefault();
    this.props.changeSeason(this.state.season);
  }

  render() {
    let {
      season,
      tableBattingShown,
      stdBattingTable,
      advBattingTable,
      tablePitchingShown,
      stdPitchingTable,
      advPitchingTable,
      stdButtonClass,
      advButtonClass
    } = this.props;
    return (
      <div>
        <form className="seasonSelectForm" onSubmit={this.seasonSubmit}>
          <div className="form-row align-items-center">
            <div className="col-6 my-3">
              <label className="mr-sm-2 sr-only" htmlFor="seasonSelectHitting">
                Preference
              </label>
              <select
                className="custom-select mr-sm-2 text-center"
                id="seasonSelectHitting"
                onChange={this.seasonChange}
              >
                <option defaultValue={season}>{season}</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
              </select>
            </div>
            <div className="col-6 my-1">
              <button type="submit" className="btn btn-success w-100">
                Submit
              </button>
            </div>
          </div>
        </form>

        {tableBattingShown ? (
          <div
            className="btn-group w-100 mb-3"
            role="group"
            aria-label="Basic example"
          >
            <button
              onClick={stdBattingTable}
              type="button"
              className={stdButtonClass}
            >
              Standard
            </button>
            <button
              onClick={advBattingTable}
              type="button"
              className={advButtonClass}
            >
              Advanced
            </button>
          </div>
        ) : (
          <div
            className="btn-group w-100 mb-3"
            role="group"
            aria-label="Basic example"
          >
            <button
              onClick={stdPitchingTable}
              type="button"
              className={stdButtonClass}
            >
              Standard
            </button>
            <button
              onClick={advPitchingTable}
              type="button"
              className={advButtonClass}
            >
              Advanced
            </button>
          </div>
        )}
      </div>
    );
  }
}
