import React, { Component } from "react";

export default class TeamAdvancedPitchingTable extends Component {
  render() {
    let { stats } = this.props;
    return (
      <table
        className="table table-sm table-striped table-bordered table-hover text-center standard"
        style={{ fontSize: "0.8rem", padding: ".2rem", whiteSpace: "nowrap" }}
      >
        <thead>
          <tr className="bg-success text-white">
            <th scope="col">Team</th>
            <th scope="col">Wins</th>
            <th scope="col">Losses</th>
            <th scope="col">Saves</th>
            <th scope="col">Games</th>
            <th scope="col">GS</th>
            <th scope="col">IP</th>
            <th scope="col">Start IP</th>
            <th scope="col">Relief IP</th>
            <th scope="col">H</th>
            <th scope="col">Runs</th>
            <th scope="col">ER</th>
            <th scope="col">HR</th>
            <th scope="col">BB</th>
            <th scope="col">IBB</th>
            <th scope="col">HBP</th>
            <th scope="col">WP</th>
            <th scope="col">GB</th>
            <th scope="col">FB</th>
            <th scope="col">LD</th>
            <th scope="col">Balls</th>
            <th scope="col">Strikes</th>
            <th scope="col">Pitches</th>
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
              <td>{info.team}</td>
              <td>{info.wins}</td>
              <td>{info.losses}</td>
              <td>{info.saves}</td>
              <td>{info.games}</td>
              <td>{info.gs}</td>
              <td>{info.ip}</td>
              <td>{info.startip}</td>
              <td>{info.reliefip}</td>
              <td>{info.hits}</td>
              <td>{info.runs}</td>
              <td>{info.er}</td>
              <td>{info.hr}</td>
              <td>{info.bb}</td>
              <td>{info.so}</td>
              <td>{info.ibb}</td>
              <td>{info.hbp}</td>
              <td>{info.wp}</td>
              <td>{info.gb}</td>
              <td>{info.fb}</td>
              <td>{info.ld}</td>
              <td>{info.balls}</td>
              <td>{info.strikes}</td>
              <td>{info.pitches}</td>
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
