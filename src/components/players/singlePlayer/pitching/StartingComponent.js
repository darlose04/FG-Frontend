import React, { Component } from "react";
import StdStartingTable from "./StdStartingTable";
import AdvStartingTable from "./AdvStartingTable";

export default class StartingComponent extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <StdStartingTable stats={data} />
        <AdvStartingTable stats={data} />
      </div>
    );
  }
}
