import React, { Component } from "react";
import StdBattingTable from "./StdBattingTable";
import AdvBattingTable from "./AdvBattingTable";

export default class BattingComponent extends Component {
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
          <StdBattingTable
            stats={data}
            showStd={showStd}
            showAdv={showAdv}
            stdClass={stdClass}
            advClass={advClass}
            clickStyle={clickStyle}
          />
        ) : adv ? (
          <AdvBattingTable
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