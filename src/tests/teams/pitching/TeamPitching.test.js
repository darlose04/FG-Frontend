import React from "react";
import { shallow, mount } from "../../enzyme";
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
