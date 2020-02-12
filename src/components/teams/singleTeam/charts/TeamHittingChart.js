import React, { Component } from "react";

export default class TeamHittingChart extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div>
        <h1>This component will display stats in chart form</h1>
      </div>
    );
  }
}
