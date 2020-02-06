import React from "react";
import { shallow, mount } from "../../enzyme";
import logos from "../../logos";

import TeamSelect from "../../components/teams/TeamSelect";

describe("TeamSelect component", () => {
  it("renders the TeamSelect component", () => {
    const wrapper = shallow(<TeamSelect logos={logos} />);
    expect(wrapper.find(TeamSelect)).toBeDefined();
  });

  it("renders the correct number of logos", () => {
    const wrapper = shallow(<TeamSelect logos={logos} />);
    expect(wrapper.find("img")).toHaveLength(30);
  });
});
