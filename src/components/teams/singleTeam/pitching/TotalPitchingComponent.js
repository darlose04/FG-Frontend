import React, { Component } from "react";
import StdPitchingTable from "./StdPitchingTable";
import AdvPitchingTable from "./AdvPitchingTable";

export default class TotalPitchingComponent extends Component {
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
        <h2>Totals</h2>
        {std ? (
          <StdPitchingTable
            stats={data}
            showStd={showStd}
            showAdv={showAdv}
            stdClass={stdClass}
            advClass={advClass}
            clickStyle={clickStyle}
          />
        ) : adv ? (
          <AdvPitchingTable
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
