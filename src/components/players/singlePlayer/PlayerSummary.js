import React, { Component } from "react";
import BattingComponent from "./batting/BattingComponent";
import axios from "axios";

const baseUrl = "https://www.fgbaseballapi.com/api";

export default class PlayerSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerHitting: [],
      playerStarting: [],
      playerRelieving: [],
      standard: true,
      advanced: false,
      stdClass: "bg-success text-white",
      advClass: "text-success"
    };

    this.showStandard = this.showStandard.bind(this);
    this.showAdvanced = this.showAdvanced.bind(this);
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

  showStandard() {
    this.setState({
      standard: true,
      advanced: false,
      stdClass: "bg-success text-white",
      advClass: "text-success"
    });
  }

  showAdvanced() {
    this.setState({
      standard: false,
      advanced: true,
      stdClass: "text-success",
      advClass: "bg-success text-white"
    });
  }

  render() {
    let playerName = this.props.match.params.player;

    const {
      playerHitting,
      playerStarting,
      playerRelieving,
      standard,
      advanced,
      stdClass,
      advClass
    } = this.state;

    return (
      <div>
        <h1 className="mt-3">{playerName}</h1>
        <BattingComponent
          data={playerHitting}
          std={standard}
          adv={advanced}
          stdClass={stdClass}
          advClass={advClass}
          showStd={this.showStandard}
          showAdv={this.showAdvanced}
          clickStyle={clickStyle}
        />
      </div>
    );
  }
}
