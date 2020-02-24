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

    this.statsOne = this.statsOne.bind(this);
    this.statsTwo = this.statsTwo.bind(this);
    this.statsThree = this.statsThree.bind(this);
  }

  statsOne(e) {
    this.setState({
      statsOne: e.target.value
    });
  }
  statsTwo(e) {
    this.setState({
      statsTwo: e.target.value
    });
  }
  statsThree(e) {
    this.setState({
      statsThree: e.target.value
    });
  }

  render() {
    const { statsOne, statsTwo, statsThree } = this.state;
    const { data } = this.props;
    const objectKeys = Object.keys(data[0]);
    const keys = objectKeys.slice(3);

    let season = [];
    data.map(year => {
      return season.unshift(year.season);
    });

    let stats1 = [];
    data.map(year => {
      if (
        statsOne === "gb_perc" ||
        statsOne === "fb_perc" ||
        statsOne === "ld_perc" ||
        statsOne === "bb_perc" ||
        statsOne === "k_perc" ||
        statsOne === "hr_per_fb"
      ) {
        return stats1.unshift(Number(year[statsOne].replace("%", "")));
      }
      return stats1.unshift(year[statsOne]);
    });

    let stats2 = [];
    data.map(year => {
      if (
        statsTwo === "gb_perc" ||
        statsTwo === "fb_perc" ||
        statsTwo === "ld_perc" ||
        statsTwo === "bb_perc" ||
        statsTwo === "k_perc" ||
        statsTwo === "hr_per_fb"
      ) {
        return stats2.unshift(Number(year[statsTwo].replace("%", "")));
      }
      return stats2.unshift(year[statsTwo]);
    });

    let stats3 = [];
    data.map(year => {
      if (
        statsThree === "gb_perc" ||
        statsThree === "fb_perc" ||
        statsThree === "ld_perc" ||
        statsThree === "bb_perc" ||
        statsThree === "k_perc" ||
        statsThree === "hr_per_fb"
      ) {
        return stats3.unshift(Number(year[statsThree].replace("%", "")));
      }
      return stats3.unshift(year[statsThree]);
    });

    const statistics = {
      labels: season,
      datasets: [
        {
          label: statsOne
            .replace(/_/g, " ")
            .replace("perc", "%")
            .replace("per", "/")
            .toUpperCase(),
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#eb2326",
          borderColor: "#eb2326",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#eb2326",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#eb2326",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: stats1
        },
        {
          label: statsTwo
            .replace(/_/g, " ")
            .replace("perc", "%")
            .replace("per", "/")
            .toUpperCase(),
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
          data: stats2
        },
        {
          label: statsThree
            .replace(/_/g, " ")
            .replace("perc", "%")
            .replace("per", "/")
            .toUpperCase(),
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#23eb24",
          borderColor: "#23eb24",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#23eb24",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#23eb24",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: stats3
        }
      ]
    };

    return (
      <div className="border p-2 mb-3 border-dark">
        <div className="mb-3">
          <h5>Select Hitting Stats to Compare</h5>
          <select
            className="mr-2"
            name=""
            id="statsOne"
            onChange={this.statsOne}
          >
            <option value="">Select Statistics</option>
            <option value="">Remove Stat</option>
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
          <select
            className="mr-2"
            name=""
            id="statsTwo"
            onChange={this.statsTwo}
          >
            <option value="">Select Statistics</option>
            <option value="">Remove Stat</option>
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
          <select name="" id="statsThree" onChange={this.statsThree}>
            <option value="">Select Statistics</option>
            <option value="">Remove Stat</option>
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
            <h4 className="text-center">Stats Comparison</h4>
            <Line data={statistics} />
          </div>
        </div>
      </div>
    );
  }
}
