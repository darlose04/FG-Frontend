import React, { Component } from "react";
import PlayerStdBattingTable from "./PlayerStdBattingTable";
import PlayerAdvBattingTable from "./PlayerAdvBattingTable";

export default class PlayerBattingComponent extends Component {
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
          <PlayerStdBattingTable
            stats={data}
            showStd={showStd}
            showAdv={showAdv}
            stdClass={stdClass}
            advClass={advClass}
            clickStyle={clickStyle}
          />
        ) : adv ? (
          <PlayerAdvBattingTable
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
