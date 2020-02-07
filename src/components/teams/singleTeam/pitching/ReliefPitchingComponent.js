import React, { Component } from "react";
import StdRelievingTable from "./StdRelievingTable";
import AdvRelievingTable from "./AdvRelievingTable";

export default class ReliefPitchingComponent extends Component {
  render() {
    const {
      std,
      adv,
      data,
      showStd,
      showAdv,
      stdClass,
      advClass,
      clickStyle
    } = this.props;
    return (
      <div>
        <h2>Relieving</h2>
        {std ? (
          <StdRelievingTable
            stats={data}
            showStd={showStd}
            showAdv={showAdv}
            stdClass={stdClass}
            advClass={advClass}
            clickStyle={clickStyle}
          />
        ) : adv ? (
          <AdvRelievingTable
            stats={data}
            showStd={showStd}
            showAdv={showAdv}
            stdClass={stdClass}
            advClass={advClass}
            clickStyle={clickStyle}
          />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
