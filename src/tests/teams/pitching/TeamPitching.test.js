import React from "react";
import { shallow, mount } from "../../../enzyme";
import sinon from "sinon";
import axios from "axios";

import Teams from "../../../components/teams/Teams";
import TeamPageBtns from "../../../components/teams/TeamPageBtns";
import SeasonSelect from "../../../components/teams/SeasonSelect";
import PitchingButtons from "../../../components/teams/pitching/PitchingButtons";
import TeamStandardPitchingTable from "../../../components/teams/pitching/TeamStandardPitchingTable";
import TeamAdvancedPitchingTable from "../../../components/teams/pitching/TeamAdvancedPitchingTable";
import TeamStdStartingTable from "../../../components/teams/pitching/TeamStdStartingTable";
import TeamAdvStartingTable from "../../../components/teams/pitching/TeamAdvStartingTable";
import TeamStdRelievingTable from "../../../components/teams/pitching/TeamStdRelievingTable";
import TeamAdvRelievingTable from "../../../components/teams/pitching/TeamAdvRelievingTable";

describe("Team page pitching components", () => {
  it("renders the TeamPageBtns component", () => {
    const wrapper = shallow(<Teams />);
    expect(wrapper.find(TeamPageBtns)).toBeDefined();
  });

  it("simulates clicking the pitching button which renders SeasonSelect and PitchingButtons", () => {
    const wrapper = mount(<Teams />);
    const pitchingBtn = wrapper.find("button.teamPitchingBtn");
    expect(wrapper.find("button")).toHaveLength(2);
    pitchingBtn.simulate("click");
    expect(wrapper.find("button")).toHaveLength(8);
  });

  it("renders the standard team pitching table when the Team Pitching button is clicked", () => {
    const wrapper = mount(<Teams />);
    const pitchingBtn = wrapper.find("button.teamPitchingBtn");
    pitchingBtn.simulate("click");
    expect(wrapper.find("table")).toHaveLength(1);
    expect(wrapper.find("thead")).toHaveLength(1);
    expect(wrapper.find("tbody")).toHaveLength(1);
    expect(wrapper.find("th")).toHaveLength(26);
  });
});
