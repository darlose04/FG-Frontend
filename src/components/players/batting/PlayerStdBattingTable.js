import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";

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

    // const data = {
    //   columns: [
    //     {
    //       label: "Name",
    //       field: "name"
    //     },
    //     {
    //       label: "Team",
    //       field: "team"
    //     },
    //     {
    //       label: "Games",
    //       field: "games"
    //     },
    //     {
    //       label: "PA",
    //       field: "pa"
    //     },
    //     {
    //       label: "AB",
    //       field: "ab"
    //     },
    //     {
    //       label: "H",
    //       field: "h"
    //     },
    //     {
    //       label: "1B",
    //       field: "single"
    //     },
    //     {
    //       label: "2B",
    //       field: "double"
    //     },
    //     {
    //       label: "3B",
    //       field: "triple"
    //     },
    //     {
    //       label: "HR",
    //       field: "hr"
    //     },
    //     {
    //       label: "R",
    //       field: "r"
    //     },
    //     {
    //       label: "RBI",
    //       field: "rbi"
    //     },
    //     {
    //       label: "SB",
    //       field: "sb"
    //     },
    //     {
    //       label: "BB",
    //       field: "bb"
    //     },
    //     {
    //       label: "IBB",
    //       field: "ibb"
    //     },
    //     {
    //       label: "SO",
    //       field: "so"
    //     },
    //     {
    //       label: "HBP",
    //       field: "hbp"
    //     },
    //     {
    //       label: "SF",
    //       field: "sf"
    //     },
    //     {
    //       label: "SH",
    //       field: "sh"
    //     },
    //     {
    //       label: "GDP",
    //       field: "gdp"
    //     },
    //     {
    //       label: "AVG",
    //       field: "avg"
    //     },
    //     {
    //       label: "WAR",
    //       field: "war",
    //       sort: "desc"
    //     }
    //   ],
    //   rows: stats.map(info => ({
    //     name: (
    //       <a className="text-dark" href={`/players/${info.name}`}>
    //         {info.name}
    //       </a>
    //     ),
    //     team: info.team,
    //     games: info.games,
    //     pa: info.plate_appearances,
    //     ab: info.at_bats,
    //     h: info.hits,
    //     single: info.singles,
    //     double: info.doubles,
    //     triple: info.triples,
    //     hr: info.home_runs,
    //     r: info.runs,
    //     rbi: info.rbi,
    //     sb: info.sb,
    //     bb: info.bb,
    //     ibb: info.ibb,
    //     so: info.so,
    //     hbp: info.hbp,
    //     sf: info.sf,
    //     sh: info.sh,
    //     gdp: info.gdp,
    //     avg: info.avg,
    //     war: info.war
    //   }))
    // };

    return (
      // <MDBDataTable
      //   className="text-nowrap"
      //   style={{ fontSize: ".8rem" }}
      //   autoWidth
      //   order={[("war", "desc")]}
      //   striped
      //   bordered
      //   hover
      //   searching={false}
      //   data={data}
      // />

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
                <a className="text-dark" href={`/players/${info.name}`}>
                  {info.name}
                </a>
              </td>
              <td>
                <a className="text-dark" href={`/teamselect/${info.team}`}>
                  {info.team}
                </a>
              </td>
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
