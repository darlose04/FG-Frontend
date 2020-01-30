import React from "react";
import { shallow } from "../../enzyme";
import sinon from "sinon";

import TeamPageBtns from "../../components/teams/TeamPageBtns";

// Shallow testing
describe("<TeamPageBtns />", () => {
  it("renders the TeamPageBtns component", () => {
    const wrapper = shallow(<TeamPageBtns />);
    expect(wrapper.find(TeamPageBtns)).toBeDefined();
  });

  it("renders two buttons", () => {
    const wrapper = shallow(<TeamPageBtns />);
    expect(wrapper.find("button")).toHaveLength(2);
  });

  it("renders the team hitting button", () => {
    const wrapper = shallow(<TeamPageBtns />);
    expect(wrapper.find(".teamHittingBtn")).toBeDefined();
  });

  it("renders the team pitching button", () => {
    const wrapper = shallow(<TeamPageBtns />);
    expect(wrapper.find(".teamPitchingBtn")).toBeDefined();
  });
});
