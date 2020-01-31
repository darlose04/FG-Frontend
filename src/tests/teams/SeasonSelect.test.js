import React from "react";
import { shallow, mount } from "../../enzyme";
import sinon from "sinon";

import SeasonSelect from "../../components/teams/SeasonSelect";

describe("elements in SeasonSelect are rendered", () => {
  it("renders the form", () => {
    const wrapper = shallow(<SeasonSelect />);
    expect(wrapper.find("form")).toHaveLength(1);
  });

  it("renders the options for the form", () => {
    const wrapper = shallow(<SeasonSelect />);
    expect(wrapper.find("option")).toHaveLength(19);
  });

  it("renders the buttons", () => {});
});
