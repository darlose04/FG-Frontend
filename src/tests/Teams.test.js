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

  it("shows the form and table when team hitting button is clicked, then changes state of season when form is submitted", () => {
    const wrapper = shallow(<Teams />);
    expect(wrapper.state().hittingTable).toEqual(false);
    wrapper.find(".teamHittingBtn").simulate("click");
    expect(wrapper.state().hittingTable).toEqual(true);

    expect(wrapper.find(SeasonSelect)).toBeDefined();

    expect(wrapper.state().season).toEqual(2019);
    expect(wrapper.find(".seasonSelectForm")).toBeDefined();
    // wrapper.find(".seasonSelectForm").simulate("submit", {
    //   target: { defaultValue: "2002" }
    // });
  });
});

// Full rendering testing
describe("Full testing", () => {
  it("calls componentDidMount", () => {
    sinon.spy(Teams.prototype, "componentDidMount");
    const wrapper = mount(<Teams />);
    expect(Teams.prototype.componentDidMount).toHaveProperty("callCount", 1);
  });
});
