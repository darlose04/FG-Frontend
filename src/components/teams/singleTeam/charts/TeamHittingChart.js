import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export default class TeamHittingChart extends Component {
  render() {
    const { data } = this.props;

    let homers = [];
    data.map(year => {
      homers.unshift(year.home_runs);
    });

    const info = {
      labels: [
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019"
      ],
      datasets: [
        // {
        //   label: "Hits",
        //   fill: false,
        //   lineTension: 0.1,
        //   backgroundColor: "rgba(0,64,255,1)",
        //   borderColor: "rgba(0,64,255,1)",
        //   borderCapStyle: "butt",
        //   borderDash: [],
        //   borderDashOffset: 0.0,
        //   borderJoinStyle: "miter",
        //   pointBorderColor: "rgba(0,64,255,1)",
        //   pointBackgroundColor: "#fff",
        //   pointBorderWidth: 1,
        //   pointHoverRadius: 5,
        //   pointHoverBackgroundColor: "rgba(0,64,255,1)",
        //   pointHoverBorderColor: "rgba(220,220,220,1)",
        //   pointHoverBorderWidth: 2,
        //   pointRadius: 1,
        //   pointHitRadius: 10,
        //   data: chartData.map(year => {
        //     return year.hits;
        //   })
        // },
        {
          label: "Home Runs",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: homers
        }
      ]
    };

    return (
      <div className="mb-3">
        <Line data={info} />
      </div>
    );
  }
}
