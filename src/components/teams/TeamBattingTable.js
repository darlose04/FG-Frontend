import React, { Component } from "react";

export default class TeamBattingTable extends Component {
  render() {
    let { stats } = this.props;
    console.log(stats);
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Team</th>
            <th scope="col">Games</th>
            <th scope="col">PA</th>
            <th scope="col">AB</th>
            <th scope="col">H</th>
            <th scope="col">1B</th>
            <th scope="col">2B</th>
            <th scope="col">3B</th>
            <th scope="col">HR</th>
            <th scope="col">R</th>
            <th scope="col">RBI</th>
            <th scope="col">SB</th>
            <th scope="col">BB</th>
            <th scope="col">IBB</th>
            <th scope="col">SO</th>
            <th scope="col">HBP</th>
            <th scope="col">SF</th>
            <th scope="col">SH</th>
            <th scope="col">GDP</th>
            <th scope="col">BB/K</th>
            <th scope="col">BB%</th>
            <th scope="col">K%</th>
            <th scope="col">GB/FB</th>
            <th scope="col">LD%</th>
            <th scope="col">GB%</th>
            <th scope="col">FB%</th>
            <th scope="col">HR/FB</th>
            <th scope="col">ISO</th>
            <th scope="col">BABIP</th>
            <th scope="col">AVG</th>
            <th scope="col">OBP</th>
            <th scope="col">SLG</th>
            <th scope="col">OPS</th>
            <th scope="col">wOBA</th>
            <th scope="col">wRC+</th>
            <th scope="col">BsR</th>
            <th scope="col">OFF</th>
            <th scope="col">DEF</th>
            <th scope="col">WAR</th>
          </tr>
        </thead>
        <tbody>
          {stats.map(info => (
            <tr>
              <td>{info.team}</td>
              <td>{info.games}</td>
              <td>{info.plate_appearances}</td>
              <td>{info.at_bats}</td>
              <td>{info.hits}</td>
              <td>{info.singles}</td>
              <td>{info.doubles}</td>
              <td>{info.triples}</td>
              <td>{info.home_runs}</td>
              <td>{info.runs}</td>
              <td>{info.rbi}</td>
              <td>{info.sb}</td>
              <td>{info.bb}</td>
              <td>{info.ibb}</td>
              <td>{info.so}</td>
              <td>{info.hbp}</td>
              <td>{info.sf}</td>
              <td>{info.sh}</td>
              <td>{info.gdp}</td>
              <td>{info.bb_per_k}</td>
              <td>{info.bb_perc}</td>
              <td>{info.k_perc}</td>
              <td>{info.gb_per_fb}</td>
              <td>{info.ld_perc}</td>
              <td>{info.gb_perc}</td>
              <td>{info.fb_perc}</td>
              <td>{info.hr_per_fb}</td>
              <td>{info.iso}</td>
              <td>{info.babip}</td>
              <td>{info.avg}</td>
              <td>{info.obp}</td>
              <td>{info.slg}</td>
              <td>{info.ops}</td>
              <td>{info.woba}</td>
              <td>{info.wrc_plus}</td>
              <td>{info.bsr}</td>
              <td>{info.off}</td>
              <td>{info.def}</td>
              <td>{info.war}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
