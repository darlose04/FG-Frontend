import React, { Component } from "react";

export default class TeamBattingTable extends Component {
  render() {
    let { stats } = this.props;
    return (
      <table
        className="table table-sm table-striped table-bordered table-hover text-center advanced"
        style={{ fontSize: "0.8rem", padding: ".2rem", whiteSpace: "nowrap" }}
      >
        <thead>
          <tr className="bg-success text-white">
            <th scope="col">Team</th>
            <th scope="col">PA</th>
            <th scope="col">BB%</th>
            <th scope="col">K%</th>
            <th scope="col">BB/K</th>
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
            <tr key={info.id}>
              <td>
                <a className="text-dark" href={`/teamselect/${info.team}`}>
                  {info.team}
                </a>
              </td>
              <td>{info.plate_appearances}</td>
              <td>{info.bb_perc}</td>
              <td>{info.k_perc}</td>
              <td>{info.bb_per_k}</td>
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
