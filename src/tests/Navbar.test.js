import React from "react";
import { shallow, mount } from "../enzyme";

import Navbar from "../components/layout/Navbar";

// Shallow testing
describe("<Navbar />", () => {
  it("renders Navbar component", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(Navbar)).toBeDefined();
  });
});
