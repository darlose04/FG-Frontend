import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export default class TeamHittingChart extends Component {
  render() {
    const { data } = this.props;

    let season = [];
    data.map(year => {
      return season.unshift(year.season);
    });

    let singles = [];
    data.map(year => {
      return singles.unshift(year.singles);
    });

    let doubles = [];
    data.map(year => {
      return doubles.unshift(year.doubles);
    });

    let triples = [];
    data.map(year => {
      return triples.unshift(year.triples);
    });

    let homers = [];
    data.map(year => {
      return homers.unshift(year.home_runs);
    });

    const hits = {
      labels: season,
      datasets: [
        // {
        //   label: "Singles",
        //   fill: false,
        //   lineTension: 0.1,
        //   backgroundColor: "#0040ff",
        //   borderColor: "#0040ff",
        //   borderCapStyle: "butt",
        //   borderDash: [],
        //   borderDashOffset: 0.0,
        //   borderJoinStyle: "miter",
        //   pointBorderColor: "#0040ff",
        //   pointBackgroundColor: "#fff",
        //   pointBorderWidth: 1,
        //   pointHoverRadius: 5,
        //   pointHoverBackgroundColor: "#0040ff",
        //   pointHoverBorderColor: "rgba(220,220,220,1)",
        //   pointHoverBorderWidth: 2,
        //   pointRadius: 1,
        //   pointHitRadius: 10,
        //   data: singles
        // },
        {
          label: "Doubles",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#883341",
          borderColor: "#883341",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#883341",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#883341",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: doubles
        },
        {
          label: "Triples",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#28292e",
          borderColor: "#28292e",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#28292e",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#28292e",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: triples
        },
        {
          label: "Home Runs",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#42aa75",
          borderColor: "#42aa75",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#42aa75",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#42aa75",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: homers
        }
      ]
    };

    let runs = [];
    data.map(year => {
      return runs.unshift(year.runs);
    });

    let rbi = [];
    data.map(year => {
      return rbi.unshift(year.rbi);
    });

    const scoring = {
      labels: season,
      datasets: [
        {
          label: "Runs",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#42aa75",
          borderColor: "#42aa75",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#42aa75",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#42aa75",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: runs
        },
        {
          label: "RBI",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#429daa",
          borderColor: "#429daa",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#429daa",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#429daa",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: rbi
        }
      ]
    };

    return (
      <div className="mb-3 row">
        <div className="mb-3 col">
          <h4 className="text-center">Hit Type</h4>
          <Line data={hits} />
        </div>
        <div className="mb-3 col">
          <h4 className="text-center">Scoring</h4>
          <Line data={scoring} />
        </div>
      </div>
    );
  }
}
