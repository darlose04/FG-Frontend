import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/TeamSelect.css";

export default class TeamSelect extends Component {
  render() {
    const { logos } = this.props.logos;

    return (
      <div className="container mt-4">
        <div className="row">
          {logos.map(team => (
            <div className="col-2 p-2">
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
          ))}
        </div>
        {/* {logos.map(team => (
          <div className="row-hl d-flex justify-content-between mt-4">
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
          </div>
        ))} */}
      </div>
    );
  }
}
