import React from "react";
import { shallow, mount } from "../enzyme";

import App from "../App";

// Shallow testing
describe("<App />", () => {
  it("renders App component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(App)).toBeDefined();
  });
});
