import React, { Component } from "react";
import StdBattingTable from "./StdBattingTable";
import AdvBattingTable from "./AdvBattingTable";

export default class BattingComponent extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <StdBattingTable stats={data} />

        <AdvBattingTable stats={data} />
      </div>
    );
  }
}
