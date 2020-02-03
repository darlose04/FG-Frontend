import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavSearch from "./NavSearch";
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
              <li className="nav-item">
                <Link to="/players" className="text-white nav-link">
                  Players
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/teams" className="text-white nav-link">
                  Teams
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/teamselect" className="text-white nav-link">
                  Team Select
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/glossary" className="text-white nav-link">
                  Glossary
                </Link>
              </li>
            </ul>

            <NavSearch />
          </div>
        </div>
      </nav>
    );
  }
}
