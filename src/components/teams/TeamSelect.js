import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/TeamSelect.css";

export default class TeamSelect extends Component {
  render() {
    const { logos } = this.props.logos;
    console.log(logos);
    return (
      <div className="container mb-5">
        {logos.map(team => (
          <div className="row-hl d-flex justify-content-between mt-4">
            <div className="p-2 item-hl" key={team.id}>
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
    );
  }
}
