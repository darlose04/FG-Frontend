import React from "react";
import { shallow, mount } from "../../enzyme";
import logos from "../../logos";

import TeamSelect from "../../components/teams/TeamSelect";

describe("TeamSelect component", () => {
  it("renders the TeamSelect component", () => {
    const wrapper = shallow(<TeamSelect logos={logos} />);
    expect(wrapper.find(TeamSelect)).toBeDefined();
  });
});
