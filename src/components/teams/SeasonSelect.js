import React, { Component } from "react";

export default class SeasonSelect extends Component {
  render() {
    return (
      <form>
        <div className="form-row align-items-center">
          <div className="col-4 my-3">
            <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">
              Preference
            </label>
            <select
              className="custom-select mr-sm-2"
              id="inlineFormCustomSelect"
            >
              <option defaultValue>Choose Season</option>
              <option value="2019">2019</option>
              <option value="2019">2018</option>
              <option value="2019">2017</option>
              <option value="2019">2016</option>
              <option value="2019">2015</option>
              <option value="2019">2014</option>
              <option value="2019">2013</option>
              <option value="2019">2012</option>
              <option value="2019">2011</option>
              <option value="2019">2010</option>
              <option value="2019">2009</option>
              <option value="2019">2008</option>
              <option value="2019">2007</option>
              <option value="2019">2006</option>
              <option value="2019">2005</option>
              <option value="2019">2004</option>
              <option value="2019">2003</option>
              <option value="2019">2002</option>
            </select>
          </div>
          <div className="col-2 my-1">
            <button type="submit" className="btn btn-success w-100">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}
