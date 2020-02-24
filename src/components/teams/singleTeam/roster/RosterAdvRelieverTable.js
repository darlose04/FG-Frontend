import React, { Component } from "react";

export default class RosterAdvRelieverTable extends Component {
  render() {
    let {
      stats,
      showStd,
      showAdv,
      stdClass,
      advClass,
      clickStyle
    } = this.props;
    return (
      <table
        className="table table-sm table-striped table-bordered table-hover text-center standard"
        style={{ fontSize: "0.8rem", padding: ".2rem", whiteSpace: "nowrap" }}
      >
        <thead>
          <tr>
            <th className={stdClass} onClick={showStd} style={clickStyle}>
              Standard
            </th>
            <th className={advClass} onClick={showAdv} style={clickStyle}>
              Advanced
            </th>
          </tr>
        </thead>
        <thead>
          <tr className="bg-success text-white">
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">W</th>
            <th scope="col">L</th>
            <th scope="col">SV</th>
            <th scope="col">G</th>
            <th scope="col">IP</th>
            <th scope="col">K/9</th>
            <th scope="col">BB/9</th>
            <th scope="col">HR/9</th>
            <th scope="col">AVG</th>
            <th scope="col">BABIP</th>
            <th scope="col">LOB%</th>
            <th scope="col">GB%</th>
            <th scope="col">LD%</th>
            <th scope="col">FB%</th>
            <th scope="col">HR/FB</th>
            <th scope="col">ERA</th>
            <th scope="col">WHIP</th>
            <th scope="col">FIP</th>
            <th scope="col">xFIP</th>
            <th scope="col">WAR</th>
          </tr>
        </thead>
        <tbody>
          {stats.map(info => (
            <tr key={info.id}>
              <td>
                <a className="text-dark" href={`/players/${info.name}`}>
                  {info.name}
                </a>
              </td>
              <td>{info.age}</td>
              <td>{info.wins}</td>
              <td>{info.losses}</td>
              <td>{info.saves}</td>
              <td>{info.games}</td>
              <td>{info.ip}</td>
              <td>{info.k_per_9}</td>
              <td>{info.bb_per_9}</td>
              <td>{info.hr_per_9}</td>
              <td>{info.avg}</td>
              <td>{info.babip}</td>
              <td>{info.lob_perc}</td>
              <td>{info.gb_perc}</td>
              <td>{info.ld_perc}</td>
              <td>{info.fb_perc}</td>
              <td>{info.hr_per_fb}</td>
              <td>{info.era}</td>
              <td>{info.whip}</td>
              <td>{info.fip}</td>
              <td>{info.xfip}</td>
              <td>{info.war}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
