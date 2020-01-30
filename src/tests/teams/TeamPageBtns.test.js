import React from "react";
import { shallow } from "../../enzyme";

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
});
