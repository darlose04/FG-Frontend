import React, { Component } from "react";
import axios from "axios";

const baseUrl = "https://www.fgbaseballapi.com/api";

export default class PlayerSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerHitting: [],
      playerStarting: [],
      playerRelieving: []
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
      playerRelieving: sortedRelieving
    });
  }

  render() {
    let playerName = this.props.match.params.player;

    return (
      <div>
        <h1 className="mt-3">{playerName}</h1>
      </div>
    );
  }
}
