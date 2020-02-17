import React, { Component } from "react";

export default class PlayerPageBtns extends Component {
  render() {
    const {
      showHitters,
      hitBtn,
      showStarters,
      startBtn,
      showRelievers,
      reliefBtn,
      season
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
                // onChange={this.seasonChange}
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
      </div>
    );
  }
}
