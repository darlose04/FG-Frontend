import React from "react";
import { shallow, mount } from "../../../enzyme";
import sinon from "sinon";
import axios from "axios";

import TeamPage from "../../../components/teams/singleTeam/TeamPage";
import TeamPageBtns from "../../../components/teams/singleTeam/TeamPageBtns";
import StdBattingTable from "../../../components/teams/singleTeam/batting/StdBattingTable";
import AdvBattingTable from "../../../components/teams/singleTeam/batting/AdvBattingTable";

describe("TeamPage component", () => {
  it("renders the TeamPage component", () => {
    const wrapper = shallow(<TeamPage team="Cubs" />);
    expect(wrapper.find(TeamPage)).toBeDefined();
  });

  it("renders the TeamPageBtns", () => {});
});
