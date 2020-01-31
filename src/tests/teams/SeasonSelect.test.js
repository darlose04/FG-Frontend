import React from "react";
import { shallow, mount } from "../../enzyme";
import sinon from "sinon";

import SeasonSelect from "../../components/teams/SeasonSelect";

describe("elements in SeasonSelect are rendered", () => {
  it("renders the form", () => {
    const wrapper = shallow(<SeasonSelect />);
    expect(wrapper.find("form")).toHaveLength(1);
  });
});
