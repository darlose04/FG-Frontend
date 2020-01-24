import React from "react";
import { shallow, mount } from "../enzyme";

import Teams from "../components/teams/Teams";

// Shallow testing
describe("<Teams />", () => {
  it("renders Teams component", () => {
    const wrapper = shallow(<Teams />);
    expect(wrapper.find(Teams)).toBeDefined();
  });
});
