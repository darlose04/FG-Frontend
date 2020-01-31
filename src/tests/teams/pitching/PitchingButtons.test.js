import React from "react";
import { shallow, mount } from "../../../enzyme";

import PitchingButtons from "../../../components/teams/pitching/PitchingButtons";

describe("renders PitchingButtons component", () => {
  it("renders three buttons", () => {
    const wrapper = shallow(<PitchingButtons />);
    expect(wrapper.find("button")).toHaveLength(3);
  });
});
