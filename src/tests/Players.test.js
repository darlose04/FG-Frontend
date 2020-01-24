import React from "react";
import { shallow, mount } from "../enzyme";

import Players from "../components/players/Players";

// Shallow testing
describe("<Players />", () => {
  it("renders Players component", () => {
    const wrapper = shallow(<Players />);
    expect(wrapper.find(Players)).toBeDefined();
  });
});
