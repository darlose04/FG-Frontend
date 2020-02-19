import React, { Component } from "react";
import StdReliefTable from "./StdReliefTable";
import AdvReliefTable from "./AdvReliefTable";

export default class ReliefComponent extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <StdReliefTable stats={data} />
        <AdvReliefTable stats={data} />
      </div>
    );
  }
}
