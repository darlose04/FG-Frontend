import React, { Component } from "react";

export default class PlayerStdReliefTable extends Component {
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
            <th scope="col">Team</th>
            <th scope="col">W</th>
            <th scope="col">L</th>
            <th scope="col">SV</th>
            <th scope="col">G</th>
            <th scope="col">IP</th>
            <th scope="col">H</th>
            <th scope="col">R</th>
            <th scope="col">ER</th>
            <th scope="col">HR</th>
            <th scope="col">BB</th>
            <th scope="col">SO</th>
            <th scope="col">IBB</th>
            <th scope="col">HBP</th>
            <th scope="col">WP</th>
            <th scope="col">GB</th>
            <th scope="col">FB</th>
            <th scope="col">LD</th>
            <th scope="col">Balls</th>
            <th scope="col">Strikes</th>
            <th scope="col">Pitches</th>
            <th scope="col">AVG</th>
            <th scope="col">ERA</th>
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
              <td>
                <a className="text-dark" href={`/teamselect/${info.team}`}>
                  {info.team}
                </a>
              </td>
              <td>{info.wins}</td>
              <td>{info.losses}</td>
              <td>{info.saves}</td>
              <td>{info.games}</td>
              <td>{info.ip}</td>
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
              <td>{info.avg}</td>
              <td>{info.era}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
