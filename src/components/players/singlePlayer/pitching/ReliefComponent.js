import React, { Component } from "react";
import StdReliefTable from "./StdReliefTable";
import AdvReliefTable from "./AdvReliefTable";

export default class ReliefComponent extends Component {
  render() {
    const {
      data,
      std,
      adv,
      stdClass,
      advClass,
      showStd,
      showAdv,
      clickStyle
    } = this.props;

    return (
      <div>
        {std ? (
          <StdReliefTable
            stats={data}
            showStd={showStd}
            showAdv={showAdv}
            stdClass={stdClass}
            advClass={advClass}
            clickStyle={clickStyle}
          />
        ) : adv ? (
          <AdvReliefTable
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
