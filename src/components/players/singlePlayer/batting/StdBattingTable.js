import React, { Component } from "react";

export default class StdBattingTable extends Component {
  render() {
    const {
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
            <th scope="col">Team</th>
            <th scope="col">Age</th>
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
            <th scope="col">AVG</th>
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
              <td>{info.age}</td>
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
              <td>{info.avg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
