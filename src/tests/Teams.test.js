import React from "react";
import { shallow, mount } from "../enzyme";
import sinon from "sinon";
import axios from "axios";

import Teams from "../components/teams/Teams";
import SeasonSelect from "../components/teams/SeasonSelect";
import TeamBattingTable from "../components/teams/TeamBattingTable";

// Shallow testing
describe("<Teams />", () => {
  it("renders Teams component", () => {
    const wrapper = shallow(<Teams />);
    expect(wrapper.find(Teams)).toBeDefined();
  });

  it("renders the SeasonSelect component", () => {
    const wrapper = shallow(<Teams />);
    expect(wrapper.find(SeasonSelect)).toBeDefined();
  });

  it("renders the TeamBattingTable component", () => {
    const wrapper = shallow(<Teams />);
    expect(wrapper.find(TeamBattingTable)).toBeDefined();
  });

  it("renders buttons", () => {
    const wrapper = shallow(<Teams />);
    expect(wrapper.find("button")).toHaveLength(2);
    expect(wrapper.find(".teamHittingBtn")).toBeDefined();
    expect(wrapper.find(".teamPitchingBtn")).toBeDefined();
  });

  it("shows table and form after clicking team hitting button", () => {
    const wrapper = shallow(<Teams />);
    expect(wrapper.state().hittingTable).toEqual(false);
    wrapper.find(".teamHittingBtn").simulate("click");
    expect(wrapper.state().hittingTable).toEqual(true);
  });

  it("teamBatting state is the correct length before and after call to API", async () => {
    const wrapper = shallow(<Teams />);
    expect(wrapper.state().teamBatting).toHaveLength(0);
    let season = 2002;
    let batting = await axios.get(
      `https://www.fgbaseballapi.com/api/teambatting/${season}`
    );

    wrapper.setState({
      teamBatting: batting.data
    });

    expect(wrapper.state().teamBatting).toHaveLength(30);
  });

  it("season state can be changed", () => {
    const wrapper = shallow(<Teams />);
    expect(wrapper.state().season).toEqual(2019);
    wrapper.setState({
      season: 2015
    });
    expect(wrapper.state().season).toEqual(2015);
  });
});

// Full rendering testing
describe("Full testing", () => {
  it("calls componentDidMount", () => {
    sinon.spy(Teams.prototype, "componentDidMount");
    const wrapper = mount(<Teams />);
    expect(Teams.prototype.componentDidMount).toHaveProperty("callCount", 1);
  });

  it("allows props for the SeasonSelect component", () => {
    const wrapper = mount(<SeasonSelect season={2019} />);
    expect(wrapper.props().season).toEqual(2019);
  });

  it("allows props for the TeamBattingTable component", () => {
    const wrapper = mount(<TeamBattingTable stats={[1, 2, 3]} />);
    expect(wrapper.props().stats).toHaveLength(3);
    expect(wrapper.props().stats).toEqual([1, 2, 3]);
  });
});
