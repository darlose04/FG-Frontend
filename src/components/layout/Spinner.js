import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <div
            className="mt-5 spinner-border text-success"
            role="status"
            style={{ width: "5rem", height: "5rem" }}
          ></div>
        </div>
        <div className="mt-3 text-center">Fetching data from API...</div>
      </div>
    );
  }
}
