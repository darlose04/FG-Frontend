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
      <div className="container mb-5">
        <div className="row-hl d-flex justify-content-between mt-4">
          {logos.map(team =>
            team.division === "AL East" ? (
              <div className="p-2 item-hl">
                <div className="card" style={{ width: "10rem" }}>
                  <img
                    src={team.src}
                    className="card-img-top p-2"
                    alt={team.teamName}
                  ></img>
                </div>
              </div>
            ) : (
              <div></div>
            )
          )}
        </div>
        <div className="row-hl d-flex justify-content-between">
          {logos.map(team =>
            team.division === "AL Central" ? (
              <div className="p-2 item-hl">
                <div className="card" style={{ width: "10rem" }}>
                  <img
                    src={team.src}
                    className="card-img-top p-2"
                    alt={team.teamName}
                  ></img>
                </div>
              </div>
            ) : (
              <div></div>
            )
          )}
        </div>
        <div className="row-hl d-flex justify-content-between">
          {logos.map(team =>
            team.division === "AL West" ? (
              <div className="p-2 item-hl">
                <div className="card" style={{ width: "10rem" }}>
                  <img
                    src={team.src}
                    className="card-img-top p-2"
                    alt={team.teamName}
                  ></img>
                </div>
              </div>
            ) : (
              <div></div>
            )
          )}
        </div>
        <div className="row-hl d-flex justify-content-between">
          {logos.map(team =>
            team.division === "NL East" ? (
              <div className="p-2 item-hl">
                <div className="card" style={{ width: "10rem" }}>
                  <img
                    src={team.src}
                    className="card-img-top p-2"
                    alt={team.teamName}
                  ></img>
                </div>
              </div>
            ) : (
              <div></div>
            )
          )}
        </div>
        <div className="row-hl d-flex justify-content-between">
          {logos.map(team =>
            team.division === "NL Central" ? (
              <div className="p-2 item-hl">
                <div className="card" style={{ width: "10rem" }}>
                  <img
                    src={team.src}
                    className="card-img-top p-2"
                    alt={team.teamName}
                  ></img>
                </div>
              </div>
            ) : (
              <div></div>
            )
          )}
        </div>
        <div className="row-hl d-flex justify-content-between">
          {logos.map(team =>
            team.division === "NL West" ? (
              <div className="p-2 item-hl">
                <div className="card" style={{ width: "10rem" }}>
                  <img
                    src={team.src}
                    className="card-img-top p-2"
                    alt={team.teamName}
                  ></img>
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
