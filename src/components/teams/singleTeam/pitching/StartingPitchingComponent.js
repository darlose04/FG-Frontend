import React, { Component } from "react";
import StdStartingTable from "./StdStartingTable";
import AdvStartingTable from "./AdvStartingTable";

export default class StartingPitchingComponent extends Component {
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
        <h2>Starting</h2>
        {std ? (
          <StdStartingTable
            stats={data}
            showStd={showStd}
            showAdv={showAdv}
            stdClass={stdClass}
            advClass={advClass}
            clickStyle={clickStyle}
          />
        ) : adv ? (
          <AdvStartingTable
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
