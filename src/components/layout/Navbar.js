import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

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
                <Link className="text-white nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="text-white nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="text-white nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Players
                </Link>
                <div className="dropdown-menu">
                  <Link to="#" className="dropdown-item">
                    Hitters
                  </Link>
                  <Link to="#" className="dropdown-item">
                    Starters
                  </Link>
                  <Link to="#" className="dropdown-item">
                    Relievers
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="text-white nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Teams
                </Link>
                <div className="dropdown-menu">
                  <Link to="#" className="dropdown-item">
                    Hitting
                  </Link>
                  <Link to="#" className="dropdown-item">
                    Pitching
                  </Link>
                  <Link to="#" className="dropdown-item">
                    Starting
                  </Link>
                  <Link to="#" className="dropdown-item">
                    Relievers
                  </Link>
                </div>
              </li>
            </ul>

            <form className="form-inline ml-auto">
              <input
                type="text"
                className="form-control mr-2"
                placeholder="Search Players"
              />
              <button className="btn btn-outline-light">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
