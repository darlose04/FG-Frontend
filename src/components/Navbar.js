import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="flex items-center justify-between flex-wrap bg-green-600 p-4">
          <span className="font-bold text-2xl">Fangraphs API</span>
        </div>
      </nav>
    );
  }
}
