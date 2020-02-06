import React from "react";
import { shallow } from "../../../enzyme";

import TeamPageBtns from "../../../components/teams/singleTeam/TeamPageBtns";

describe("<TeamPageBtns />", () => {
  it("renders the TeamPageBtns component", () => {
    const wrapper = shallow(<TeamPageBtns />);
    expect(wrapper.find(TeamPageBtns)).toBeDefined();
  });

  it("renders two buttons", () => {
    const wrapper = shallow(<TeamPageBtns />);
    expect(wrapper.find("button")).toHaveLength(2);
  });

  it("renders the hitting selection button", () => {
    const wrapper = shallow(<TeamPageBtns />);
    expect(wrapper.find(".hittingBtn")).toBeDefined();
  });

  it("renders the pitching selection button", () => {
    const wrapper = shallow(<TeamPageBtns />);
    expect(wrapper.find(".pitchingBtn")).toBeDefined();
  });
});
