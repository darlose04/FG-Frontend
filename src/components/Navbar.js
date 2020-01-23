import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-success">
        <div className="container">
          <Link className="text-white navbar-brand" to="#">
            MLB API
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarNav" className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Players
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Teams
                </Link>
              </li>
            </ul>

            <form className="form-inline ml-auto">
              <input
                type="text"
                className="form-control mr-2"
                placeholder="Search"
              />
              <button className="btn btn-outline-light">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
