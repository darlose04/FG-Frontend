import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/TeamSelect.css";

export default class TeamSelect extends Component {
  render() {
    const { logos } = this.props.logos;
    let divisions = [];
    const alEast = logos.filter(team => team.division === "AL East");
    const alCentral = logos.filter(team => team.division === "AL Central");
    const alWest = logos.filter(team => team.division === "AL West");
    const nlEast = logos.filter(team => team.division === "NL East");
    const nlCentral = logos.filter(team => team.division === "NL Central");
    const nlWest = logos.filter(team => team.division === "NL West");
    divisions.push(alEast, alCentral, alWest, nlEast, nlCentral, nlWest);

    return (
      <div className="container my-2 ">
        {divisions.map(division => (
          <div className="row-hl d-flex justify-content-between mt-4">
            {division.map(team => (
              <div className="p-2 item-hl row" key={team.id}>
                <div className="col-sm">
                  <Link to={`/teamselect/${team.teamName}`}>
                    <div className="card teamImg">
                      <img
                        src={team.src}
                        alt={team.teamName}
                        className="card-img-top p-2"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}
