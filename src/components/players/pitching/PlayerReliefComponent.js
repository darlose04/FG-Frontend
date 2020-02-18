import React, { Component } from "react";
import PlayerStdReliefTable from "./PlayerStdReliefTable";
import PlayerAdvReliefTable from "./PlayerAdvReliefTable";

export default class PlayerReliefComponent extends Component {
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
        {std ? (
          <PlayerStdReliefTable
            stats={data}
            showStd={showStd}
            showAdv={showAdv}
            stdClass={stdClass}
            advClass={advClass}
            clickStyle={clickStyle}
          />
        ) : adv ? (
          <PlayerAdvReliefTable
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
