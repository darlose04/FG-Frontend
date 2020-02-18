import React, { Component } from "react";
import PlayerStdStartingTable from "./PlayerStdStartingTable";
import PlayerAdvStartingTable from "./PlayerAdvStartingTable";

export default class PlayerStartingPitchingComponent extends Component {
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
          <PlayerStdStartingTable
            stats={data}
            showStd={showStd}
            showAdv={showAdv}
            stdClass={stdClass}
            advClass={advClass}
            clickStyle={clickStyle}
          />
        ) : adv ? (
          <PlayerAdvStartingTable
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
