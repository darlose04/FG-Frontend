import React, { Component } from "react";
import BattingComponent from "./batting/BattingComponent";
import StartingComponent from "./pitching/StartingComponent";
import ReliefComponent from "./pitching/ReliefComponent";
import Spinner from "../../layout/Spinner";
import PlayerHittingChart from "./charts/PlayerHittingChart";
import PlayerStartingChart from "./charts/PlayerStartingChart";
import PlayerRelievingChart from "./charts/PlayerRelievingChart";

import axios from "axios";

const baseUrl = "https://www.fgbaseballapi.com/api";

export default class PlayerSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerHitting: [],
      playerStarting: [],
      playerRelieving: [],
      loading: true
    };
  }

  async componentDidMount() {
    let playerName = this.props.match.params.player;

    let hitting = await axios.get(
      `${baseUrl}/playerbatting/players/${playerName}`
    );

    let sortedHitting = hitting.data.sort((a, b) => {
      return b.season - a.season;
    });

    let starting = await axios.get(
      `${baseUrl}/playerstarting/players/${playerName}`
    );

    let sortedStarting = starting.data.sort((a, b) => {
      return b.season - a.season;
    });

    let relieving = await axios.get(
      `${baseUrl}/playerrelieving/players/${playerName}`
    );

    let sortedRelieving = relieving.data.sort((a, b) => {
      return b.season - a.season;
    });

    this.setState({
      playerHitting: sortedHitting,
      playerStarting: sortedStarting,
      playerRelieving: sortedRelieving,
      loading: false
    });
  }

  render() {
    let playerName = this.props.match.params.player;

    const {
      playerHitting,
      playerStarting,
      playerRelieving,
      loading
    } = this.state;

    return (
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <div>
            {playerHitting.length === 0 &&
            playerStarting.length === 0 &&
            playerRelieving.length === 0 ? (
              <div>
                <h1 className="mt-3 mb-2 text-center">No Player Found</h1>
                <h4 className="text-center">
                  <a className="text-success" href="/players">
                    Return to Search
                  </a>
                </h4>
              </div>
            ) : (
              <div>
                <h1 className="my-3">{playerName}</h1>
                {playerStarting.length > 0 ? (
                  <div>
                    <h3>Starting Pitching</h3>
                    <StartingComponent data={playerStarting} />
                    <h3>Starting Pitching Chart</h3>
                    <PlayerStartingChart startingData={playerStarting} />
                  </div>
                ) : (
                  <div></div>
                )}
                {playerRelieving.length > 0 ? (
                  <div>
                    <h3>Relief Pitching</h3>
                    <ReliefComponent data={playerRelieving} />
                    <h3>Relief Pitching Chart</h3>
                    <PlayerRelievingChart reliefData={playerRelieving} />
                  </div>
                ) : (
                  <div></div>
                )}
                <h3>Hitting</h3>
                <BattingComponent data={playerHitting} />
                <h3>Hitting Chart</h3>
                <PlayerHittingChart data={playerHitting} />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
