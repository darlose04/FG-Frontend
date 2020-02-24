import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export default class TeamHittingChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statsOne: "",
      statsTwo: "",
      statsThree: ""
    };
  }

  render() {
    const { data } = this.props;
    const keys = Object.keys(data[0]);
    console.log(keys);

    let season = [];
    data.map(year => {
      return season.unshift(year.season);
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

    return (
      <div>
        <div className="mb-3">
          <h5>Select Stats to Compare</h5>
          <select className="mr-2" name="" id="statsOne">
            {keys.map(key => (
              <option key={key} value={key}>
                {key
                  .replace(/_/g, " ")
                  .replace("perc", "%")
                  .replace("per", "/")
                  .toUpperCase()}
              </option>
            ))}
          </select>
          <select className="mr-2" name="" id="statsTwo">
            {keys.map(key => (
              <option key={key} value={key}>
                {key
                  .replace(/_/g, " ")
                  .replace("perc", "%")
                  .replace("per", "/")
                  .toUpperCase()}
              </option>
            ))}
          </select>
          <select name="" id="statsThree">
            {keys.map(key => (
              <option key={key} value={key}>
                {key
                  .replace(/_/g, " ")
                  .replace("perc", "%")
                  .replace("per", "/")
                  .toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3 row">
          <div className="mb-3 col">
            <h4 className="text-center">Hit Type</h4>
            <Line data={hits} />
          </div>
        </div>
      </div>
    );
  }
}
