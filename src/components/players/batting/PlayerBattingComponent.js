import React, { Component } from "react";
import PlayerStdBattingTable from "./PlayerStdBattingTable";
import PlayerAdvBattingTable from "./PlayerAdvBattingTable";

export default class PlayerBattingComponent extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <PlayerStdBattingTable stats={data} />
        <PlayerAdvBattingTable stats={data} />
      </div>
    );
  }
}
