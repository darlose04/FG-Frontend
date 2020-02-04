import React, { Component } from "react";

export default class TeamSelect extends Component {
  render() {
    const logos = this.props.logos.logos;

    return (
      <div className="container mb-5">
        {logos.map(logo => {
          let divisionKey = Object.keys(logo)[0];
          // console.log(logo[divisionKey]);

          return (
            <div className="row-hl d-flex justify-content-between mt-4">
              {logo[divisionKey].map(team => (
                <div className="p-2 item-hl" key={team.id}>
                  <div className="card" style={{ width: "10rem" }}>
                    <img
                      src={team.src}
                      className="card-img-top p-2"
                      alt={team.teamName}
                    ></img>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    );
  }
}
