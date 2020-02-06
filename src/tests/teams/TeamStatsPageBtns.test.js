import React from "react";
import { shallow } from "../../enzyme";
import sinon from "sinon";

import TeamStatsPageBtns from "../../components/teams/TeamStatsPageBtns";

// Shallow testing
describe("<TeamStatsPageBtns />", () => {
  it("renders the TeamStatsPageBtns component", () => {
    const wrapper = shallow(<TeamStatsPageBtns />);
    expect(wrapper.find(TeamStatsPageBtns)).toBeDefined();
  });

  it("renders two buttons", () => {
    const wrapper = shallow(<TeamStatsPageBtns />);
    expect(wrapper.find("button")).toHaveLength(2);
  });

  it("renders the team hitting button", () => {
    const wrapper = shallow(<TeamStatsPageBtns />);
    expect(wrapper.find(".teamHittingBtn")).toBeDefined();
  });

  it("renders the team pitching button", () => {
    const wrapper = shallow(<TeamStatsPageBtns />);
    expect(wrapper.find(".teamPitchingBtn")).toBeDefined();
  });
});
