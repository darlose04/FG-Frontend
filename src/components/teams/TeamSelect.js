import React, { Component } from "react";

export default class TeamSelect extends Component {
  render() {
    const logos = this.props.logos.logos;

    const teamDisplay = () => {
      for (let i = 0; i < logos.length; i++) {
        console.log(Object.keys(logos[i])[0]);
        console.log(Object.values(logos[i])[0][0].teamName);
      }
    };
    teamDisplay();
    return (
      <div className="container mb-5">
        {/* {logos.map(division => (
        <div className="row-hl d-flex justify-content-between mt-4">
        <div className="p-2 item-hl">
                <div className="card" style={{ width: "10rem" }}>
                  <img
                    src={team.src}
                    className="card-img-top p-2"
                    alt={team.teamName}
                  ></img>
                </div>
              </div>
        </div>
      ))} */}

        {/* <div className="row-hl d-flex justify-content-between mt-4">
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
        </div>*/}
      </div>
    );
  }
}
