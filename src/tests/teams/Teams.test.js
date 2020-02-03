import React from "react";
import { shallow, mount } from "../../enzyme";
import sinon from "sinon";
import axios from "axios";

import TeamStats from "../../components/teams/TeamStats";
import SeasonSelect from "../../components/teams/SeasonSelect";
import TeamStandardBattingTable from "../../components/teams/batting/TeamStandardBattingTable";
import TeamAdvancedBattingTable from "../../components/teams/batting/TeamAdvancedBattingTable";
import TeamPageBtns from "../../components/teams/TeamPageBtns";

// Shallow testing
describe("<TeamStats />", () => {
  it("renders TeamStats component", () => {
    const wrapper = shallow(<TeamStats />);
    expect(wrapper.find(TeamStats)).toBeDefined();
  });

  it("renders the SeasonSelect component", () => {
    const wrapper = shallow(<TeamStats />);
    expect(wrapper.find(SeasonSelect)).toBeDefined();
  });

  it("renders the TeamStandardBattingTable component", () => {
    const wrapper = shallow(<TeamStats />);
    expect(wrapper.find(TeamStandardBattingTable)).toBeDefined();
  });

  it("renders the TeamAdvancedBattingTable component", () => {
    const wrapper = shallow(<TeamStats />);
    expect(wrapper.find(TeamAdvancedBattingTable)).toBeDefined();
  });

  it("renders buttons", () => {
    const wrapper = shallow(<TeamPageBtns />);
    expect(wrapper.find("button")).toHaveLength(2);
    expect(wrapper.find(".teamHittingBtn")).toBeDefined();
    expect(wrapper.find(".teamPitchingBtn")).toBeDefined();
  });

  it("teamBatting state is the correct length before and after call to API", async () => {
    const wrapper = shallow(<TeamStats />);
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
    const wrapper = shallow(<TeamStats />);
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
    sinon.spy(TeamStats.prototype, "componentDidMount");
    const wrapper = mount(<TeamStats />);
    expect(TeamStats.prototype.componentDidMount).toHaveProperty(
      "callCount",
      1
    );
  });

  it("allows props for the SeasonSelect component", () => {
    const wrapper = mount(<SeasonSelect season={2019} />);
    expect(wrapper.props().season).toEqual(2019);
  });

  it("allows props for the TeamStandardBattingTable component", () => {
    const wrapper = mount(<TeamStandardBattingTable stats={[1, 2, 3]} />);
    expect(wrapper.props().stats).toHaveLength(3);
    expect(wrapper.props().stats).toEqual([1, 2, 3]);
  });

  it("allows props for the TeamAdvancedBattingTable component", () => {
    const wrapper = mount(<TeamAdvancedBattingTable stats={[1, 2, 3]} />);
    expect(wrapper.props().stats).toHaveLength(3);
    expect(wrapper.props().stats).toEqual([1, 2, 3]);
  });

  it("shows table and form after clicking team hitting button", () => {
    const wrapper = mount(<TeamStats />);
    expect(wrapper.state().battingStats).toEqual("");
    wrapper.find(".teamHittingBtn").simulate("click");
    expect(wrapper.state().battingStats).toEqual("standard");
  });
});
