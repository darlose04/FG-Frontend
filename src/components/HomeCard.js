import React, { Component } from "react";
import { MDBCardTitle } from "mdbreact";

export default class HomeCard extends Component {
  render() {
    const { title, msg, link, button } = this.props;
    return (
      <div className="col-6 ">
        <div className="card m-1" style={{ height: "175px" }}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{msg}</p>
            {link === "" ? (
              <div></div>
            ) : (
              <a href={link} className="btn btn-success">
                {button}
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}
