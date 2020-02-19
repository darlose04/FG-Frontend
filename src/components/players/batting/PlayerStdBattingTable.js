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

    const data = {
      columns: [
        {
          label: "Name",
          field: "name",
          sort: "asc",
          width: 200
        },
        {
          label: "Team",
          field: "team",
          sort: "asc",
          width: 100
        },
        {
          label: "Games",
          field: "games",
          sort: "asc",
          width: 100
        },
        {
          label: "PA",
          field: "pa",
          sort: "asc",
          width: 100
        },
        {
          label: "AB",
          field: "ab",
          sort: "asc",
          width: 100
        },
        {
          label: "H",
          field: "h",
          sort: "asc",
          width: 100
        },
        {
          label: "1B",
          field: "single",
          sort: "asc",
          width: 100
        },
        {
          label: "2B",
          field: "double",
          sort: "asc",
          width: 100
        },
        {
          label: "3B",
          field: "triple",
          sort: "asc",
          width: 100
        },
        {
          label: "HR",
          field: "hr",
          sort: "asc",
          width: 100
        },
        {
          label: "R",
          field: "r",
          sort: "asc",
          width: 100
        },
        {
          label: "RBI",
          field: "rbi",
          sort: "asc",
          width: 100
        },
        {
          label: "SB",
          field: "sb",
          sort: "asc",
          width: 100
        },
        {
          label: "BB",
          field: "bb",
          sort: "asc",
          width: 100
        },
        {
          label: "IBB",
          field: "ibb",
          sort: "asc",
          width: 100
        },
        {
          label: "SO",
          field: "so",
          sort: "asc",
          width: 100
        },
        {
          label: "HBP",
          field: "hbp",
          sort: "asc",
          width: 100
        },
        {
          label: "SF",
          field: "sf",
          sort: "asc",
          width: 100
        },
        {
          label: "SH",
          field: "sh",
          sort: "asc",
          width: 100
        },
        {
          label: "GDP",
          field: "gdp",
          sort: "asc",
          width: 20
        },
        {
          label: "AVG",
          field: "avg",
          sort: "asc",
          width: 100
        },
        {
          label: "WAR",
          field: "war",
          sort: "desc",
          width: 100
        }
      ],
      rows: stats.map(info => ({
        name: info.name,
        team: info.team,
        games: info.games,
        pa: info.plate_appearances,
        ab: info.at_bats,
        h: info.hits,
        single: info.singles,
        double: info.doubles,
        triple: info.triples,
        hr: info.home_runs,
        r: info.runs,
        rbi: info.rbi,
        sb: info.sb,
        bb: info.bb,
        ibb: info.ibb,
        so: info.so,
        hbp: info.hbp,
        sf: info.sf,
        sh: info.sh,
        gdp: info.gdp,
        avg: info.avg,
        war: info.war
      }))
    };

    return (
      <MDBDataTable striped bordered hover data={data} />

      // <table
      //   className="table table-sm table-striped table-bordered table-hover text-center standard"
      //   style={{ fontSize: "0.8rem", padding: ".2rem", whiteSpace: "nowrap" }}
      // >
      //   <thead>
      //     <tr>
      //       <th className={stdClass} onClick={showStd} style={clickStyle}>
      //         Standard
      //       </th>
      //       <th className={advClass} onClick={showAdv} style={clickStyle}>
      //         Advanced
      //       </th>
      //     </tr>
      //   </thead>
      //   <thead>
      //     <tr className="bg-success text-white">
      //       <th scope="col">Name</th>
      //       <th scope="col">Team</th>
      //       <th scope="col">Games</th>
      //       <th scope="col">PA</th>
      //       <th scope="col">AB</th>
      //       <th scope="col">H</th>
      //       <th scope="col">1B</th>
      //       <th scope="col">2B</th>
      //       <th scope="col">3B</th>
      //       <th scope="col">HR</th>
      //       <th scope="col">R</th>
      //       <th scope="col">RBI</th>
      //       <th scope="col">SB</th>
      //       <th scope="col">BB</th>
      //       <th scope="col">IBB</th>
      //       <th scope="col">SO</th>
      //       <th scope="col">HBP</th>
      //       <th scope="col">SF</th>
      //       <th scope="col">SH</th>
      //       <th scope="col">GDP</th>
      //       <th scope="col">AVG</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {stats.map(info => (
      //       <tr key={info.id}>
      //         <td>
      //           <a className="text-dark" href={`/players/${info.name}`}>
      //             {info.name}
      //           </a>
      //         </td>
      //         <td>
      //           <a className="text-dark" href={`/teamselect/${info.team}`}>
      //             {info.team}
      //           </a>
      //         </td>
      //         <td>{info.games}</td>
      //         <td>{info.plate_appearances}</td>
      //         <td>{info.at_bats}</td>
      //         <td>{info.hits}</td>
      //         <td>{info.singles}</td>
      //         <td>{info.doubles}</td>
      //         <td>{info.triples}</td>
      //         <td>{info.home_runs}</td>
      //         <td>{info.runs}</td>
      //         <td>{info.rbi}</td>
      //         <td>{info.sb}</td>
      //         <td>{info.bb}</td>
      //         <td>{info.ibb}</td>
      //         <td>{info.so}</td>
      //         <td>{info.hbp}</td>
      //         <td>{info.sf}</td>
      //         <td>{info.sh}</td>
      //         <td>{info.gdp}</td>
      //         <td>{info.avg}</td>
      //       </tr>
      //     ))}
      //   </tbody>
      // </table>
    );
  }
}
