import React, { Component } from "react";
import Chart from "chart.js";

export default class TeamHittingChart extends Component {
  render() {
    const { data } = this.props;
    console.log(data);

    return (
      <div>
        <h1>This component will display stats in chart form</h1>
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
    );
  }
}
