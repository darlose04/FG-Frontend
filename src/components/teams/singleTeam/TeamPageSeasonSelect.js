import React, { Component } from "react";

export default class TeamPageSeasonSelect extends Component {
  render() {
    const seasonList = [
      2002,
      2003,
      2004,
      2005,
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
      2013,
      2014,
      2015,
      2016,
      2017,
      2018,
      2019
    ];

    const { showSeason, season } = this.props;

    return (
      <div
        className="btn-toolbar my-2"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group w-100" role="group" aria-label="First group">
          {seasonList.map(year => (
            <button
              type="button"
              value={year}
              className={
                season == year ? "btn btn-success" : "btn btn-outline-success"
              }
              onClick={showSeason}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
