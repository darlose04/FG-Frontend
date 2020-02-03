import React, { Component } from "react";
import sortedLogos from "../../logos";

export default class TeamSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamInfo: sortedLogos
    };
  }

  render() {
    console.log(this.state.teamInfo);
    const logos = this.state.teamInfo.sortedLogos;
    return (
      <div className="container">
        <h2 className="mt-4">American League East</h2>
        <div className="row-hl d-flex justify-content-between">
          {logos.map(team =>
            team.division === "AL East" ? (
              <div className="p-2 item-hl">
                <div className="card" style={{ width: "10rem" }}>
                  <img
                    src={team.src}
                    className="card-img-top mt-1"
                    alt={team.teamName}
                  ></img>
                  <div className="card-body pb-1">
                    <h4 className="card-title text-center">{team.teamName}</h4>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )
          )}
        </div>
        <h2 className="mt-4">American League Central</h2>
        <div className="row-hl d-flex justify-content-between">
          {logos.map(team =>
            team.division === "AL Central" ? (
              <div className="p-2 item-hl">
                <div className="card" style={{ width: "10rem" }}>
                  <img
                    src={team.src}
                    className="card-img-top mt-1"
                    alt={team.teamName}
                  ></img>
                  <div className="card-body pb-1">
                    <h4 className="card-title text-center">{team.teamName}</h4>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )
          )}
        </div>
        <h2 className="mt-4">American League West</h2>
        <div className="row-hl d-flex justify-content-between">
          {logos.map(team =>
            team.division === "AL West" ? (
              <div className="p-2 item-hl">
                <div className="card" style={{ width: "10rem" }}>
                  <img
                    src={team.src}
                    className="card-img-top mt-1"
                    alt={team.teamName}
                  ></img>
                  <div className="card-body pb-1">
                    <h4 className="card-title text-center">{team.teamName}</h4>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )
          )}
        </div>
        <h2 className="mt-4">National League East</h2>
        <div className="row-hl d-flex justify-content-between">
          {logos.map(team =>
            team.division === "NL East" ? (
              <div className="p-2 item-hl">
                <div className="card" style={{ width: "10rem" }}>
                  <img
                    src={team.src}
                    className="card-img-top mt-1"
                    alt={team.teamName}
                  ></img>
                  <div className="card-body pb-1">
                    <h4 className="card-title text-center">{team.teamName}</h4>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )
          )}
        </div>
        <h2 className="mt-4">National League Central</h2>
        <div className="row-hl d-flex justify-content-between">
          {logos.map(team =>
            team.division === "NL Central" ? (
              <div className="p-2 item-hl">
                <div className="card" style={{ width: "10rem" }}>
                  <img
                    src={team.src}
                    className="card-img-top mt-1"
                    alt={team.teamName}
                  ></img>
                  <div className="card-body pb-1">
                    <h4 className="card-title text-center">{team.teamName}</h4>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )
          )}
        </div>
        <h2 className="mt-4">National League West</h2>
        <div className="row-hl d-flex justify-content-between">
          {logos.map(team =>
            team.division === "NL West" ? (
              <div className="p-2 item-hl">
                <div className="card" style={{ width: "10rem" }}>
                  <img
                    src={team.src}
                    className="card-img-top mt-1"
                    alt={team.teamName}
                  ></img>
                  <div className="card-body pb-1">
                    <h4 className="card-title text-center">{team.teamName}</h4>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )
          )}
        </div>
      </div>
    );
  }
}
