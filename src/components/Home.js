import React, { Component } from "react";
import "../styles/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="homePage mt-5">
        <div className="row mb-4">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Statistics</h5>
                <p className="card-text">
                  Hitting and pitching statistics are organized between standard
                  and advanced stats. Charts can also be viewed to compare data
                  between seasons, teams, or league averages.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Search for Individual Players</h5>
                <p className="card-text">
                  Search for players in the above search bar or on the Player
                  Search page.
                </p>
                <a href="/players" className="btn btn-success">
                  Player Search
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Return Player Stats by Season</h5>
                <p className="card-text">
                  Instead of searching for a specific player, return hitting and
                  pitching statistics for players according to season.
                </p>
                <a href="/players" className="btn btn-success">
                  Player Seasons
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Team Selection</h5>
                <p className="card-text">
                  View the statistics of a specific team. Yearly team stats can
                  be viewed, as well as roster statistics for each season shown.
                </p>
                <a href="/teamselect" className="btn btn-success">
                  Team Select
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Team Statistics</h5>
                <p className="card-text">
                  Compare team statistics side by side. Select a different
                  season in order to view statistics between teams during
                  selected season.
                </p>
                <a href="/teamstats" className="btn btn-success">
                  Team Statistics
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Scores & Standings</h5>
                <p className="card-text">
                  View daily scores or divisional standings. <br />
                  (Not Implemented Yet)
                </p>
                <a href="#" className="btn btn-success">
                  Scores & Standings
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Glossary</h5>
                <p className="card-text">
                  Any unfamiliar statistics? The Glossary contains definitions
                  for all statistics used.
                </p>
                <a href="/glossary" className="btn btn-success">
                  Glossary
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
